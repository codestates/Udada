import React, { useState } from 'react';
import PetItem from '../components/PetItem';
import Profile from '../components/Profile';
import { locations, time } from '../assets/state'

// 내정보 불러와서 프롭스로 내려줘야함

import '../App.css';
import axios from 'axios';



function PetListContainer({ accessToken, petUserInfo, petUserAll, setPetUserAll }) {


  const [isPetUser, setIsPetUser] = useState(false);
  const [userInfo, setUserInfo] = useState(petUserInfo);
  
  //const [location, setLocation] = useState('');


  function show() {
    const box = document.getElementById("petSitterInfo-apply")
    box.style.display = "block"
  }
  function hide() {
    const box = document.getElementById("petSitterInfo-apply")
    box.style.display = "none"
  }

  const handleUser = (item) => {
    setIsPetUser(true)
    setUserInfo(item)
  }
  const handleLogin = () => {
    setIsPetUser(false);
  }

  // const getClickedLocation = (e) => {
  //   console.log()
  //   setLocation(e.target.value);
  // }

  // 사용자가 선택한 지역에 따라 등록된 펫시터들의 모든 정보를 받아오는 함수
  const handleUserInfo = (e) => {
    axios.get(`https://localhost:4000/bookings/petuser/?location=${e.target.value}`)
      .then((result) => {
        //받아온 data로 유저 정보 update
        setUserInfo(result.data.data);
      })
  }


  const handleUserRegister = () => {
    console.log(userInfo);
    axios.post(
      'https://localhost:4000/bookings/petuser',
      {
        location: userInfo.location,
        startdate: userInfo.startdate,
        enddate: userInfo.enddate,
        payment: userInfo.payment,
        //content: userInfo.content,
      },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    ).then((result) => {
      console.log(result.data);
    })


    console.log(userlist)



  }

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };
  const handleInputWeekdaysValue = (key) => (e) => {
    //클릭이 될때마다 days가 "월화수목,,," string에 바로 붙이도록
    let days = e.target.value;
    setUserInfo({ ...userInfo, [key]: days += days });
  };


  return (
    <div>
      {isPetUser ?
        // user로 인증이 되었다면 프로필 컴포넌트를 띄워 세부사항 확인 가능 
        <Profile Information={userInfo}
          handleLogin={handleLogin}
          title="pet user application" />
        : //모든 사람에게 보여지는 list
        <div id="petUserInfo-container">
          <div id="petUserInfo-header">
            <div id='petUserInfo-btn-div'>
              <button id='petUserInfo-btn' onClick={() => show()}>우리아이 등록</button>
            </div>
            <select name="" id="petUserInfo-select" onChange={handleUserInfo}>
              <option value="">돌봄 지역을 선택해주세요</option>
              {locations.map((el) =>
                <option value={el}>{el}</option>
              )}
            </select>
          </div>
          {/* petUserAll -> 유저 전체 정보 */}
          <div id="petUserInfo-body">
            {petUserAll.map((item, idx) => <PetItem item={item} key={idx}
              handleUser={() => handleUser(item)} />)}
          </div>

          <div id="petSitterInfo-apply">
            <div className="popup-wrap" id="popup">
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
                          <input type="checkbox" id="a1" name="월" onChange={handleInputWeekdaysValue('days')} />
                          <label for="a1"><span>Mon</span></label>
                          <input type="checkbox" id="a2" name="화" onChange={handleInputWeekdaysValue('days')} />
                          <label for="a2"><span>Tue</span></label>
                          <input type="checkbox" id="a3" name="수" onChange={handleInputWeekdaysValue('days')} />
                          <label for="a3"><span>Wed</span></label>
                          <input type="checkbox" id="a4" name="목" onChange={handleInputWeekdaysValue('days')} />
                          <label for="a4"><span>Thu</span></label>
                          <input type="checkbox" id="a5" name="금" onChange={handleInputWeekdaysValue('days')} />
                          <label for="a5"><span>Fri</span></label>
                          <input type="checkbox" id="a6" name="토" onChange={handleInputWeekdaysValue('days')} />
                          <label for="a6"><span>Sat</span></label>
                          <input type="checkbox" id="a7" name="일" onChange={handleInputWeekdaysValue('days')} />
                          <label for="a7"><span>Sun</span></label>
                        </div>
                      </div>
                      <div className="days">
                        <div className="days-title">✔︎ 가능한 시간을 체크해주세요</div>
                        <div className="registrationTime-container">
                          <select name="startTime" id="registrationStartTime" onChange={handleInputValue('startdate')}>
                            {time.map((el) =>
                              <option value={el}>{el}</option>
                            )}
                          </select><span>시 부터 </span>

                          <select name="endTime" id="registrationLastTime" onChange={handleInputValue('enddate')}>
                            {time.map((el) =>
                              <option value={el}>{el}</option>
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
