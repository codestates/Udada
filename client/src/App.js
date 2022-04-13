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

  const [petUserInfo, setPetUserInfo] = useState(dummyData.petUser);
  const [petSitterInfo, setPetSitterInfo] = useState(dummyData.petSitter);
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const navigate = useNavigate();


  const getAccessToken = async (authorizationCode) => {
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
      url : "http://localhost:4000/links/callback/github",
      method : "post",
      data :{
        authorizationCode
      }
    }).then(res => {
      console.log(res)
      setIsLogin(true);
      setAccessToken(res.data.accessToken)
      console.log(authorizationCode)
      console.log('petsitter login 인증 성공');
      console.log('petsitter login 인증 성공');
    })
  }

  const isAuthenticated = () => {
    // TODO: 인증성공 후(로그인해서 토큰받아옴), 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꾼다.
    // TODO: 인증 성공한 토큰을 받아올 때는 상태 끌어올리기로 받아와야 한다.
    console.log(accessToken);
    axios.get('http://localhost:4000/links/mypage/petsitter',
      {headers: { authorization: `Bearer ${accessToken}`}})
      .then((result) => {
        // TODO: result.data의 정보가 petUser인지 petSitter인지 구별필요
        console.log(result.data)
        setPetSitterInfo(result.data.data.petsitterData);
        console.log('petsitter login 인증 성공');
        setIsLogin(true);

      })
  };
  

  // const isPetUserAuthenticated = () => {
  //   // TODO: 인증성공 후(로그인해서 토큰받아옴), 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꾼다.
  //   // TODO: 인증 성공한 토큰을 받아올 때는 상태 끌어올리기로 받아와야 한다.
  //   console.log(accessToken);
  //   axios.get('https://localhost:4000/links/mypage/petuser',
  //     { headers: { "authorization": `Bearer ${accessToken}` }, withCredentials: true })
  //     .then((result) => {
  //       // TODO: result.data의 정보가 petUser인지 petSitter인지 구별필요
  //       console.log(result.data)
  //       setPetUserInfo(result.data.data.petuserData);
  //       console.log('petuser login 인증 성공');
  //       setIsLogin(true);
  //     })
  // };
  //login 페이지에서 실행되는 함수
  const handleResponseSuccess = () => {
    isAuthenticated();
    console.log(accessToken);
  };

  const handleLogout = () => {
    axios.get('http://localhost:4000/links/logout')
      .then(() => {
        console.log('logout성공');
        setAccessToken('');
        setIsLogin(false);
        navigate('/');
      })
  }

  useEffect(() => {
    const url = new URL(window.location.href)
    const authorizationCode = url.searchParams.get('code')
    
    if (authorizationCode) {
      // authorization server로부터 클라이언트로 리디렉션된 경우, authorization code가 함께 전달됩니다.
      // ex) http://localhost:3000/?code=5e52fb85d6a1ed46a51f
      getAccessToken(authorizationCode)
    }

    isAuthenticated();
  }, []);


  return (<>
        <Nav isAuthenticated={isAuthenticated} handleLogout={handleLogout} isLogin={isLogin} />
      <Routes>
          <Route exact={true} path="/" element={<HomeContainer />} />
          <Route path="/petsitterlist" element={<SitterListContainer petSitterInfo={petSitterInfo} accessToken={accessToken} setPetSitterInfo={setPetSitterInfo} />} />
          <Route path="/petlist" element={<PetListContainer petUserInfo={petUserInfo} setPetUserInfo={setPetUserInfo} />} />
          {/* Signup page */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/petuser" element={<PetUserSignup petUserInfo={petUserInfo} setPetUserInfo={setPetUserInfo} />} />
          <Route path="/signup/petsitter" element={<PetSitterSignup petSitterInfo={petSitterInfo} setIsLogin={setIsLogin} isLogin={isLogin} setPetSitterInfo={setPetSitterInfo} />} />
          {/* Login page */}
          <Route path="/login" element={<Login />} />
          <Route path="/login/petuser" element={
            <PetUserLogin
              // handleResponseSuccess={handleResponseSuccess}
              setAccessToken={setAccessToken}
            />}
          />
          <Route path="/login/petsitter" element={
            <PetSitterLogin
              handleResponseSuccess={handleResponseSuccess} 
              setAccessToken={setAccessToken} />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/application" element={<Application />} />
        {/*<NotificationCenter />*/}
      </Routes>
    <Footer />
  </>
  );
}

export default App;
