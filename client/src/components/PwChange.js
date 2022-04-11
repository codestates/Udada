import React, { useState } from 'react';




export default function PwChange({handlePwChange}) {

    function show() {
        const box = document.getElementById("mypage-pwchange-container")
        box.style.display = "flex"
    }

    return(

        <div className="mypage-pwchange-section">
            <div className="mypage-pwchange-box">
                <div className="mypage-pwchange-title">Password </div>
                <div className="mypage-pwchange-input">
                    <form action="">
                        <div>
                            <input type="password" id="nowPassword" placeholder="현재 비밀번호를 입력하세요"/>   
                        </div>
                        <div>
                            <input type="password" id="newPassword" placeholder="새 비밀번호를 입력하세요"/>
                        </div>
                        <input id="mypage-pwchange-btn" type="submit" 
                            value="비밀번호 변경"
                            onClick={() => show()}/>
                    </form>
                </div>
            </div>

            <div className="popup-wrap" id="mypage-pwchange-container" >
                <div id="profile-modal">
                    <span id="profile-modal-close" onClick={handlePwChange}>✕</span>
                    <div id="mypage-pwchange-modal-text"><br/>비밀번호가 변경되었습니다</div>
                    <div id="profile-modal-btn-container">
                        <button className="mypage-pwchange-container-btn" onClick={handlePwChange}>확인</button>
                    </div>
                </div>
            </div>
        </div>


    );
}