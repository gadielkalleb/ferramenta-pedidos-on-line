import React, {Component} from 'react'
import axios from 'axios'

import TabelaK from './TabelaK'
import TheadK from './TheadK'

const corPadrao = {
    azul: "#012641"
}

class AluminiumSemRebaixo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            produtos: [],
            titulo: [],
            kc4pcanto: []
        }

    }

    componentDidMount() {
        axios
            .get('http://localhost:8000/asemrebaixo.php')
            .then(res => {
                const produtos = res.data
                const titulo = res.data.title
                const kc4pcanto = res.data.result.KC4PCANTO
                this.setState({
                    produtos: produtos,
                    titulo: titulo,
                    kc4pcanto: kc4pcanto
                })
            })
    }

    render() {
        return (

            <div className="row">
                <div className="col s12">
                    <div className="card" style={{ background: corPadrao.azul }}>
                        <div className="card-content white-text">
                            <h4 className="light">{this.state.titulo}</h4>
                        </div>
                    </div>
                </div>

                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            <span className=" card-title">KC 4P CANTO</span>
                            <TheadK/>
                            <table className="responsive-table centered">
                                {console.log(this.state.kc4pcanto)}
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default AluminiumSemRebaixo