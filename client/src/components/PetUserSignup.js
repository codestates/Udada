import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function PetUserSignup({ petUserInfo, setPetUserInfo }) {
    const [userinfo, setuserinfo] = useState({
        email: '',
        password: '',
        name: '',
        age: '',
        phoneNumber: '',
        petAge: 0,
        howBig: '',
        location: '',
        content: '',
        photo: '',

    });
    //두번째 가입창을 보여주기 위한 상태
    const [isClicked, setIsClicked] = useState(false);
    //에러 메세지를 띄우는 상태
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleInputValue = (key) => (e) => {
        setuserinfo({ ...userinfo, [key]: e.target.value });
    };

    //첫번째 가입창, 두번째 가입창을 순서대로 보여주기 위함
    function showSecondBody() {
        const box = document.getElementById("second-signup-body")
        box.style.display = "block"
    }
    function hideFirstBody() {
        const box = document.getElementById("first-signup-body")
        box.style.display = "none"
    }

    const handleSignup = () => {
        // TODO : 서버에 회원가입을 요청 후 로그인 페이지로 이동하세요.
        //        회원가입 성공 후 로그인 페이지 이동은 다음 코드를 이용하세요.
        //
        //        navigate("/");
        //
        // TODO : 모든 항목을 입력하지 않았을 경우 에러를 표시해야 합니다.
        if (userinfo.email && userinfo.password && userinfo.name && userinfo.phoneNumber && userinfo.age) {

            axios
                .post(
                    `${process.env.REACT_APP_API_URL}/links/signup/petuser`,
                    {
                        email: userinfo.email,
                        password: userinfo.password,
                        name: userinfo.name,
                        age: userinfo.age,
                        phoneNumber: userinfo.phoneNumber,
                        location: userinfo.location,
                        petAge: userinfo.petAge,
                        howBig: userinfo.howBig,
                        content: userinfo.content,
                        photo: userinfo.photo
                    },
                    { 'Content-Type': 'application/json', withCredentials: true }
                ).then((res) => {
                    navigate('/');
                    alert('회원가입 완료');
                })
        } else {
            alert('모든 항목은 필수입니다.')
            setErrorMessage('모든 항목은 필수입니다');
        }

    };

    return (
        <div>
            <center className="signup-body">
                <form className="signup-form-box" onSubmit={(e) => e.preventDefault()}>
                    {
                        isClicked ?
                            <div id="second-signup-body">
                                <div className="second-signup-body">* 모든 항목은 필수입니다</div>
                                <div className="signup-box-text">
                                    <span >이메일</span>
                                    <input type='email' className="sigup-box-textfield" onChange={handleInputValue('email')} />
                                </div>
                                <div className="signup-box-text">
                                    <span >비밀번호</span>
                                    <input
                                        type='password'
                                        className="sigup-box-textfield"
                                        onChange={handleInputValue('password')}
                                    />
                                </div>
                                <div className="signup-box-text">
                                    <span >이름</span>
                                    <input type='text' className="sigup-box-textfield" onChange={handleInputValue('name')} />
                                </div>
                                <div className="signup-box-text">
                                    <span >나이</span>
                                    <input type='number' className="sigup-box-textfield" onChange={handleInputValue('age')} />
                                </div>
                                <div className="signup-box-text">
                                    {' '}
                                    <span >전화번호</span>{' '}
                                    <input type='tel' className="sigup-box-textfield" onChange={handleInputValue('phoneNumber')} />
                                </div>
                                <div className="login-not-exist">
                                    <Link to='/login'>이미 아이디가 있으신가요?</Link>
                                </div>
                                <button
                                    id='signup-button'
                                    type='submit'
                                    onClick={handleSignup}
                                >
                                    회원가입
                                </button>
                                <div className='alert-box' >{errorMessage}</div>
                            </div>
                            :
                            <></>
                    }
                    <div id="first-signup-body">
                        <div className="signup-box-text">
                            <span >반려동물의 나이는 어떻게 되나요?</span>
                            <input type='number' className="sigup-box-textfield" onChange={handleInputValue('petAge')} />
                        </div>
                        <div className="signup-box-text">
                            <span >반려동물의 크기는 어떻게 되나요?</span>
                            <input
                                type='text'
                                className="sigup-box-textfield"
                                onChange={handleInputValue('howBig')}
                            />
                        </div>
                        <div className="signup-box-text">
                            <span >어디서 돌봐드릴까요?</span>
                            <input type='text' className="sigup-box-textfield" onChange={handleInputValue('location')} />
                        </div>
                        <div className="signup-box-text">
                            <span >펫시터가 알아야할 내용이 있을까요?</span>
                            <input type='text' className="sigup-box-textfield" onChange={handleInputValue('content')} />
                        </div>
                        <div className="signup-box-text">
                            <span >프로필 사진 등록</span>
                            <input type='text' className="sigup-box-textfield" onChange={handleInputValue('photo')} />
                        </div>
                        <button
                            id='signup-next-button'
                            onClick={() => {
                                setIsClicked(true);
                                //navigate('/signup/petuser')
                                console.log('firstbody hide');
                                hideFirstBody();
                                console.log('secondbody show');
                                showSecondBody();
                            }}
                        >
                            다음으로
                        </button>
                    </div>
                </form>
            </center>
        </div>
    );
}
