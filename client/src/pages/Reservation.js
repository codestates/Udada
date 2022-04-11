import React, { useState } from 'react';
import { dummyData } from '../assets/state'
import { Link } from 'react-router-dom';
import Booking from '../components/Booking';



export default function Reservation() {

 const info = dummyData.petSitter
 
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
                {info[1].petAge ? 
                <Link to="/reservation">
                    <button id="mypage-sidebar-booking">예<br/>약<br/><br/> 현<br/>황</button> 
                </Link>
                :
                <Link to="/application">
                    <button id="mypage-sidebar-registration">신<br/>청<br/><br/> 현<br/>황</button>
                </Link>
                }
            </div>
            <div className="mypage-section">
                    {info.map((petUser) => {
                        return <Booking info={petUser} nameWrite="님이 기다리고 있어요"/>
                    })}

            </div>
            

        </div>


    </div>
  )
}
