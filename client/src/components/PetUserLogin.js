import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logo } from '../assets/images'
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function PetUserLogin({ handleResponseSuccess, setAccessToken, userType, setUserType, onChange }) {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleInputValue = (key) => (e) => {
        setLoginInfo({ ...loginInfo, [key]: e.target.value });
    };


    const handleLogin = () => {
        // TODO : 서버에 로그인을 요청하고, props로 전달된 callback을 호출합니다.
        // TODO : 이메일 및 비밀번호를 입력하지 않았을 경우 에러를 표시해야 합니다.
        if (loginInfo.email && loginInfo.password) {
            axios.post(
                "https://localhost:4000/links/login/petuser",
                {
                    email: loginInfo.email,
                    password: loginInfo.password
                },
                { headers: { "Content-Type": "application/json" }, withCredentials: true }
            ).then((res) => {
                // console.log(res.data.data.accessToken);
                setAccessToken(res.data.data.accessToken);
                //onChange('user');
                setUserType('user')
                handleResponseSuccess(userType);
                navigate('/');
            })
        } else {
            setErrorMessage('이메일과 비밀번호를 입력하세요');
        }
    };
    return (
        <div>
            <center className="login-body">
                <div className='login-social-here-container'>
                    <h2 id="loginH2">Login</h2>
                    <div className='login-social-here-btn'>
                        <span className='login-text'>간편 로그인</span>
                        <button
                            // onClick={this.socialLoginHandler}
                            id='login-social-button1'>
                            <img id="login-social-kakao-logo" alt="kakao-login-logo" src={logo[0]} />
                            <span>카카오 로그인</span>
                        </button>
                        <button
                            // onClick={this.socialLoginHandler}
                            id='login-social-button2'>
                            <img id="login-social-naver-logo" alt="naver-login-logo" src={logo[1]} />
                            <span>네이버 로그인</span>
                        </button>
                    </div>
                    <form className="login-here-box" onSubmit={(e) => e.preventDefault()}>
                        <div className="login-here-input">
                            <span className='login-text'>일반 로그인</span>
                            <input type='email' onChange={handleInputValue('email')} placeholder="E-mail을 입력해주세요" />
                            <input
                                type='password'
                                onChange={handleInputValue('password')}
                                placeholder="비밀번호를 입력해주세요"
                            />
                        </div>
                        <div className="login-not-exist">
                            <Link to='/signup'>아직 아이디가 없으신가요?</Link>
                        </div>
                        <button id='login-button' type='submit' onClick={handleLogin}>
                            로그인
                        </button>
                        <div className='alert-box'>{errorMessage}</div>
                    </form>
                </div>

            </center>
        </div>
    );
}
