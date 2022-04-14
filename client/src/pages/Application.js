import React, { useState } from 'react';
import { dummyData } from '../assets/state'
import { Img } from '../assets/images'
import { Link } from 'react-router-dom';
import Booking from '../components/Booking';
import axios from 'axios';

export default function Application({ petSitterInfo, accessToken }) {

    const info = dummyData.petSitter
    //펫시터정보
    const [sitterBookingList, setSitterBookingList] = useState(info);
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
        //여러 예약 리스트 중 선태된 값을 관리하는 함수
        setIsInfo(item)
        show()
        console.log(item)
    }

    const handleReservation = () => {
        console.log(petSitterInfo)
        axios.get(`https://localhost:4000/bookings/list/petsitter/?location=${petSitterInfo.location}`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
        )
            .then((result) => {
                //받아온 data로 유저 정보 update
                console.log(result);
                setSitterBookingList(result.data.data);
            })
    }


    return (
        <div className="mypage-container">
            <div className="mypage-header">
                <h1>Application💕</h1>

            </div>
            <div className="mypage-body">
                <div className="mypage-sidebar">
                    <Link to="/mypage">
                        <button id="mypage-sidebar-userInfo">내<br /><br />정<br />보</button>
                    </Link>
                    <Link to="/application">
                        <button id="mypage-sidebar-registration" onClick={handleReservation}>신<br />청<br /><br /> 현<br />황</button>
                    </Link>
                </div>

                <div className="mypage-section">
                    {sitterBookingList.map((petSitter, index) => {
                        return <Booking info={petSitter} num={index}
                            key={index}
                            nameWrite="예약을 확인하세요"
                            handleInfo={handleInfo} />
                    })}

                    <div id="booking-information">
                        <div className="booking-information-img">
                            <img src={Img[1]} alt={isInfo.name} />
                        </div>
                        <div className="booking-information-write">
                            <span id="booking-information-close" onClick={() => hide()}>✕</span>
                            <div className="booking-information-name">{petSitterInfo.name} | {petSitterInfo.age}살 </div>
                            <div className="booking-information-location">{isInfo.location} 거주</div>
                            <div className="booking-information-time">돌봄 가능 시간 : {isInfo.startdate}시 ~{isInfo.enddate}시</div>
                            <div className="booking-information-days">요일 : {isInfo.days}</div>
                            <div className="booking-information-payment">시급 : {isInfo.payment}원</div>
                            <div className="booking-information-content">{petSitterInfo.content}</div>
                        </div>
                        <div className="booking-information-communication">
                            <Link to="/mypage">
                                <div className="booking-information-phoneNumber">👉🏻 뒤로 돌아가기 </div>
                            </Link>
                        </div>

                    </div>


                </div>


            </div>


        </div>
    )
}
