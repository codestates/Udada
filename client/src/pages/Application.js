import React, { useState } from 'react';
import { dummyData } from '../assets/state'
import { Link } from 'react-router-dom';


export default function Application() {

 const info = dummyData.petUser[1]
 
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
                {info.petAge ? 
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
            </div>
            

        </div>


    </div>
  )
}
