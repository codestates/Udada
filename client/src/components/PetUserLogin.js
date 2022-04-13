import React, { useState, useNavigate } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets/images'
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function PetUserLogin({ accessToken, setAccessToken }) {

    const navigate = useNavigate();

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const [url, setUrl] = useState('https://github.com/login/oauth/authorize?client_id=ec1357998ab3f7ed0e27')
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputValue = (key) => (e) => {
        setLoginInfo({ ...loginInfo, [key]: e.target.value });
    };
    const handleLogin = () => {
        // TODO : 서버에 로그인을 요청하고, props로 전달된 callback을 호출합니다.
        // TODO : 이메일 및 비밀번호를 입력하지 않았을 경우 에러를 표시해야 합니다.
        if (loginInfo.email && loginInfo.password) {
            axios.post(
                "http://localhost:4000/links/login/petuser",
                {
                    email: loginInfo.email,
                    password: loginInfo.password
                },
                { headers: { "Content-Type": "application/json" }, withCredentials: true }
            ).then((res) => {
                // accessToken 변화가 생길때마다 state 끌어올려주기
                console.log(res.data.data.accessToken);
                console.log(res.cookie);
                setAccessToken(res.data.data.accessToken);

                navigate('/');
            })
        } else {
            setErrorMessage('이메일과 비밀번호를 입력하세요');
        }
    };

    function socialLoginHandler() {
        window.location.assign(url)
    }
    return (
        <div>
            <center className="login-body">
                <h1>유저 로그인</h1>
                <div className='login-social-here-container'>
                    소셜 로그인
                    <button
                        onClick={socialLoginHandler}
                        id='login-social-button'
                    >
                        <img id="login-social-kakao-logo" alt="kakao-login-logo" src={logo[0]} />
                        카카오 로그인
                    </button>

                    <button
                        // onClick={this.socialLoginHandler}
                        id='login-social-button'
                    >
                        <img id="login-social-naver-logo" alt="naver-login-logo" src={logo[1]} />
                        네이버 로그인
                    </button>
                    <form className="login-here-box" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <span>이메일</span>
                            <input type='email' onChange={handleInputValue('email')} />
                        </div>
                        <div>
                            <span>비밀번호</span>
                            <input
                                type='password'
                                onChange={handleInputValue('password')}
                            />
                        </div>
                        <div>
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
