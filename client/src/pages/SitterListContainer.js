import React, { useState, useEffect } from 'react';
import SitterItem from '../components/SitterItem';
import Profile from '../components/Profile';
import { Link } from 'react-router-dom';
import axios from "axios";

import '../App.css';

// 서버 registration

function SitterListContainer({petSitterInfo, accessToken}) {

const [isPetSitter, setIsPetSitter] = useState(false);
const [sitterInfo, setSitterInfo] = useState(petSitterInfo);

//내정보 데이터 불러와야함 => 펫시터 지원하기 모달창에 프롭스로 내려주기위함 
//아래는 임시로 더미데이터 사용

// const sitterInfoFunc = () => {
//   // TODO : 서버에 로그인을 요청하고, props로 전달된 callback을 호출합니다.
//   // TODO : 이메일 및 비밀번호를 입력하지 않았을 경우 에러를 표시해야 합니다.
  
//   axios.get(
//       "http://localhost:4000/links/reservation/persitter",
//       {headers: { authorization: `Bearer ${accessToken}`}})
//       .then((res) => {
//       console.log(res);

//       console.log(res);
//       // setAccessToken(res.data.data.accessToken);
//       // console.log(res.data.data.accessToken)

//       // handleResponseSuccess();
//       //console.log(res.cookies);

//       //setRefreshToken(res.cookies);
//       //navigate('/petsitterlist');

//       // navigate('/');
//   })
//   }
  // } else {
  //     setErrorMessage('이메일과 비밀번호를 입력하세요');
  // }

function show() {
  const box = document.getElementById("petSitterInfo-apply")
  box.style.display = "block"
}
function hide() {
  const box = document.getElementById("petSitterInfo-apply")
  box.style.display = "none"
}

const handlePetSitter = (item) => {
  setIsPetSitter(true)
  setSitterInfo(item)
}

const handleLogin = () => {
  setIsPetSitter(false);
}
console.log(isPetSitter)
console.log(petSitterInfo)
  return (
    <div>
      {isPetSitter ?  <Profile Information={sitterInfo} 
                               handleLogin={handleLogin}
                               title="pet sitter application"/> : 

      <div id="petSitterInfo-container">
        <div id="petSitterInfo-header">
            <div id='petSitterInfo-btn-div'>
                <button id='petSitterInfo-btn' 
                // onClick={sitterInfoFunc
                onClick={()=>show()
                }>펫시터 지원하기</button>
            </div>
            <select name="" id="petSitterInfo-select">
                <option value="">돌봄 지역을 선택해주세요</option>
                <option value="">강남구</option>
                <option value="">강동구</option>
                <option value="">강북구</option>
                <option value="">강서구</option>
                <option value="">관악구</option>
                <option value="">광진구</option>
                <option value="">구로구</option>
                <option value="">금천구</option>
                <option value="">노원구</option>
                <option value="">도봉구</option>
                <option value="">동대문구</option>
                <option value="">동작구</option>
                <option value="">마포구</option>
                <option value="">서대문구</option>
                <option value="">서초구</option>
                <option value="">성동구</option>
                <option value="">성북구</option>
                <option value="">송파구</option>
                <option value="">양천구</option>
                <option value="">영등포구</option>
                <option value="">용산구</option>
                <option value="">은평구</option>
                <option value="">종로구</option>
                <option value="">중구</option>
                <option value="">중랑구</option>
            </select>
        </div>
    
        <div id="petSitterInfo-body">
          {petSitterInfo.map((item, idx) => <SitterItem item={item} key={idx} 
                                            handlePetSitter={() => handlePetSitter(item)}/>)}
        </div>



        <div id="petSitterInfo-apply"> 
          <div className="popup-wrap" id="popup" onClick={() => hide()}> 
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
                      <img src={petSitterInfo[1].img} alt={petSitterInfo[1].name} />
                    </div>
                    <div className="body-infobox-info">
                      <div className="body-infobox-name">{petSitterInfo[1].name}</div>
                      <div className="body-infobox-age">{petSitterInfo[1].age}살</div>
                      <div className="body-infobox-location">{petSitterInfo[1].location}</div>
                      <div className="body-infobox-content">{petSitterInfo[1].content}</div>

                    </div>
                  </div>
                  <div className="body-infobox-input">
                    <div className="days">
                      <div className="days-title">✔︎ 가능한 요일을 체크해주세요</div>
                      <div className="all_days">
                        <input type="checkbox" id="a1" name="월" />
                        <label for="a1"><span>Mon</span></label>
                        <input type="checkbox" id="a2" name="화" />
                        <label for="a2"><span>Tue</span></label>
                        <input type="checkbox" id="a3" name="수" />
                        <label for="a3"><span>Wed</span></label>
                        <input type="checkbox" id="a4" name="목" />
                        <label for="a4"><span>Thu</span></label>
                        <input type="checkbox" id="a5" name="금" />
                        <label for="a5"><span>Fri</span></label>
                        <input type="checkbox" id="a6" name="토" />
                        <label for="a6"><span>Sat</span></label>
                        <input type="checkbox" id="a7" name="일" />
                        <label for="a7"><span>Sun</span></label>
                      </div>
                    </div>
                    <div className="days">
                      <div className="days-title">✔︎ 가능한 시간을 체크해주세요</div>
                      <div className="registrationTime-container">
                        <select name="" id="registrationStartTime">
                          <option value="">07</option>
                          <option value="">08</option>
                          <option value="">09</option>
                          <option value="">10</option>
                          <option value="">11</option>
                          <option value="">12</option>
                          <option value="">13</option>
                          <option value="">14</option>
                          <option value="">15</option>
                          <option value="">16</option>
                          <option value="">17</option>
                          <option value="">18</option>
                          <option value="">19</option>
                          <option value="">20</option>
                          <option value="">21</option>
                          <option value="">22</option>
                        </select><span>시 부터 </span>

                        <select name="" id="registrationLastTime">
                          <option value="">07</option>
                          <option value="">08</option>
                          <option value="">09</option>
                          <option value="">10</option>
                          <option value="">11</option>
                          <option value="">12</option>
                          <option value="">13</option>
                          <option value="">14</option>
                          <option value="">15</option>
                          <option value="">16</option>
                          <option value="">17</option>
                          <option value="">18</option>
                          <option value="">19</option>
                          <option value="">20</option>
                          <option value="">21</option>
                          <option value="">22</option>
                        </select><span>시까지 가능해요</span>
                      </div>
                      <div className="days-title">✔︎ 희망시급을 입력해주세요</div>
                      <div>
                        <input type="text" id="registrationPay"/>
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
