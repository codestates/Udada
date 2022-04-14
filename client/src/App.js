import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import HomeContainer from './pages/HomeContainer';
import SitterListContainer from './pages/SitterListContainer';
import PetListContainer from './pages/PetListContainer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PetUserLogin from './components/PetUserLogin';
import PetSitterLogin from './components/PetSitterLogin';
import PetUserSignup from './components/PetUserSignup';
import PetSitterSignup from './components/PetSitterSignup';
import Mypage from './pages/Mypage';
import Reservation from './pages/Reservation';
import Application from './pages/Application';
import axios from 'axios';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { dummyData } from './assets/state'

//import ShoppingCart from './pages/ShoppingCart';

function App() {
  // console.log(process.env)
  //유저 한명의 정보
  const [petUserInfo, setPetUserInfo] = useState(dummyData.petUser);
  const [petSitterInfo, setPetSitterInfo] = useState(dummyData.petSitter);
  const [petUserAll, setPetUserAll] = useState(dummyData.petUser);
  const [petSitterAll, setPetSitterAll] = useState(dummyData.petSitter);
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  //petSitter인지 petUser인지 결정지어주는 상태
  const [userType, setUserType] = useState('');

  // console.log(petSitterInfo)
  window.sessionStorage.setItem("dummypetSitterInfo", JSON.stringify(dummyData.petSitter))

  const onLogin = () => {
    setIsLogin(true);
  }
  // Logout Func
  const onLogout = () => {
    setIsLogin(false);
  };

  useEffect(() => {
    const isLogin = window.sessionStorage.getItem('isLogin');

    if (isLogin) {
      onLogin();
    }
    else {
      onLogout();
    }
  }, [])

  // console.log(accessToken)
  // console.log(window.sessionStorage);

  const petSitterGetAccessToken = async (authorizationCode) => {
    // 받아온 authorization code로 다시 OAuth App에 요청해서 access token을 받을 수 있습니다.
    // access token은 보안 유지가 필요하기 때문에 클라이언트에서 직접 OAuth App에 요청을 하는 방법은 보안에 취약할 수 있습니다.
    // authorization code를 서버로 보내주고 서버에서 access token 요청을 하는 것이 적절합니다.

    // TODO: 서버의 /callback 엔드포인트로 authorization code를 보내주고 access token을 받아옵니다.
    // access token을 받아온 후
    //  - 로그인 상태를 true로 변경하고,
    //  - state에 access token을 저장하세요

    // console.log(authorizationCode)
    // fake_auth_code

    await axios({
      url: `${process.env.REACT_APP_API_URL}/links/callback/github`,
      method: "post",
      data: {
        authorizationCode
      }
    }).then(res => {
      console.log(res)
      console.log(res.data.data)
      // setIsLogin(true);
      if (res.data.data) {
        setAccessToken(res.data.accessToken);
        setIsLogin(true);
        console.log('petsitter login 인증 성공');
      }
      // setAccessToken(res.data.accessToken)
      // console.log(authorizationCode)
    })
  }

  const petUserGetAccessToken = async (authorizationCode) => {
    // 받아온 authorization code로 다시 OAuth App에 요청해서 access token을 받을 수 있습니다.
    // access token은 보안 유지가 필요하기 때문에 클라이언트에서 직접 OAuth App에 요청을 하는 방법은 보안에 취약할 수 있습니다.
    // authorization code를 서버로 보내주고 서버에서 access token 요청을 하는 것이 적절합니다.

    // TODO: 서버의 /callback 엔드포인트로 authorization code를 보내주고 access token을 받아옵니다.
    // access token을 받아온 후
    //  - 로그인 상태를 true로 변경하고,
    //  - state에 access token을 저장하세요

    // console.log(authorizationCode)
    // fake_auth_code

    await axios({
      url: `${process.env.REACT_APP_API_URL}/links/callback/github`,
      method: "post",
      data: {
        authorizationCode
      }
    }).then(res => {

      console.log(res)
      console.log(res.data.data)
      // setIsLogin(true);
      if (res.data.data) {
        setAccessToken(res.data.accessToken);
        setIsLogin(true);
        console.log('petuser login 인증 성공');
      }
      // setAccessToken(res.data.accessToken)
      // console.log(authorizationCode)
    })
  }

  const isPetSitterAuthenticated = () => {
    // TODO: 인증성공 후(로그인해서 토큰받아옴), 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꾼다.
    // TODO: 인증 성공한 토큰을 받아올 때는 상태 끌어올리기로 받아와야 한다.

    // 유저와 펫시터가 다른 경로로 로그인 하기 때문에 사용자 정보 가져올때도 구분이 필요

    /* petsitter 로그인 성공 후 데이터 가져올 때 */
    /* 하나의 isAuthenticated함수 안에 두개의 axios 요청을 보낼 경우,
       발생 가능한 엣지 케이스! 
       1) petSitter사용자가 petUser로 로그인을 선택한 후 로그인 했을때
          -> axios로 둘다 요청을 보내주기 때문에 로그인은 성공, 그러나 성공 후 redirect 될때 엉뚱한 페이지로 전송
       2) 그 반대의 경우도 마찬가지
      사용자가 만들어내는 엣지 케이스 고려 후 이에 대한 알림 화면 구현 필요
        - 자신이 petUser인데 petSitter에서 로그인할 경우 경고 필요
        - 비밀번호가 틀렸을 때 그에 맞는 에러 메세지
    */
    // console.log(accessToken);
    axios.get(`${process.env.REACT_APP_API_URL}/links/mypage/petsitter`,
      { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((result) => {
        // console.log(result.data);
        // console.log(result.data.data.petsitterData);
        setPetSitterInfo(result.data.data.petsitterData);
        console.log('petsitter login 인증 성공');
        // console.log(petSitterInfo);
        setIsLogin(true);
        window.sessionStorage.setItem('isLogin', true);
        window.sessionStorage.setItem('petSitterInfo', JSON.stringify(result.data.data.petsitterData));
        alert('펫시터 로그인 성공');
      })


  };

  const isPetUserAuthenticated = () => {
    // TODO: 인증성공 후(로그인해서 토큰받아옴), 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꾼다.
    // TODO: 인증 성공한 토큰을 받아올 때는 상태 끌어올리기로 받아와야 한다.
    /* petuser 로그인 성공 후 데이터 가져올 때 */
    axios.get(`${process.env.REACT_APP_API_URL}/links/mypage/petuser`,
      { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((result) => {
        console.log(result);
        setPetUserInfo(result.data.data.petuserData);
        console.log('petuser login 인증 성공');
        // console.log(petUserInfo);
        setIsLogin(true);
        window.sessionStorage.setItem('isLogin', true);
        window.sessionStorage.setItem('petUserInfo', JSON.stringify(result.data.data.petuserData));
        alert('펫유저 로그인 성공');
      })
  };


  //user인지 sitter인지에 따라 다른 요청을 보낸다
  const handleResponseSuccess = (userType) => {
    console.log(userType);
    // setUserType(userType);
    if (userType === 'user') {
      isPetUserAuthenticated();
    } else if (userType === 'sitter') {
      isPetSitterAuthenticated();
    } else {
      //alert('로그인/회원가입이 다시 필요합니다!')
    }
  };

  const handleLogout = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/links/logout`)
      .then(() => {
        console.log('logout성공');
        setAccessToken('');
        setIsLogin(false);
        //isLogin이 false일 때 home redirect한다면 handleLogout상태가 되어야 함
        setPetUserInfo('');
        setPetSitterInfo('');
        window.sessionStorage.clear();
      })
  }

  useEffect(() => {
    const githubuserType = window.sessionStorage.getItem('githubuserType')
    if (githubuserType === 'githubsitter') {
      const url = new URL(window.location.href)
      const authorizationCode = url.searchParams.get('code')

      if (authorizationCode) {
        // authorization server로부터 클라이언트로 리디렉션된 경우, authorization code가 함께 전달됩니다.
        // ex) http://localhost:3000/?code=5e52fb85d6a1ed46a51f
        petSitterGetAccessToken(authorizationCode)
      }
    }
    if (githubuserType === 'githubuser') {
      const url = new URL(window.location.href)
      const authorizationCode = url.searchParams.get('code')

      if (authorizationCode) {
        // authorization server로부터 클라이언트로 리디렉션된 경우, authorization code가 함께 전달됩니다.
        // ex) http://localhost:3000/?code=5e52fb85d6a1ed46a51f
        petUserGetAccessToken(authorizationCode)
      }
    }
  }, [])

  useEffect(() => {
    // isAuthenticated();

    if (userType === 'user') isPetUserAuthenticated();
    if (userType === 'sitter') isPetSitterAuthenticated();


  }, [userType]);



  return (
    <>
      <Nav isLogin={isLogin} handleResponseSuccess={handleResponseSuccess} handleLogout={handleLogout} />
      <Routes>
        <Route exact={true} path="/" element={<HomeContainer />} />

        <Route path="/petsitterlist" element={<SitterListContainer petSitterAllInfo={petSitterAll} accessToken={accessToken} />} />
        <Route path="/petlist" element={
          <PetListContainer
            petUserInfo={petUserInfo}
            setPetUserInfo={setPetUserInfo}
            accessToken={accessToken} />} />

        {/* Signup page */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/petuser" element={<PetUserSignup petUserInfo={petUserInfo} setPetUserInfo={setPetUserInfo} />} />
        <Route path="/signup/petsitter" element={<PetSitterSignup setIsLogin={setIsLogin} petSitterInfo={petSitterInfo} setPetSitterInfo={setPetSitterInfo} />} />
        {/* Login page */}
        <Route path="/login" element={<Login />} />
        <Route path="/login/petuser" element={
          <PetUserLogin
            handleResponseSuccess={handleResponseSuccess}
            setAccessToken={setAccessToken}
            userType={userType}
            setUserType={setUserType}
            setIsLogin={setIsLogin}
          // onChange={() => setUserType(userType)}
          />}
        />
        <Route path="/login/petsitter" element={
          <PetSitterLogin
            // accessToken={accessToken}
            setUserType={setUserType}
            userType={userType}
            handleResponseSuccess={handleResponseSuccess}
            setAccessToken={setAccessToken}
            setIsLogin={setIsLogin}
          />} />
        <Route path="/mypage" element={
          <Mypage petUserInfo={petUserInfo}
            setPetUserInfo={setPetUserInfo}
            petSitterInfo={petSitterInfo}
            setPetSitterInfo={setPetSitterInfo}
            accessToken={accessToken}
          />}
        />
        <Route path="/reservation" element={<Reservation petUserInfo={petUserInfo} setPetUserInfo={setPetUserInfo} accessToken={accessToken} />} />
        <Route path="/application" element={<Application petSitterInfo={petSitterInfo} accessToken={accessToken} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
