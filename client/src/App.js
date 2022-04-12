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
    })
  }

  const isAuthenticated = () => {
    // TODO: 인증성공 후(로그인해서 토큰받아옴), 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꾼다.
    axios.get('http://localhost:4000/links/mypage/petsitter', { headers: { "authorization": `Baerer ${accessToken}` } })
      .then((result) => {
        // TODO: result.data의 정보가 petUser인지 petSitter인지 구별필요
          console.log(result)
          setPetSitterInfo(result.data.data.petsitterData);
          console.log('petsitter login 인증 성공');
          setIsLogin(true);
      })
  };
  
  //login 페이지에서 실행되는 함수
  const handleResponseSuccess = () => {
    console.log(accessToken);
    isAuthenticated();
  };


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
        <Route path="/login/petuser" element={<PetUserLogin handleResponseSuccess={handleResponseSuccess} setAccessToken={setAccessToken} />} />
        <Route path="/login/petsitter" element={<PetSitterLogin handleResponseSuccess={handleResponseSuccess} setAccessToken={setAccessToken} />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      {/*<NotificationCenter />*/}
      <Footer />
    </Router>
  );
}

export default App;
