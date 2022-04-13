import React, { useState} from 'react';
import SitterItem from '../components/SitterItem';
import Profile from '../components/Profile';
import axios from "axios";
import { locations } from '../assets/state'

import '../App.css';

// 서버 registration

function SitterListContainer({petSitterInfo, accessToken}) {

const [isPetSitter, setIsPetSitter] = useState(false);
const [sitterInfo, setSitterInfo] = useState(petSitterInfo);
console.log(sitterInfo)

function show() {
  const box = document.getElementById("petSitterInfo-apply")
  box.style.display = "block"
}

async function hide() {
  await axios.post(
    'http://localhost:4000/bookings/petsitter',
    {
      location: sitterInfo[0].location,
      date: sitterInfo[0].date,
      payment: sitterInfo[0].payment,
      content: sitterInfo[0].content,
    },
    {
      headers: {autorization: accessToken}
    }
  )
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

const handleSitterInfo = (e) => {
  axios.get(`https://localhost:4000/bookings/petsitter/?location=${e.target.value}`)
    .then((result) => {
      //받아온 data로 유저 정보 update
      // setUserInfo(result.data.data);
    })
}

const handleSitterRegister = () => {
 
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
                {locations.map((el) =>
                <option value={el}>{el}</option>
              )}
            </select>
        </div>
    
        <div id="petSitterInfo-body">
          {petSitterInfo.map((item, idx) => <SitterItem item={item} key={idx} 
                                            handlePetSitter={() => handlePetSitter(item)}/>)}
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
