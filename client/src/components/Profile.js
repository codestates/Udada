import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Profile({petSitterInfo, handlePetSitterLogin}) {

    function show() {
        const box = document.getElementById("profile-modal-container")
        box.style.display = "flex"
    }


    return (
        <div id="profile-container">
            <div id="profile-title">pet sitter application</div>
            <div id="profile-info">
                <div id="profile-info-img">
                    <img src={petSitterInfo.img} alt={petSitterInfo.name} />
                </div>
                <div id="profile-info-write">
                    <div className="profile-info-name">{petSitterInfo.name}</div>
                    <div className="profile-info-age">{petSitterInfo.age} 살</div>
                    <div className="profile-info-location">{petSitterInfo.location} 거주</div>
                    <div className="profile-info-time">돌봄가능 시간 {petSitterInfo.startTime}시 ~{petSitterInfo.lastTime}시</div>
                    <div className="profile-info-days">{petSitterInfo.days} 가능해요!</div>
                    <div className="profile-info-payment">시급은 {petSitterInfo.payment}원 입니다</div>
                    <div className="profile-info-content">{petSitterInfo.content}</div>
                </div>
            </div>
            <div id="profile-date">
                {/* 예약시간 달력 */}API 예약 달력 들어갈 자리 
            </div>
            <button id="profile-btn" onClick={() => show()}>신청하기</button>


            <div className="popup-wrap" id="profile-modal-container" >
                <div id="profile-modal">
                    <span id="profile-modal-close" onClick={handlePetSitterLogin}>✕</span>
                    <div id="profile-modal-text">신청이 완료되었습니다! 🎉</div>
                    <div id="profile-modal-btn-container">
                        <button className="profile-modal-btn" onClick={handlePetSitterLogin}>둘러보기</button>
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
  