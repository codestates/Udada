import React, { useState } from 'react';


function Profile({petSitterInfo, handlePetSitterLogin}) {

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
            <button id="profile-btn" onClick={handlePetSitterLogin}>신청하기</button>
        </div>
        
    );
  }
  
  export default Profile;
  