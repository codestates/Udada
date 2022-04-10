import React, { useState } from 'react';
import PetItem from '../components/PetItem';
import Profile from '../components/Profile';



import '../App.css';


function PetListContainer({petUserInfo}) {

const [isPetUser, setIsPetUser] = useState(false);
const [userInfo, setUserInfo] = useState(petUserInfo);

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


  return (
    <div>
      {isPetUser ? <Profile Information={userInfo} 
                            handleLogin={handleLogin}
                            title="pet user application"/> : 
        <div id="petUserInfo-container">
        <div id="petUserInfo-header">
            <div id='petUserInfo-btn-div'>
                <button id='petUserInfo-btn' onClick={()=>show()}>우리아이 등록</button>
            </div>
            <select name="" id="petUserInfo-select">
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

        <div id="petUserInfo-body">
          {petUserInfo.map((item, idx) => <PetItem item={item} key={idx} 
                                          handleUser={() => handleUser(item)}/>)}
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
                  <div className="body-infobox">
                    <div className="body-infobox-img">
                      <img src={petUserInfo[1].img} alt={petUserInfo[1].name} />
                    </div>
                    <div className="body-infobox-info">
                      <div className="body-infobox-name">{petUserInfo[1].name} {petUserInfo[1].petAge}살</div>
                      <div className="body-infobox-howBig">{petUserInfo[1].howBig}</div>
                      <div className="body-infobox-location">{petUserInfo[1].location}</div>
                      <div className="body-infobox-content">{petUserInfo[1].content}</div>

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

                      <div id="pet-registration-careType-container">
                        <div>
                          <div className="days-title">✔︎ 희망시급을 입력해주세요</div>
                          <div>
                            <input type="text" id="registrationPay"/>
                            <span>(원)</span>
                          </div>
                        </div>
                        <div id="pet-registration-careType">
                          <div className="days-title">✔︎ 돌봄 유형을 선택해주세요</div>
                          <select name="" id="careType">
                            <option value="">산책</option>
                            <option value="">집돌봄</option>
                          </select>
                        </div>
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

export default PetListContainer;
