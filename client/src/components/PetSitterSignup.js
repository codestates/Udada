import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function PetSitterSignup({ petSitterInfo, setPetSitterInfo }) {
    const [userinfo, setuserinfo] = useState({
        email: '',
        password: '',
        name: '',
        age: '',
        phoneNumber: '',
        location: '',
        license: '', // boolean 값으로 변경 필요 -> 지금은 'on'
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
        //userinfo 중 checkbox로 값을 입력받은 값은 boolean 값을 변환해준다.
        // if (userinfo.license === 'on') {
        //     setuserinfo()
        // }

        if (userinfo.email && userinfo.password && userinfo.name && userinfo.phoneNumber && userinfo.age) {

            axios
                .post(
                    'https://localhost:4000/links/signup/petsitter',
                    {
                        email: userinfo.email,
                        password: userinfo.password,
                        name: userinfo.name,
                        age: userinfo.age,
                        phoneNumber: userinfo.phoneNumber,
                        license: userinfo.license,
                        location: userinfo.location,
                        content: userinfo.content,
                        photo: userinfo.photo
                    },
                    { 'Content-Type': 'application/json', withCredentials: true }
                ).then((res) => {
                    console.log(userinfo);
                    navigate.push('/');
                    alert('회원가입 완료');

                })
        } else {
            setErrorMessage('모든 항목은 필수입니다');
        }

    };

    return (
        <div>
            <center className="signup-body">
                <h1>펫시터로 가입하기</h1>
                <form className="signup-form-box" onSubmit={(e) => e.preventDefault()}>
                    {
                        isClicked ?
                            <div id="second-signup-body">
                                <div>모든 항목은 필수입니다</div>
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
                                    <span>나이</span>
                                    <input type='number' onChange={handleInputValue('age')} />
                                </div>
                                <div>
                                    {' '}
                                    <span>전화번호</span>{' '}
                                    <input type='tel' onChange={handleInputValue('phoneNumber')} />
                                </div>
                                <div>
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
                        <div>
                            <span>반려동물 관련 자격증이 있으신가요?</span>
                            <input type='checkbox' onChange={handleInputValue('license')} />
                        </div>
                        <div>
                            <span>어디서 활동하길 원하세요?</span>
                            <input type='text' onChange={handleInputValue('location')} />
                        </div>
                        <div>
                            <span>만나게 될 반려동물에게 본인을 소개해주세요</span>
                            <input type='text' onChange={handleInputValue('content')} />
                        </div>
                        <div>
                            <span>프로필 사진 등록</span>
                            <input type='text' onChange={handleInputValue('photo')} />
                        </div>
                        <button
                            id='signup-next-button'
                            onClick={() => {
                                setIsClicked(true);
                                //navigate('/signup/petsitter')
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
