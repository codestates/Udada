import React, { useState } from 'react';
import { dummyData } from '../assets/state'
import PwChange from '../components/PwChange';



export default function Mypage() {

const [pwChange, setPwChange] = useState(false)
const handlePwChange = () => {
    setPwChange(!pwChange)
}

function show() {
    const box = document.getElementById("mypage-modal-container")
    box.style.display = "flex"
}
function hide() {
    const box = document.getElementById("mypage-modal-container")
    box.style.display = "none"
}
function secessionShow(){
    const box = document.getElementById("mypage-modal-container")
    box.style.display = "none"

    const box1 = document.getElementById("mypage-secession-container")
    box1.style.display = "flex"
}
function secessionHide(){
    const box1 = document.getElementById("mypage-secession-container")
    box1.style.display = "none"
}

 const info = dummyData.petUser[1]
 
  return (
    <div className="mypage-container">
        <div className="mypage-header">
            <h1>My page💕</h1>

        </div>
        <div className="mypage-body">
            <div className="mypage-sidebar">
                <button className="mypage-sidebar-userInfo">내<br/><br/>정<br/>보</button>
                {info.petAge ? <button className="mypage-sidebar-booking">예<br/>약<br/><br/> 현<br/>황</button> 
                :
                <button className="mypage-sidebar-registration">신<br/>청<br/><br/> 현<br/>황</button>
                }
                
            </div>
            
            {pwChange ? <PwChange handlePwChange={handlePwChange}/> : 
            <div className="mypage-section">
                <div className="mypage-section-btn">
                    <button className="mypage-secession" onClick={handlePwChange}>P/W 수정</button>
                    <button className="mypage-edit-password" onClick={() => show()}>탈퇴하기</button>
                </div>
                <div className="mypage-section-profile">
                    <div className="mypage-section-nameAge">
                        <div className="mypage-name">{info.name}</div>
                        <div className="mypage-age">{info.petAge}살</div>
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
                    <div id="profile-modal-text">정상적으로 탈퇴되었습니다 <br/> 다음에 다시 만나요🤙🏻</div>
                    <div id="profile-modal-btn-container">
                    </div>
                </div>
            </div>
            

        </div>


    </div>
  )
}
