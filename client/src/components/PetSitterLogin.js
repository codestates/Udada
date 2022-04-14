import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logo } from '../assets/images'
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function PetSitterLogin({ handleResponseSuccess, setAccessToken, userType, setUserType, setIsLogin }) {

    const navigate = useNavigate();

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });


    //client_id 환경변수 클라이언트로
    const [url, setUrl] = useState(`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`)
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputValue = (key) => (e) => {
        // console.log(key); // 매개변수와, 이벤트 객체가 같이 들어옴.
        // console.log(e);
        setLoginInfo({ ...loginInfo, [key]: e.target.value });
    };



    const handleLogin = () => {
        // TODO : 서버에 로그인을 요청하고, 인증 토큰을 받아옵니다.
        // TODO : 이메일 및 비밀번호를 입력하지 않았을 경우 에러를 표시해야 합니다.
        if (loginInfo.email && loginInfo.password) {
            axios.post(
                `${process.env.REACT_APP_API_URL}/links/login/petsitter`,
                {
                    email: loginInfo.email,
                    password: loginInfo.password
                },

                { headers: { "Content-Type": "application/json" } }

            ).then((res) => {
                // console.log(res);
                setAccessToken(res.data.data.accessToken);
                // console.log(res.data.data.accessToken)
                //console.log(res.cookies);
                //setRefreshToken(res.cookies);
                setIsLogin(true);
                setUserType('sitter');
                window.sessionStorage.setItem('userType', "sitter");
                window.sessionStorage.setItem('accessToken', res.data.data.accessToken);
                handleResponseSuccess(userType);
                navigate('/');
            })
        } else {
            setErrorMessage('이메일과 비밀번호를 입력하세요');
        }
    };

    function socialLoginHandler() {
        window.location.assign(url)
        window.sessionStorage.setItem('githubuserType', "githubsitter");
    }

    return (
        <div>
            <center className="login-body">
                <div className='login-social-here-container'>


                    <h2 id="loginH2">pet sitter Login</h2>
                    <div className='login-social-here-btn'>
                        <span className='login-text'>간편 로그인</span>
                        <button
                            onClick={socialLoginHandler}
                            id='login-social-button1'>
                            <img id="login-social-kakao-logo" alt="kakao-login-logo" src={logo[0]} />
                            <span>깃헙 로그인</span>
                        </button>
                        <button
                            id='login-social-button2'>
                            <div id='naverIdLogin' />
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
                                placeholder="비밀번호를 입력해주세요" />
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
