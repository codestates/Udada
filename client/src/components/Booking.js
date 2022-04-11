import React, { useState } from 'react';


export default function Booking({info, nameWrite}) {

    return(

            <div className="booking-item">
                <div className="booking-item-line">
                    <div className="booking-item-img">
                        <img src={info.img} alt={info.name} />
                    </div>
                </div>
                <div className="booking-item-write">
                    <span className="booking-item-name">🐥 {info.name}{nameWrite} </span>
                    <div className="booking-item-time">
                        <span className="booking-item-days">{info.days}</span>
                        <span className="booking-item-startTime"> {info.startTime}시 - </span>
                        <span className="booking-item-lastTime">{info.lastTime}시</span>
                    </div>
                </div>
            </div>

    );
}