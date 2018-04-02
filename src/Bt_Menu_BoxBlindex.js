import React from 'react'

import './css/Bt_Menu_BoxBlindex.css'

const BtnBoxBlindex = props => 
                    <li className="botaoMenu">
                        <a className='dropdown-button btn' data-activates='boxBlindexMenu'>Box Blindex®</a>
                       
                        <ul id='boxBlindexMenu' class='dropdown-content'>
                            <li>
                                <a id="asemrebaixo" class="listaProdutos">Box Blindex® Aluminium (sem rebaixo)</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a id="acomrebaixo" class="listaProdutos">Box Blindex® Aluminium (com rebaixo)</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a id="aretocomrebaixo" class="listaProdutos">Box Blindex® Aluminium Reto (com rebaixo)</a>
                            </li>
                        </ul>
                    </li>

export default BtnBoxBlindex