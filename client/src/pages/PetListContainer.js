import React, { useState } from 'react';
import PetItem from '../components/PetItem';
import Profile from '../components/Profile';
import { locations, time, dummyData } from '../assets/state'
import $ from "jquery";



// 내정보 불러와서 프롭스로 내려줘야함

import '../App.css';
import axios from 'axios';



function PetListContainer({ accessToken, petUserInfo}) {
  // console.log(petUserInfo)

  const [isPetUser, setIsPetUser] = useState(false);
  //선택된 유저 정보를 상세 Profile.js 페이지로 넘어갈때 값을 넘겨줌
  const [clickedUserInfo, setClickedUserInfo] = useState(petUserInfo);
  const [otherComponent, setOtherComponent] = useState({
    //default 설정값 -> placeholer에 default값 보여지도록 추후 설정
    days: '요일 협의',
    startdate: '07',
    enddate: '07',
    payment: 9160
  });
  const [petUserAll, setPetUserAll] = useState(dummyData.petUser);


  const body = document.querySelector("body");
  body.addEventListener('click', clickBodyEvent);

  function show() {
    const box = document.getElementById("petSitterInfo-apply")
    box.style.display = "block"
  }

  function clickBodyEvent(event){
    const target = event.target;
    // console.log(target)

    if($(event.target).hasClass("popup-wrap") ){
          const box = document.getElementById("petSitterInfo-apply")
    box.style.display = "none"
    }
  
  }


  function hide() {
    // const target = event.target;
    const box = document.getElementById("petSitterInfo-apply")
    box.style.display = "none"
  }
  const handleUser = (item) => {
    setIsPetUser(true)
    // console.log(item);
    setClickedUserInfo(item);
  }
  const handleLogin = () => {
    setIsPetUser(false);
  }

  // const getClickedLocation = (e) => {
  //   console.log()
  //   setLocation(e.target.value);
  // }

  // 사용자가 선택한 지역에 따라 등록된 펫시터들의 모든 정보를 받아오는 함수
  const handleUserInfoByLocation = (e) => {
    axios.get(`${process.env.REACT_APP_API_URL}/bookings/petuser/?location=${e.target.value}`)
      .then((result) => {
        //받아온 data로 유저 정보 update
        // console.log(result.data.data);
        setPetUserAll(result.data.data);
      })
  }


  const handleUserRegister = () => {
    // console.log(userInfo);
    axios.post(
      `${process.env.REACT_APP_API_URL}/bookings/petuser`,
      {
        location: petUserInfo.location,
        content: petUserInfo.content,
        startdate: otherComponent.startdate,
        enddate: otherComponent.enddate,
        payment: otherComponent.payment,
        days: otherComponent.days,
      },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    ).then((result) => {
      // console.log(result.data);
    })
  }

  const handleInputValue = (key) => (e) => {
    setOtherComponent({ ...otherComponent, [key]: e.target.value });
  };

  //let days = '';
  const handleInputWeekdaysValue = (key) => (e) => {
    //클릭이 될때마다 days가 "월화수목,,," string에 바로 붙이도록
    const query = 'input[name="days"]:checked';
    const selectedEls = document.querySelectorAll(query);

    // 선택된 목록에서 value 찾기
    let result = '';
    selectedEls.forEach((el) => {
      result += el.value;
    });

    // 출력
    //console.log(result);
    setOtherComponent({ ...otherComponent, [key]: result })
  };

  return (
    <div>
      {isPetUser ?
        // user로 인증이 되었다면 프로필 컴포넌트를 띄워 세부사항 확인 가능 
        <Profile Information={clickedUserInfo}
          handleLogin={handleLogin}
          title="pet user application" 
          setIsPetUser={setIsPetUser}
          accessToken={accessToken}
          postUrl="petuser"/>

        : //모든 사람에게 보여지는 list
        <div id="petUserInfo-container">
          <div id="petUserInfo-header">
            <div id='petUserInfo-btn-div'>
              <button id='petUserInfo-btn' onClick={() => show()}>우리아이 등록</button>
            </div>
            <select name="" id="petUserInfo-select" onChange={handleUserInfoByLocation}>
              <option value="">돌봄 지역을 선택해주세요</option>
              {locations.map((el, idx) =>
                <option key={idx} value={el}>{el}</option>
              )}
            </select>
          </div>
          {/* petUserAll -> 유저 전체 정보 */}
          <div id="petUserInfo-body">
            {petUserAll.map((item, idx) => <PetItem item={item} key={idx}
              handleUser={() => handleUser(item)} />)}
          </div>

          <div id="petSitterInfo-apply">
            <div className="popup-wrap" id="popup" >
              <div className="popup">
                <div className="popup-head">
                  <span className="head-title">UDADA</span>
                </div>
                <div className="popup-body">
                  <div className="body-content">
                    <div className="body-titlebox">
                      <h1>registration💕</h1>
                    </div>
                    {/* 개인 유저 정보 -> petUserInfo */}
                    <div className="body-infobox">
                      <div className="body-infobox-img">
                        <img src={petUserInfo.img} alt={petUserInfo.name} />
                      </div>

                      <div className="body-infobox-info">

                        <div className="body-infobox-name">{petUserInfo.name} ({petUserInfo.petAge}살)</div>


                        <div className="body-infobox-howBig">{petUserInfo.howBig}</div>
                        <div className="body-infobox-location">{petUserInfo.location}</div>
                        <div className="body-infobox-content">{petUserInfo.content}</div>

                      </div>
                    </div>
                    {/*---------------- 유저가 신청 등록하는 입력창------------ */}
                    <div className="body-infobox-input">
                      <div className="days">
                        <div className="days-title">✔︎ 가능한 요일을 체크해주세요</div>
                        <div className="all_days">
                          <input type="checkbox" id="a1" name="days" value="월" onClick={handleInputWeekdaysValue('days')} />
                          <label htmlFor="a1"><span>Mon</span></label>
                          <input type="checkbox" id="a2" name="days" value="화" onClick={handleInputWeekdaysValue('days')} />
                          <label htmlFor="a2"><span>Tue</span></label>
                          <input type="checkbox" id="a3" name="days" value="수" onClick={handleInputWeekdaysValue('days')} />
                          <label htmlFor="a3"><span>Wed</span></label>
                          <input type="checkbox" id="a4" name="days" value="목" onClick={handleInputWeekdaysValue('days')} />
                          <label htmlFor="a4"><span>Thu</span></label>
                          <input type="checkbox" id="a5" name="days" value="금" onClick={handleInputWeekdaysValue('days')} />
                          <label htmlFor="a5"><span>Fri</span></label>
                          <input type="checkbox" id="a6" name="days" value="토" onClick={handleInputWeekdaysValue('days')} />
                          <label htmlFor="a6"><span>Sat</span></label>
                          <input type="checkbox" id="a7" name="days" value="일" onClick={handleInputWeekdaysValue('days')} />
                          <label htmlFor="a7"><span>Sun</span></label>
                        </div>
                      </div>
                      <div className="days">
                        <div className="days-title">✔︎ 가능한 시간을 체크해주세요</div>
                        <div className="registrationTime-container">
                          <select name="startTime" id="registrationStartTime" onClick={handleInputValue('startdate')}>
                            {time.map((el, idx) =>
                              <option key={idx} value={el}>{el}</option>
                            )}
                          </select><span>시 부터 </span>

                          <select name="endTime" id="registrationLastTime" onClick={handleInputValue('enddate')}>
                            {time.map((el, idx) =>
                              <option key={idx} value={el}>{el}</option>
                            )}
                          </select><span>시까지 가능해요</span>
                        </div>

                        <div id="pet-registration-careType-container">
                          <div>
                            <div className="days-title">✔︎ 희망시급을 입력해주세요</div>
                            <div>
                              <input type="text" id="registrationPay" onChange={handleInputValue('payment')} />
                              <span>(원)</span>
                            </div>
                          </div>
                          <div id="pet-registration-careType">
                            <div className="days-title">✔︎ 돌봄 유형을 선택해주세요</div>
                            <select name="" id="careType">
                              <option value="산책">산책</option>
                              <option value="집돌봄">집돌봄</option>
                            </select>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="popup-foot">

                  <span className="pop-btn confirm" id="confirm" onClick={() => { hide(); handleUserRegister(); }}>등록하기</span>

                  {/* <span class="pop-btn close" id="close">창 닫기</span> */}
                </div>
              </div>
            </div>
          </div>

        </div>
      }


    </div>
  );
}

export default PetListContainer;
