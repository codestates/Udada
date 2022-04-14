import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Img } from "../assets/images"
import axios from 'axios';

function Profile({Information, handleLogin, title, accessToken, postUrl}) {

    const [IsRequestTime, setIsRequestTime] = useState(({
        days: '요일 협의',
        startdate: '07',
        enddate: '07'
      }));

    // Information은  PetListContainer에서 어떤 PetItem을 선택했는지 해당 객체를 넘겨받음


    async function show() {
        await axios.post(
            `https://localhost:4000/bookings/list/${postUrl}`,
            {
                days: IsRequestTime.days,
                startdate: IsRequestTime.startdate,
                enddate: IsRequestTime.enddate,
                ...IsRequestTime
            },
            {
                headers: { Authorization: `Bearer ${accessToken}` } 
            }
            )
      

        const box = document.getElementById("profile-modal-container")
        box.style.display = "flex"
    }
    //Information.petAge키가 있냐 없냐로 조건문을 줘야하는데 키가 먹히지않아서 일단 임시방편으로 license로 구분하였음
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
        setIsRequestTime({ ...IsRequestTime, [key]: result})
      };

    const handleTimeValue = (key) => (e) => {
        console.log(e.target.value)
        setIsRequestTime({ ...IsRequestTime, [key]: e.target.value})
    }

    return (
        <div id="profile-container">
            <div className="profile-container-back" onClick={handleLogin}>🔙</div>
            <div id="profile-title">{title}</div>
            <div id="profile-info">
                <div id="profile-info-img">

                    <img src={Information.petsitter.photo.includes(".png", ".jpg") ? Information.petsitter.photo : Img[1]} alt={"등록되지 않았습니다."} />
                </div>
// ! petsitter 구분 어떤걸로 할지 변수 고민해보기
                {Information.petsitter_id ?   
                <div id="profile-info-write">
                    <div className="profile-info-name">{Information.petsitter.name}</div>
                    <div className="profile-info-age">{Information.petsitter.age} 살</div>
                    <div className="profile-info-location">{Information.petsitter.location} 거주</div>
                    <div className="profile-info-time">돌봄 가능 시간 : {Information.startdate}시 ~{Information.enddate}시</div>
                    <div className="profile-info-days">요일 : {Information.days}</div>
                    <div className="profile-info-payment">시급은 {Information.payment}원 입니다</div>
                    <div className="profile-info-content">{Information.petsitter.content}</div>
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
                 // ! petsitter 구분 어떤걸로 할지 변수 고민해보기
                {Information.license ?
                    // petSitterList에서 선택하면 보이는 세부사항
                    <div id="profile-info-write">
                        <div className="profile-info-name">{Information.petsitter.name}</div>
                        <div className="profile-info-age">{Information.petsitter.petAge} 살</div>
                        <div className="profile-info-location">{Information.petsitter.location} 거주</div>
                        <div className="profile-info-time">돌봄 가능 시간 : {Information.startdate}시 ~{Information.enddate}시</div>
                        <div className="profile-info-days">요일 : {Information.days}</div>
                        <div className="profile-info-payment">시급은 {Information.payment}원 입니다</div>
                        <div className="profile-info-content">{Information.petsitter.content}</div>
                    </div>
                    :
                    // petUserList에서 선택하면 보이는 세부사항
                    <div id="profile-info-write">
                        <div className="profile-info-name">{Information.petuser.name} | {Information.petuser.petAge} 살 | {Information.petuser.howBig}</div>
                        <div className="profile-info-location">{Information.petuser.location} 거주</div>
                        <div className="profile-info-time">돌봄 요청 시간 : {Information.startdate}시 ~{Information.enddate}시</div>
                        <div className="profile-info-days">요일 : {Information.days}</div>
                        <div className="profile-info-careType">{Information.careType} 서비스 원해요</div>
                        <div className="profile-info-payment">시급은 {Information.payment}원 입니다</div>
                        <div className="profile-info-content">{Information.petuser.content}</div>
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
                    <input type="checkbox" id="a1" value="월" name="days" onClick={handleInputWeekdaysValue('days')}/>
                    <label for="a1"><span>Mon</span></label>
                    <input type="checkbox" id="a2" value="화" name="days" onClick={handleInputWeekdaysValue('days')}/>
                    <label for="a2"><span>Tue</span></label>
                    <input type="checkbox" id="a3" value="수" name="days" onClick={handleInputWeekdaysValue('days')}/>
                    <label for="a3"><span>Wed</span></label>
                    <input type="checkbox" id="a4" value="목" name="days" onClick={handleInputWeekdaysValue('days')}/>
                    <label for="a4"><span>Thu</span></label>
                    <input type="checkbox" id="a5" value="금" name="days" onClick={handleInputWeekdaysValue('days')}/>
                    <label for="a5"><span>Fri</span></label>
                    <input type="checkbox" id="a6" value="토" name="days" onClick={handleInputWeekdaysValue('days')}/>
                    <label for="a6"><span>Sat</span></label>
                    <input type="checkbox" id="a7" value="일" name="days" onClick={handleInputWeekdaysValue('days')}/>
                    <label for="a7"><span>Sun</span></label>
                    </div>
                </div>
                <div className="days">
                      <div className="days-title">✔︎ 가능한 시간을 체크해주세요</div>
                      <div className="registrationTime-container">
                        <select name="" id="registrationStartTime" onChange={handleTimeValue('startdate')}>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                        </select><span>시 부터 </span>

                        <select name="" id="registrationLastTime" onChange={handleTimeValue('enddate')}>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
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
