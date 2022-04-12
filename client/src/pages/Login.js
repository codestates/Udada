import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Img } from '../assets/images'

axios.defaults.withCredentials = true;


export default function Login({ handleResponseSuccess }) {
    // TODO : 펫시터, 펫유저 로그인 분류 후 각각의 로그인 창으로 넘어간다
    // TODO : 로그인 성공시 accessToken을 받아와서 mypage로 넘겨줄 수 있어야 한다
    return (
        <div>
            <div class="login-body">
                <div class="login-box">
                    <div class="signup-box-write">
                        <img id="login-user-img" src={Img[0]} alt="dogface-emoji" />
                        <span id="login-show-text">펫시터가 필요합니다</span>
                    </div>
                    <Link to="/login/petuser">
                        <button id="login-button">유저 로그인</button>
                    </Link>
                </div>
                <div class="login-box">
                    <div class="signup-box-write">
                        <img id="login-sitter-img" src={Img[1]} alt="starface-emoji" />
                        <span id="login-show-text">펫시터로 활동합니다</span>
                    </div>    
                    <Link to="/login/petsitter">
                        <button id="login-button">펫시터 로그인</button>
                    </Link>
                </div>
            </div>
        </div>
    );

}
