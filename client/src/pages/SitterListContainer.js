import React, { useState } from 'react';
import SitterItem from '../components/SitterItem';
import Profile from '../components/Profile';
import axios from "axios";
import { locations, time } from '../assets/state'
import $ from "jquery";


import '../App.css';

// 서버 registration

function SitterListContainer({ accessToken }) {
  // if (accessToken !== '') {
  //   accessToken = accessToken;
  // } else {
  //   accessToken = window.sessionStorage.getItem("accessToken")
  // }


  const petSitterInfo = window.JSON.parse(sessionStorage.getItem("petSitterInfo"));

  const [isPetSitter, setIsPetSitter] = useState(false);
  const [clickedSitterInfo, setClickedSitterInfo] = useState([]);
  const [sitterInfo, setSitterInfo] = useState(petSitterInfo);
  const [filteredSitter, setFilteredSitter] = useState([]);
  const [otherComponent, setOtherComponent] = useState({
    days: '요일 협의',
    startdate: '07',
    enddate: '07',
    payment: 9160
  });
  // console.log(sitterInfo)
  const body = document.querySelector("body");
  body.addEventListener('click', clickBodyEvent);

  function clickBodyEvent(event) {
    const target = event.target;
    console.log(target)

    if ($(event.target).hasClass("popup-wrap")) {
      const box = document.getElementById("petSitterInfo-apply")
      box.style.display = "none"
    }

  }

  function show() {
    const box = document.getElementById("petSitterInfo-apply")
    box.style.display = "block"
  }

  async function hide() {
    await axios.post(
      'https://localhost:4000/bookings/petsitter',
      {
        location: sitterInfo.location,
        content: sitterInfo.content,
        ...otherComponent
      },
      {
        headers: { authorization: `Bearer ${accessToken}` }
      }
    )
    const box = document.getElementById("petSitterInfo-apply")
    box.style.display = "none"
  }

  const handleClickedPetSitter = (item) => {
    setSitterInfo(item)
    setClickedSitterInfo(item);
    setIsPetSitter(true)
  }

  console.log(clickedSitterInfo)

  const handleLogin = () => {
    setIsPetSitter(false);
  }

  const handleSitterInfo = (e) => {
    console.log(e.target.value)
    axios.get(`https://localhost:4000/bookings/petsitter/?location=${e.target.value}`)
      .then((result) => {
        //받아온 data로 유저 정보 update
        // setUserInfo(result.data.data);
        console.log(result);
        setFilteredSitter(result.data.data);
      })
  }

  // console.log(filteredSitter)

  const handleInputWeekdaysValue = (key) => (e) => {
    //클릭이 될때마다 days가 "월화수목,,," string에 바로 붙이도록
    const query = 'input[name="days"]:checked';
    const selectedEls = document.querySelectorAll(query);
    // console.log(selectedEls);
    // 선택된 목록에서 value 찾기
    let result = '';
    selectedEls.forEach((el) => {
      result += el.value;
    });

    // 출력
    console.log(result);
    setOtherComponent({ ...otherComponent, [key]: result })
  };


  const handleInputValue = (key) => (e) => {
    console.log(key); // 매개변수와, 이벤트 객체가 같이 들어옴.
    console.log(e);
    setOtherComponent({ ...otherComponent, [key]: e.target.value });
  };

  // console.log(sitterInfo);
  // console.log(isPetSitter)
  // console.log(petSitterInfo)
  return (
    <div>
      {isPetSitter ? <Profile Information={clickedSitterInfo}
        handleLogin={handleLogin}
        title="pet sitter application"
        accessToken={accessToken}
        postUrl="petsitter" /> :

        <div id="petSitterInfo-container">
          <div id="petSitterInfo-header">
            <div id='petSitterInfo-btn-div'>
              <button id='petSitterInfo-btn'
                // onClick={sitterInfoFunc
                onClick={() => show()
                }>펫시터 지원하기</button>
            </div>
            <select onChange={handleSitterInfo} name="" id="petSitterInfo-select">
              <option value="">돌봄 지역을 선택해주세요</option>
              {locations.map((el) =>
                <option value={el}>{el}</option>
              )}
            </select>
          </div>

          <div id="petSitterInfo-body">
            {filteredSitter.map((item, idx) => <SitterItem item={item} key={idx} handlePetSitter={handleClickedPetSitter} />)}
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
                    <div className="body-infobox">
                      <div className="body-infobox-img">
                        <img src={sitterInfo.img} alt={"이미지를 등록하세요"} />
                      </div>
                      <div className="body-infobox-info">
                        <div className="body-infobox-name">{sitterInfo.name}</div>
                        <div className="body-infobox-age">{sitterInfo.age}살</div>
                        <div className="body-infobox-location">{sitterInfo.location}</div>
                        <div className="body-infobox-content">{sitterInfo.content}</div>

                      </div>
                    </div>
                    <div className="body-infobox-input">
                      <div className="days">
                        <div className="days-title">✔︎ 가능한 요일을 체크해주세요</div>
                        <div className="all_days">
                          <input type="checkbox" id="a1" name="days" value='월' onClick={handleInputWeekdaysValue('days')} />
                          <label for="a1"><span>Mon</span></label>
                          <input type="checkbox" id="a2" name="days" value='화' onClick={handleInputWeekdaysValue('days')} />
                          <label for="a2"><span>Tue</span></label>
                          <input type="checkbox" id="a3" name="days" value='수' onClick={handleInputWeekdaysValue('days')} />
                          <label for="a3"><span>Wed</span></label>
                          <input type="checkbox" id="a4" name="days" value='목' onClick={handleInputWeekdaysValue('days')} />
                          <label for="a4"><span>Thu</span></label>
                          <input type="checkbox" id="a5" name="days" value='금' onClick={handleInputWeekdaysValue('days')} />
                          <label for="a5"><span>Fri</span></label>
                          <input type="checkbox" id="a6" name="days" value='토' onClick={handleInputWeekdaysValue('days')} />
                          <label for="a6"><span>Sat</span></label>
                          <input type="checkbox" id="a7" name="days" value='일' onClick={handleInputWeekdaysValue('days')} />
                          <label for="a7"><span>Sun</span></label>
                        </div>
                      </div>
                      <div className="days">
                        <div className="days-title">✔︎ 가능한 시간을 체크해주세요</div>
                        <div className="registrationTime-container">
                          <select name="" onChange={handleInputValue("startdate")} id="registrationStartTime">
                            {time.map((el, idx) =>
                              <option key={idx} value={el}>{el}</option>
                            )}
                          </select><span>시 부터 </span>

                          <select name="" onChange={handleInputValue("enddate")} id="registrationLastTime">
                            {time.map((el, idx) =>
                              <option key={idx} value={el}>{el}</option>
                            )}
                          </select><span>시까지 가능해요</span>
                        </div>
                        <div className="days-title">✔︎ 희망시급을 입력해주세요</div>
                        <div>
                          <input type="number" onChange={handleInputValue("payment")} id="registrationPay" />
                          <span>(원)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="popup-foot">
                  <span className="pop-btn confirm" id="confirm" onClick={() => hide()}>등록하기</span>
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

export default SitterListContainer;
