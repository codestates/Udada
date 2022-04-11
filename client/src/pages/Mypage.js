import React from 'react'
import { dummyData } from '../assets/state'


export default function Mypage({  }) {

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

            <div className="mypage-section">
                <div className="mypage-section-btn">
                    <button className="mypage-edit-password">탈퇴하기</button>
                    <button className="mypage-secession">P/W 수정</button>
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

        </div>


    </div>
  )
}
