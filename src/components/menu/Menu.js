import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuComponent = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (
        <div>
            <ul>
                <li><NavLink exact to="/board/list" activeStyle={activeStyle}>게시판 목록</NavLink></li>
                <li><NavLink to="/board/regist" activeStyle={activeStyle}>게시판 등록</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default MenuComponent;