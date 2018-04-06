import React, { Component } from 'react'

import TabelaK from './TabelaK'
import TheadK from './TheadK'

const corPadrao = {
    azul: "#012641"
}

class AluminiumSemRebaixo extends Component {
    constructor (props) {
        super (props)
    }
    
    render () {
        return (
            <div class="row">
                <div class="col s12">
                    <div class="card" style={{
                        background: corPadrao.azul
                    }}>
                        <div class="card-content white-text">
                            <h4 class="light">Produtos Blindex® Aluminium sem Rebaixo</h4>
                        </div>
                    </div>
                </div>
            
                <div class="col s12">
                    <div class="card">
                        <div class=" card-title">KC 4P CANTO</div>
                        <div class="card-content">
                            <TheadK/>
                            <TabelaK/>
                        </div>
                    </div>
                </div>
                <div class="col s12">
                    <div class="card">
                        <div class=" card-title">KF 2P FRONTAL</div>
                        <div class="card-content">
                            <TheadK/>
                            <TabelaK/>
                        </div>
                    </div>
                </div>
                <div class="col s12">
                    <div class="card">
                        <div class=" card-title">KF 3P FRONTAL</div>
                        <div class="card-content">
                            <TheadK/>
                            <TabelaK/>
                        </div>
                    </div>
                </div>
                <div class="col s12">
                    <div class="card">
                        <div class=" card-title">KF 4P FRONTAL</div>
                        <div class="card-content">
                            <TheadK/>
                            <TabelaK/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default AluminiumSemRebaixo