import React, { Component } from 'react';

import logo from '../img/logo-frt.jpeg';
import '../css/MenuLateral.css';

class MenuLateral extends Component {
    constructor (props) {
        super (props)

        this.state = {
            razaosocial: window.localStorage.getItem('razao_social'),
            cnpj: window.localStorage.getItem('cnpj'),
            telefone: window.localStorage.getItem('telefone'),
            email: window.localStorage.getItem('email'),
        }
    }
    render() {
        return (
            <ul id="slide-out" className="side-nav fixed">
                <li className="logo">
                    <div className="row">
                        <div className="card col s12">
                            <a className="brand-logo">
                                <img
                                    id="img-logo"
                                    className="responsive-img center"
                                    src={logo}
                                    alt="Logo FRT"></img>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="row ">
                        <ul className="collapsible">
                            <li>
                                <div className="collapsible-header white-text active dadosUsuario">
                                    <i className="material-icons">assignment_ind</i>Dados Pessoais</div>
                                <div className="collapsible-body">
                                    <div className="card">
                                        <div className="card-content white-text">
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input id="razaosocial" defaultValue={this.state.razaosocial} type="text" className="validate"></input>
                                                    <label htmlFor="razaosocial">Razão Social</label>
                                                </div>
                                                <div className="input-field col s12">
                                                    <input id="cnpj" defaultValue={this.state.cnpj} type="number" className="validate"></input>
                                                    <label htmlFor="cnpj">Cnpj</label>
                                                </div>
                                                <div className="input-field col s12">
                                                    <input id="telefone" defaultValue={this.state.telefone} type="tel" className="validate" maxLength={12}></input>
                                                    <label htmlFor="telefone">Telefone</label>
                                                </div>
                                                <div className="input-field col s12">
                                                    <input id="email" defaultValue={this.state.email} type="email" className="validate"></input>
                                                    <label htmlFor="email">Email</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        )
    }
}

export default MenuLateral;