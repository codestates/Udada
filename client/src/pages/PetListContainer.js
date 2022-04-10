import React, { useState } from 'react';
import PetItem from '../components/PetItem';
import Profile from '../components/Profile';



import '../App.css';


function PetListContainer({petUserInfo}) {

const [isPetUser, setIsPetUser] = useState(false);
const [userInfo, setUserInfo] = useState(petUserInfo);


const handleUser = (item) => {
  setIsPetUser(true)
  setUserInfo(item)
}
const handleLogin = () => {
  setIsPetUser(false);
}


  return (
    <div>
      {isPetUser ? <Profile Information={userInfo} 
                            handleLogin={handleLogin}
                            title="pet user application"/> : 
        <div id="petUserInfo-container">
        <div id="petUserInfo-header">
            <div id='petUserInfo-btn-div'>
                <button id='petUserInfo-btn'>우리아이 등록</button>
            </div>
            <select name="" id="petUserInfo-select">
                <option value="">돌봄 지역을 선택해주세요</option>
                <option value="">강남구</option>
                <option value="">강동구</option>
                <option value="">강북구</option>
                <option value="">강서구</option>
                <option value="">관악구</option>
                <option value="">광진구</option>
                <option value="">구로구</option>
                <option value="">금천구</option>
                <option value="">노원구</option>
                <option value="">도봉구</option>
                <option value="">동대문구</option>
                <option value="">동작구</option>
                <option value="">마포구</option>
                <option value="">서대문구</option>
                <option value="">서초구</option>
                <option value="">성동구</option>
                <option value="">성북구</option>
                <option value="">송파구</option>
                <option value="">양천구</option>
                <option value="">영등포구</option>
                <option value="">용산구</option>
                <option value="">은평구</option>
                <option value="">종로구</option>
                <option value="">중구</option>
                <option value="">중랑구</option>
            </select>
        </div>

        <div id="petUserInfo-body">
          {petUserInfo.map((item, idx) => <PetItem item={item} key={idx} 
                                          handleUser={() => handleUser(item)}/>)}
        </div>
        </div>
      }
    

    </div>
  );
}

export default PetListContainer;
