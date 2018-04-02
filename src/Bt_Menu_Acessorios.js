import React from 'react'

import './css/Bt_Menu_BoxBlindex.css'

const BtnAcessorios = props => 
        <li class="botaoMenu">
            <a class='dropdown-button btn' data-activates='acessoriosMenu'>Acessórios</a>

            <ul id='acessoriosMenu' class='dropdown-content'>
                    <li>
                        <a href="">Peças - Box Blindex® Classic</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#!">Perfis - Box Blindex® Classic</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#!">Peças - Box Blindex® Classic Dual Door</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="#!">Perfis - Box Blindex® Classic Dual Door</a>
                    </li>
                    <li>
                        <a href="#!">Peças - Box Blindex® Classic Open</a>
                    </li>
                    <li>
                        <a href="#!">Perfis - Box Blindex® Classic Open</a>
                    </li>
                    <li>
                        <a href="#!">Peças - Box Blindex® Aluminium (com ou sem rebaixo)</a>
                    </li>
                    <li>
                        <a href="#!">Perfis - Box Blindex® Aluminium (com ou sem rebaixo)</a>
                    </li>
                </ul>
        </li>

export default BtnAcessorios