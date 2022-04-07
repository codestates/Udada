import React, { useState } from 'react';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import HomeContainer from './pages/HomeContainer';
import SitterListContainer from './pages/SitterListContainer';
import PetListContainer from './pages/PetListContainer';
import Signup from './pages/Signup';
import Login from './pages/Login';

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


  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact={true} path="/" element={<HomeContainer petUserInfo={petUserInfo} petSitterInfo={petSitterInfo} />} />
        <Route path="/petsitterlist" element={<SitterListContainer petSitterInfo={petSitterInfo} setPetSitterInfo={setPetSitterInfo} />} />
        <Route path="/petlist" element={<PetListContainer petUserInfo={petUserInfo} setPetUserInfo={setPetUserInfo} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      {/*<NotificationCenter />*/}
      <Footer />
    </Router>
  );
}

export default App;
