import React, { useState, useEffect } from 'react';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import HomeContainer from './pages/HomeContainer';
import SitterListContainer from './pages/SitterListContainer';
import PetListContainer from './pages/PetListContainer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PetUserLogin from './components/PetUserLogin';
import PetSitterLogin from './components/PetSitterLogin';
import Mypage from './pages/Mypage';
import axios from 'axios';

//import NotificationCenter from './components/NotificationCenter';
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
  const [refreshToken, setRefreshToken] = useState('');

  const isAuthenticated = () => {
    // TODO: 인증성공 후(로그인해서 토큰받아옴), 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꾼다.
    axios.get('https://localhost:4000/links/mypage', { headers: { "authorization": accessToken } })
      .then((result) => {
        // TODO: result.data의 정보가 petUser인지 petSitter인지 구별필요
        console.log(result)
        if (result.data.data.petuserData) {
          console.log(result.data.data.petuserData)
          setPetUserInfo(result.data.data.petuserData);
          console.log('petuser login 인증 성공');
          setIsLogin(true);
        } else if (result.data.data.petsitterData) {
          setPetSitterInfo(result.data.data.petsitterData);
          console.log('petsitter login 인증 성공');
          setIsLogin(true);
        }
      })
  };
  //login 페이지에서 실행되는 함수
  const handleResponseSuccess = () => {
    console.log(accessToken);
    isAuthenticated();
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact={true} path="/" element={<HomeContainer />} />
        <Route path="/petsitterlist" element={<SitterListContainer petSitterInfo={petSitterInfo} setPetSitterInfo={setPetSitterInfo} />} />
        <Route path="/petlist" element={<PetListContainer petUserInfo={petUserInfo} setPetUserInfo={setPetUserInfo} />} />
        <Route path="/signup" element={<Signup />} />
        {/* Login.js파일 안에서 라우팅을 따로 하는게 가독성이 더 좋음 >> 추후 방법 찾아보기 */}
        <Route path="/login" element={<Login />} />
        <Route path="/login/petuser" element={<PetUserLogin handleResponseSuccess={handleResponseSuccess} setAccessToken={setAccessToken} setRefreshToken={setRefreshToken} />} />
        <Route path="/login/petsitter" element={<PetSitterLogin handleResponseSuccess={handleResponseSuccess} setAccessToken={setAccessToken} setRefreshToken={setRefreshToken} />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      {/*<NotificationCenter />*/}
      <Footer />
    </Router>
  );
}

export default App;
