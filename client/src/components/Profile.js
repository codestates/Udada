import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Profile({Information, handleLogin, title}) {

    function show() {
        const box = document.getElementById("profile-modal-container")
        box.style.display = "flex"
    }
    //Information.petAge키가 있냐 없냐로 조건문을 줘야하는데 키가 먹히지않아서 일단 임시방편으로 license로 구분하였음
    

    return (
        <div id="profile-container">
            <div className="profile-container-back" onClick={handleLogin}>🔙</div>
            <div id="profile-title">{title}</div>
            <div id="profile-info">
                <div id="profile-info-img">
                    <img src={Information.img} alt={Information.name} />
                </div>
                {Information.license ?   
                <div id="profile-info-write">
                    <div className="profile-info-name">{Information.name}</div>
                    <div className="profile-info-age">{Information.age} 살</div>
                    <div className="profile-info-location">{Information.location} 거주</div>
                    <div className="profile-info-time">돌봄 가능 시간 : {Information.startTime}시 ~{Information.lastTime}시</div>
                    <div className="profile-info-days">요일 : {Information.days}</div>
                    <div className="profile-info-payment">시급은 {Information.payment}원 입니다</div>
                    <div className="profile-info-content">{Information.content}</div>
                </div>
                : 
                <div id="profile-info-write">
                    <div className="profile-info-name">{Information.name} {Information.petAge} 살 {Information.howBig}</div>
                    <div className="profile-info-location">{Information.location} 거주</div>
                    <div className="profile-info-time">돌봄 요청 시간 : {Information.startTime}시 ~{Information.lastTime}시</div>
                    <div className="profile-info-days">요일 : {Information.days}</div>
                    <div className="profile-info-careType">{Information.careType} 서비스 원해요</div>
                    <div className="profile-info-payment">시급은 {Information.payment}원 입니다</div>
                    <div className="profile-info-content">{Information.content}</div>
                </div>
                }
            </div>
            <div id="profile-date">
                <div className="profile-date-guide">
                    <span>돌봄을 신청할 요일, <br/>시간을 선택해주세요</span> 
                </div>
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
                </div>

            </div>
            <button id="profile-btn" onClick={() => show()}>신청하기</button>


            <div className="popup-wrap" id="profile-modal-container" >
                <div id="profile-modal">
                    <span id="profile-modal-close" onClick={handleLogin}>✕</span>
                    <div id="profile-modal-text">신청이 완료되었습니다! 🎉</div>
                    <div id="profile-modal-btn-container">
                        <button className="profile-modal-btn" onClick={handleLogin}>둘러보기</button>
                        <Link to="/mypage">
                            <button className="profile-modal-btn">나의 예약현황</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
  }
  
  export default Profile;
  