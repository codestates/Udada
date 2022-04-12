import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Img } from '../assets/images'

axios.defaults.withCredentials = true;


export default function Mypage({ petUserInfo, petSitterInfo }) {


    return (
        <div>
            <div class="login-body">
                <div class="login-box">
                    <img id="login-user-img" src={Img[0]} alt="dogface-emoji" />
                    <span id="login-show-text">{petUserInfo.name}님 안녕하세요! 로그인 성공</span>
                    <Link to="/login/petuser">
                        <button id="login-button">유저 로그인</button>
                    </Link>
                </div>
                <div class="login-box">
                    <img id="login-sitter-img" src={Img[1]} alt="starface-emoji" />
                    <span id="login-show-text">{petSitterInfo.name}님 안녕! 펫시터 화이팅!!</span>
                    <Link to="/login/petsitter">
                        <button id="login-button">펫시터 로그인</button>
                    </Link>
                </div>
            </div>
        </div>
    );

}
