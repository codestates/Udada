import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { dummyData } from '../assets/state'swdexa esw/
import PwChange from '../components/PwChange';



export default function Mypage() {
    const petUserInfo = window.JSON.parse(sessionStorage.getItem("petUserInfo"));
    const petSitterInfo = window.JSON.parse(sessionStorage.getItem("petSitterInfo"));
    
    const [pwChange, setPwChange] = useState(false)
    const handlePwChange = () => {
        setPwChange(true)
    }
    const handlePwChangeout = () => {
        setPwChange(false)
    }

    function show() {
        const box = document.getElementById("mypage-modal-container")
        box.style.display = "flex"
    }
    function hide() {
        const box = document.getElementById("mypage-modal-container")
        box.style.display = "none"
    }
    function secessionShow() {
        const box = document.getElementById("mypage-modal-container")
        box.style.display = "none"

        const box1 = document.getElementById("mypage-secession-container")
        box1.style.display = "flex"
    }
    function secessionHide() {
        const box1 = document.getElementById("mypage-secession-container")
        box1.style.display = "none"
    }

    //펫 유저와 펫시터의 정보를 따로 저장
    const info = petUserInfo || petSitterInfo

    return (
        <div className="mypage-container">
            <div className="mypage-header">
                <h1>My page💕</h1>

            </div>
            <div className="mypage-body">
                <div className="mypage-sidebar">
                    <Link to="/mypage">
                        <button id="mypage-sidebar">내<br /><br />정<br />보</button>
                    </Link>
                    {/* petAge값이 있으면 petUser, 없으면 petSitter임을 구분 */}
                    {info.petAge ?
                        <Link to="/reservation">
                            <button id="mypage-sidebar">예<br />약<br /><br /> 현<br />황</button>
                        </Link>
                        :
                        <Link to="/application">
                            <button id="mypage-sidebar">신<br />청<br /><br /> 현<br />황</button>
                        </Link>
                    }
                </div>

                {pwChange ? <PwChange handlePwChangeout={handlePwChangeout} /> :
                    <div className="mypage-section">
                        <div className="mypage-section-btn">
                            <button className="mypage-secession" onClick={handlePwChange}>P/W 수정</button>
                            <button className="mypage-edit-password" onClick={() => show()}>탈퇴하기</button>
                        </div>
                        <div className="mypage-section-profile">
                            <div className="mypage-section-nameAge">
                                <div className="mypage-name">{info.name}</div>
                                <div className="mypage-age">{info.age}살</div>
                            </div>
                            <div className="mypage-email">{info.email}</div>
                            <div className="mypage-phone">{info.phoneNumber}</div>
                            <div className="mypage-content">{info.content}</div>
                        </div>
                    </div>
                }

                <div className="popup-wrap" id="mypage-modal-container" >
                    <div id="profile-modal">
                        <span id="profile-modal-close" onClick={() => hide()}>✕</span>
                        <div id="profile-modal-text" >정말 탈퇴하시겠습니까? 🙄</div>
                        <div id="profile-modal-btn-container">
                            <button className="profile-modal-btn" onClick={() => secessionShow()}>예, 탈퇴합니다</button>
                            {/* <Link to="/mypage"> */}
                            <button className="profile-modal-btn" onClick={() => hide()}>아니요</button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>

                <div className="popup-wrap" id="mypage-secession-container" >
                    <div id="profile-modal">
                        <span id="profile-modal-close" onClick={() => secessionHide()}>✕</span>
                        <div id="profile-modal-text">정상적으로 탈퇴되었습니다 <br /> 다음에 다시 만나요🤙🏻</div>
                        <div id="profile-modal-btn-container">
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}
