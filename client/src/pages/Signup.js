import React, { useState } from 'react';
import {
    Link, useNavigate
} from 'react-router-dom';

import { Img } from '../assets/images'
// import axios from 'axios';

// axios.defaults.withCredentials = true;

export default function Signup() {
    // TODO : 펫시터, 펫유저 로그인 분류 후 각각의 로그인 창으로 넘어간다
    return (
        <div>
            <div class="signup-body">

                <div class="signup-box">
                    <div class="signup-box-write">
                        <img id="signup-user-img" src={Img[0]} alt="dogface-emoji" />
                        <span id="signup-show-text">반려동물을 돌봐줄 펫시터가 필요해요</span>
                    </div>
                    <Link to="/signup/petuser">
                        <button id="signup-button">유저 회원가입</button>
                    </Link>
                </div>
                <div class="signup-box">
                    <div class="signup-box-write">
                        <img id="signup-sitter-img" src={Img[1]} alt="starface-emoji" />
                        <span id="signup-show-text">든든한 펫시터로 활동하고 싶어요</span>
                    </div>
                    <Link to="/signup/petsitter" >
                        <button id="signup-button">펫시터 회원가입</button>
                    </Link>
                </div>

            </div>

        </div >
    );

}
