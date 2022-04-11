import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <div id="nav-body">
            <span id="title">
                <Link to="/">
                    <span id="name">Udada</span>
                </Link>
            </span>
            <div id="menu">
                <Link to="/">HOME</Link>
                <Link to="/petsitterlist">
                    펫시터 구하기
                </Link>
                <Link to="/petlist">
                    일자리 구하기
                </Link>
                <Link to="/signup">
                    <button id='nav-btn'>회원가입</button>
                </Link>
                <Link to="/login">
                    <button id='nav-btn'>login</button>
                </Link>
            </div>
        </div>
    );
}

export default Nav;
