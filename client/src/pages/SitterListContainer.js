import React, { useState, useEffect } from 'react';
import SitterItem from '../components/SitterItem';
import Profile from '../components/Profile';
import { Link } from 'react-router-dom';

import '../App.css';



function SitterListContainer({petSitterInfo}) {

const [isPetSitter, setIsPetSitter] = useState(false);
const [sitterInfo, setSitterInfo] = useState(petSitterInfo);

//내정보 데이터 불러와야함 => 펫시터 지원하기 모달창에 프롭스로 내려주기위함 
//아래는 임시로 더미데이터 사용 
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

const handlePetSitterLogin = () => {
  setIsPetSitter(false);
}
  return (
    <div>
      {isPetSitter ?  <Profile petSitterInfo={sitterInfo} 
                               handlePetSitterLogin={handlePetSitterLogin}/> : 
      <div id="petSitterInfo-container">
        <div id="petSitterInfo-header">
            <div id='petSitterInfo-btn-div'>
                <button id='petSitterInfo-btn' onClick={()=>show()}>펫시터 지원하기</button>
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
          <div class="popup-wrap" id="popup"> 
            <div class="popup">	
              <div class="popup-head">	
                  <span class="head-title">UDADA</span>
              </div>
              <div class="popup-body">	
                <div class="body-content">
                  <div class="body-titlebox">
                    <h1>registration💕</h1>
                  </div>
                  <div class="body-infobox">
                    <div class="body-infobox-img">
                      <img src={sitterInfo[1].img} alt={sitterInfo[1].name} />
                    </div>
                    <div class="body-infobox-info">
                      <div class="body-infobox-name">{sitterInfo[1].name}</div>
                      <div class="body-infobox-age">{sitterInfo[1].age}살</div>
                      <div class="body-infobox-location">{sitterInfo[1].location}</div>
                      <div class="body-infobox-content">{sitterInfo[1].content}</div>

                    </div>
                  </div>
                  <div class="body-infobox-input">
                    <div class="days">
                      <div class="days-title">✔︎ 가능한 요일을 체크해주세요</div>
                      <div class="all_days">
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
                    <div class="days">
                      <div class="days-title">✔︎ 가능한 시간을 체크해주세요</div>
                      <div class="registrationTime-container">
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
                      <div class="days-title">✔︎ 희망시급을 입력해주세요</div>
                      <div>
                        <input type="text" id="registrationPay"/>
                        <span>(원)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                  <div class="popup-foot"> 
                    <span class="pop-btn confirm" id="confirm" onClick={() => hide()}>등록하기</span>
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
