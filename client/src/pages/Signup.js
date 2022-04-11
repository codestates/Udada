import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import axios from 'axios';

// axios.defaults.withCredentials = true;

export default function Signup() {
    /*
    const [userinfo, setuserinfo] = useState({
        email: '',
        name: '',
        age: 0,
        password: '',
        phonenum: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();
    const handleInputValue = (key) => (e) => {
        setuserinfo({ ...userinfo, [key]: e.target.value });
    };
    const handleSignup = () => {
        // TODO : 서버에 회원가입을 요청 후 로그인 페이지로 이동하세요.
        //        회원가입 성공 후 로그인 페이지 이동은 다음 코드를 이용하세요.
        //
        //        history.push("/");
        //
        // TODO : 모든 항목을 입력하지 않았을 경우 에러를 표시해야 합니다.
        if (userinfo.email && userinfo.password && userinfo.name && userinfo.phonenum) {

            axios
                .post(
                    'https://localhost:4000/signup',
                    {
                        email: userinfo.email,
                        password: userinfo.password,
                        name: userinfo.name,
                        phonenum: userinfo.phonenum,
                    },
                    { 'Content-Type': 'application/json', withCredentials: true }
                ).then((res) => {
                    history.push('/');
                }).catch((err) => alert('모든 항목은 필수입니다'));
        } else {
            setErrorMessage('모든 항목은 필수입니다');
        }

    };
    return (
        <div>
            <center>
                <h1>Sign Up</h1>
                <div>모든 항목은 필수입니다</div>
                <form onSubmit={(e) => e.preventDefault()}>
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
                        <span>이름</span>
                        <input type='text' onChange={handleInputValue('name')} />
                    </div>
                    <div>
                        {' '}
                        <span>전화번호</span>{' '}
                        <input type='tel' onChange={handleInputValue('phonenum')} />
                    </div>
                    <div>
                        <Link to='/login'>이미 아이디가 있으신가요?</Link>
                    </div>
                    <button
                        className='btn btn-signup'
                        type='submit'
                        onClick={handleSignup}
                    >
                        회원가입
                    </button>
                    <div className='alert-box' >{errorMessage}</div>
                </form>
            </center>
        </div>
    );

    */
}
