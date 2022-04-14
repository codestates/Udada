import React, { useState } from 'react';
import { Img } from '../assets/images'

export default function Booking({ info, nameWrite, num, handleInfo }) {

    return (
        <>
            <div className="booking-item" onClick={() => handleInfo(info)}>
                <div className="booking-number">no.{num + 1}</div>
                <div className="booking-item-line">
                    <div className="booking-item-img">
                        <img src={Img[1]} alt={info.name} />
                    </div>
                </div>
                <div className="booking-item-write">
                    <span className="booking-item-name">🐥 {info.name}{nameWrite} </span>
                    <div className="booking-item-time">
                        <span className="booking-item-days">{info.days}</span>
                        <span className="booking-item-startTime"> {info.startdate}시 - </span>
                        <span className="booking-item-lastTime">{info.enddate}시</span>
                    </div>
                </div>
            </div>
        </>
    );
}