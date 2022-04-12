import React, { useState } from 'react';
import { dummyData } from '../assets/state'
import { Link } from 'react-router-dom';
import Booking from '../components/Booking';



export default function Application() {

 const info = dummyData.petUser

 const [isInfo, setIsInfo] = useState("");

 function show() {
    const box = document.getElementById("booking-information")
    box.style.display = "flex"
}

 function hide() {
    const box = document.getElementById("booking-information")
    box.style.display = "none"
}

 const handleInfo = (item) => {
    setIsInfo(item)
    show()
    console.log(item)
 } 
 
  return (
    <div className="mypage-container">
        <div className="mypage-header">
            <h1>Application💕</h1>

        </div>
        <div className="mypage-body">
            <div className="mypage-sidebar">
                <Link to="/mypage">
                    <button id="mypage-sidebar-userInfo">내<br/><br/>정<br/>보</button>
                </Link>
                <Link to="/application">
                    <button id="mypage-sidebar-registration">신<br/>청<br/><br/> 현<br/>황</button>
                </Link>
            </div>

            <div className="mypage-section">
                {info.map((petSitter, index) => {
                    return <Booking info={petSitter} num={index} 
                    key={index} 
                    nameWrite="가 기다리고 있어요"
                    handleInfo={handleInfo}/>
                })}

                <div id="booking-information">
                    <div className="booking-information-img">
                        <img src={isInfo.img} alt={isInfo.name} />
                    </div>
                    <div className="booking-information-write">
                        <span id="booking-information-close" onClick={() => hide()}>✕</span>
                        <div className="booking-information-name">{isInfo.name} {isInfo.age}살 {isInfo.howBig}</div>
                        <div className="booking-information-location">{isInfo.location} 거주</div>
                        <div className="booking-information-time">돌봄 가능 시간 : {isInfo.startTime}시 ~{isInfo.lastTime}시</div>
                        <div className="booking-information-days">요일 : {isInfo.days}</div>
                        <div className="booking-information-payment">시급 : {isInfo.payment}원</div>
                        <div className="booking-information-content">{isInfo.content}</div>
                    </div>
                    <div className="booking-information-communication">
                        <div className="booking-information-phoneNumber">👉🏻 {isInfo.phoneNumber}로 문자or전화 해주세요</div>
                    </div>

                </div> 
                
                    
            </div>
            

        </div>


    </div>
  )
}
