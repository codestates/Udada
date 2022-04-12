import React, { useState } from 'react';
import { dummyData } from '../assets/state'
import { Link } from 'react-router-dom';
import Booking from '../components/Booking';



export default function Reservation() {
    //임시 데이터
 const info = dummyData.petSitter;

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
            <h1>Reservation💕</h1>

        </div>
        <div className="mypage-body">
            <div className="mypage-sidebar">
                <Link to="/mypage">
                    <button id="mypage-sidebar-userInfo">내<br/><br/>정<br/>보</button>
                </Link>
                <Link to="/reservation">
                    <button id="mypage-sidebar-booking">예<br/>약<br/><br/> 현<br/>황</button> 
                </Link>
            </div>
            <div className="mypage-section">
                {info.map((petUser, index) => {
                    return <Booking info={petUser} num={index} 
                    key={index} 
                    nameWrite="님이 기다리고 있어요"
                    handleInfo={handleInfo}/>
                })}

                <div id="booking-information">
                    <div className="booking-information-img">
                        <img src={isInfo.img} alt={isInfo.name} />
                    </div>
                    <div className="booking-information-write">
                        <span id="booking-information-close" onClick={() => hide()}>✕</span>
                        <div className="booking-information-name">{isInfo.name } {isInfo.age}살</div>
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
