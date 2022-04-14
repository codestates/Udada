import React, { useState } from 'react';
import { dummyData } from '../assets/state'
import { Img } from '../assets/images'
import { Link } from 'react-router-dom';
import Booking from '../components/Booking';
import axios from 'axios';


export default function Reservation({ petUserInfo, accessToken }) {
    //임시 데이터
    const info = dummyData.petUser;
    //유저정보
    const [userBookingList, setUserBookingList] = useState(info);
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

    const handleReservation = () => {
        axios.get(`https://localhost:4000/bookings/list/petuser/?location=${petUserInfo.location}`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
        )
            .then((result) => {
                //받아온 data로 유저 정보 update
                console.log(result.data.data);
                setUserBookingList(result.data.data);
            })
    }

    return (
        <div className="mypage-container">
            <div className="mypage-header">
                <h1>Reservation💕</h1>

            </div>
            <div className="mypage-body">
                <div className="mypage-sidebar">
                    <Link to="/mypage">
                        <button id="mypage-sidebar-userInfo">내<br /><br />정<br />보</button>
                    </Link>
                    <Link to="/reservation">
                        <button id="mypage-sidebar-booking" onClick={handleReservation}>예<br />약<br /><br /> 현<br />황</button>
                    </Link>
                </div>
                <div className="mypage-section">
                    {userBookingList.map((user, index) => {
                        return <Booking info={user} num={index}
                            key={index}
                            nameWrite="예약을 확인하세요"
                            handleInfo={handleInfo} />
                    })}

                    <div id="booking-information">
                        <div className="booking-information-img">
                            <img src={Img[0]} alt={isInfo.name} />
                        </div>
                        <div className="booking-information-write">
                            <span id="booking-information-close" onClick={() => hide()}>✕</span>
                            <div className="booking-information-name">{petUserInfo.name} {petUserInfo.age}살</div>
                            <div className="booking-information-location">{isInfo.location} 거주</div>
                            <div className="booking-information-time">돌봄 가능 시간 : {isInfo.startdate}시 ~{isInfo.enddate}시</div>
                            <div className="booking-information-days">요일 : {isInfo.days}</div>
                            <div className="booking-information-payment">시급 : {isInfo.payment}원</div>
                            <div className="booking-information-content">{petUserInfo.content}</div>
                        </div>
                        <div className="booking-information-communication">
                            <div className="booking-information-phoneNumber">
                                <Link to="/mypage">
                                    👉🏻👉🏻👉🏻👉🏻 뒤로 돌아가기
                                </Link>
                            </div>

                        </div>

                    </div>


                </div>


            </div>


        </div>
    )
}
