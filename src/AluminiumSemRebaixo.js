import React, { Component } from 'react'
import axios from 'axios'

//import TabelaK from './TabelaK'
import TheadK from './TheadK'

const corPadrao = {
    azul: "#012641"
}

class AluminiumSemRebaixo extends Component {
    constructor (props) {
        super (props)

        this.state = {
            produtos: []
        }


    }
    
    componentDidMount() {
        axios.get('http://localhost:8000/asemrebaixo.php').then(res => {
            const produtos = res.result
            this.setState({ produtos })
        })
    }
    
    render () {
        return (
            <div class="row">
                <div class="col s12">
                    <div class="card" style={{ background: corPadrao.azul }}>
                        <div class="card-content white-text">
                            <h4 class="light">{ this.state.produtos.title }</h4>
                        </div>
                    </div>
                </div>
            
                <div class="col s12">
                    <div class="card">
                        <div class=" card-title">KC 4P CANTO</div>
                        <div class="card-content">
                            <TheadK/>
                            { this.state.produtos.map(produtos => <li>console.log(produtos)</li>) }
                        </div>
                    </div>
                </div>
                
            </div>

        )
    }
}

export default AluminiumSemRebaixo