import React from 'react';
//import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Footer() {

    //const state = useSelector(state => state.itemReducer);

    return (
        <div id="footer">
            <img id="logo" src="../logo.png" alt="logo" />
            <div id="footer-text">
            (주)Udada<br/>
            서울특별시 송파구 석촌호수로 278 여흥레이크빌 1층 102<br/>
            대표 유태의<br/>
            사업자등록번호 : 155-93-65485<br/>
            통신판매업 신고번호 : 제 2020-서울강남-06523호<br/>
            직업제공업 신고번호 : 서울서부 제 2022 - 04호<br/>
            팩스번호 : 02-1234-5678<br/>
            개인정보보호 책임자 : 유태의 | 1588-6688<br/>
            dogcat@gmail.com<br/>
            </div>
        
        </div>
    );
}

export default Footer;