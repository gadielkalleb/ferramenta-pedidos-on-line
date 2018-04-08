import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './css/Bt_Menu_BoxBlindex.css'

class BtnBoxBlindex extends Component {
    render() {
        return (
            <li className="botaoMenu">
                <a className='dropdown-button btn' data-activates='boxBlindexMenu'>Box Blindex®</a>

                <ul id='boxBlindexMenu' className='dropdown-content'>
                    <li>
                        <Link to="/aluminiumsemrebaixo" id="asemrebaixo">Box Blindex® Aluminium (sem rebaixo)</Link>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <Link to="/aluminiumcomrebaixo" id="acomrebaixo">Box Blindex® Aluminium (com rebaixo)</Link>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <Link to="aluminiumretocomrebaixo" id="aretocomrebaixo">Box Blindex® Aluminium Reto (com rebaixo)</Link>
                    </li>
                </ul>
            </li>
        )
    }
}
export default BtnBoxBlindex