import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ isAuthenticated, isLogin }) {

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
                {isLogin ?
                        <div id="nav-btn-box">
                            <Link to="/mypage">
                                <button id='nav-btn' onClick={isAuthenticated()}>MyPage</button>
                            </Link>
                            <Link to="/login">
                                <button id='nav-btn'>logout</button>
                            </Link>
                    </div> : <div id="nav-btn-box">
                            <Link to="/signup">
                                <button id='nav-btn'>회원가입</button>
                            </Link>
                            <Link to="/login">
                                <button id='nav-btn'>login</button>
                            </Link>
                        </div>

                }


            </div>
        </div>
    );
}

export default Nav;
