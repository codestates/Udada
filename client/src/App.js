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

  const isAuthenticated = () => {
    // TODO: 인증성공 후(로그인해서 토큰받아옴), 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꾼다.
    // TODO: 인증 성공한 토큰을 받아올 때는 상태 끌어올리기로 받아와야 한다.
    console.log(accessToken);
    axios.get('https://localhost:4000/links/mypage/petsitter',
      { headers: { Authorization: `Bearer ${accessToken}` }, withCredentials: true })
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
  // const handleResponseSuccess = () => {
  //   isAuthenticated();
  //   console.log(accessToken);
  // };

  useEffect(() => {
    isAuthenticated();
  }, []);


  return (
    <Router>
      <Nav isAuthenticated={isAuthenticated} isLogin={isLogin} />
      <Routes>
        <Route exact={true} path="/" element={<HomeContainer />} />
        <Route path="/petsitterlist" element={<SitterListContainer petSitterInfo={petSitterInfo} setPetSitterInfo={setPetSitterInfo} />} />
        <Route path="/petlist" element={<PetListContainer petUserInfo={petUserInfo} setPetUserInfo={setPetUserInfo} />} />
        {/* Signup page */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/petuser" element={<PetUserSignup petUserInfo={petUserInfo} setPetUserInfo={setPetUserInfo} />} />
        <Route path="/signup/petsitter" element={<PetSitterSignup petSitterInfo={petSitterInfo} setPetSitterInfo={setPetSitterInfo} />} />
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
            // handleResponseSuccess={handleResponseSuccess} 
            setAccessToken={setAccessToken} />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      {/*<NotificationCenter />*/}
      <Footer />
    </Router>
  );
}

export default App;
