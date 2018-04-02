import React from 'react';

import './css/MenuTop.css';
import Logout from './Logout'
import BtnBoxBlindex from './Bt_Menu_BoxBlindex'
import BtnAcessorios from './Bt_Menu_Acessorios'

const MenuTop = props => 
        <nav id="menu-top">
            <div className="nav-wrapper ">
                <a className="brand-logo">Pedidos On Line</a>
                <ul id="nav-mobile" className="right">
                    <BtnBoxBlindex/>
                    <BtnAcessorios/>
                    <Logout/>
                </ul>
            </div>
        </nav>


export default MenuTop;
