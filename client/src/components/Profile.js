import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Img } from '../assets/images'

function Profile({ Information, handleLogin, title }) {
    // Information은  PetListContainer에서 어떤 PetItem을 선택했는지 해당 객체를 넘겨받음

    function show() {
        const box = document.getElementById("profile-modal-container")
        box.style.display = "flex"
    }
    //Information.petAge키가 있냐 없냐로 조건문을 줘야하는데 키가 먹히지않아서 일단 임시방편으로 license로 구분하였음


    return (
        <div id="profile-container">
            <div id="profile-title">{title}</div>
            <div id="profile-info">
                <div id="profile-info-img">
                    <img src={Information.petuser.photo} alt={Information.petuser.name} />
                </div>
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
                {/* 예약시간 달력 */}API 예약 달력 들어갈 자리
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
