import React from 'react'

import ImgCard from './img/aluminio_perfil.jpg'

const BemVindo = props => <div className="row">
    <div className="col s12 m6">
        <div className="card  z-depth-4">
            <div className="card-image">
                <img src={ImgCard}></img>
                <span className="card-title black-text">Seja Bem vindo</span>
            </div>
            <div className="card-content black-text">
                <p>Esta é a pagina de Pedidos On Line produtos Blindex®</p>
            </div>
        </div>
    </div>
    <div className="col s12 m6">
        <div className="card  z-depth-4">
            <div className="card-content black-text">
                <span className="card-title black-text">Seja Bem vindo</span>
                    <p>Esta é a pagina de Pedidos On Line produtos Blindex®</p>
                </div>
            </div>
        </div>
    </div>

export default BemVindo