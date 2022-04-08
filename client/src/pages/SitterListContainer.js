import React, { useState } from 'react';
import SitterItem from '../components/SitterItem';


import '../App.css';



function SitterListContainer({petSitterInfo}) {

  return (
    <div id="petSitterInfo-container">
    <div id="petSitterInfo-header">
        <div id='petSitterInfo-btn-div'>
            <button id='petSitterInfo-btn'>펫시터 지원하기</button>
        </div>
        <select name="" id="petSitterInfo-select">
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

    <div id="petSitterInfo-body">
      {petSitterInfo.map((item, idx) => <SitterItem item={item} key={idx} />)}
    </div>
    </div>
  );
}

export default SitterListContainer;
