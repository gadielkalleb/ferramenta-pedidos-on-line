import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './css/Bt_Menu_BoxBlindex.css'

class BtnAcessorios extends Component {
    render () {  
        return (
            <li class="botaoMenu">
                <a class='dropdown-button btn' data-activates='acessoriosMenu'>Acessórios</a>

                <ul id='acessoriosMenu' class='dropdown-content'>
                        <li>
                            <Link to='/' >Peças - Box Blindex® Classic</Link>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <Link to='/' >Perfis - Box Blindex® Classic</Link>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <Link to='/' >Peças - Box Blindex® Classic Dual Door</Link>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <Link to='/' >Perfis - Box Blindex® Classic Dual Door</Link>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <Link to='/' >Peças - Box Blindex® Classic Open</Link>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <Link to='/' >Perfis - Box Blindex® Classic Open</Link>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <Link to='/' >Peças - Box Blindex® Aluminium (com ou sem rebaixo)</Link>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <Link to='/' >Perfis - Box Blindex® Aluminium (com ou sem rebaixo)</Link>
                        </li>
                    </ul>
            </li>
        )
    }
}
export default BtnAcessorios