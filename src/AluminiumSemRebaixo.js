import React, { Component } from 'react'
import axios from 'axios'

//import TabelaK from './TabelaK'
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
                            <table className="responsive-table centered">
                                <TheadK />
                                {console.log(this.state.kc4pcanto)}
                                <tbody>
                                    <tr>
                                        <td className="row">
                                            <div className="col s7 offset-s2">
                                                ${this.state.kc4pcanto.tamanho}</div>
                                        </td>
                                        <td className="row">
                                            <div className="col s7 offset-s2">
                                                ${this.state.kc4pcanto.codblindex}</div>
                                        </td>
                                        <td className="row">
                                            <div className="input-field col s7 offset-s2">
                                                <input
                                                    className=" center-align"
                                                    type="number"
                                                    maxLength="4"
                                                    name={this.state.kc4pcanto.cod_sbm_blindex_FF}></input>
                                            </div>
                                        </td>
                                        <td className="row">
                                            <div className="input-field col s7 offset-s2">
                                                <input
                                                    className=" center-align"
                                                    type="number"
                                                    maxLength="4"
                                                    name={this.state.kc4pcanto.cod_sbm_blindex_PB}></input>
                                            </div>
                                        </td>
                                        <td className="row">
                                            <div className="input-field col s7 offset-s2">
                                                <input
                                                    className=" center-align"
                                                    type="number"
                                                    maxLength="4"
                                                    name={this.state.kc4pcanto.cod_sbm_blindex_BF}></input>
                                            </div>
                                        </td>
                                        <td className="row">
                                            <div className="input-field col s7 offset-s2">
                                                <input
                                                    className=" center-align"
                                                    type="number"
                                                    maxLength="4"
                                                    name={this.state.kc4pcanto.cod_sbm_blindex_DB}></input>
                                            </div>
                                        </td>
                                        <td className="row">
                                            <div className="input-field col s7 offset-s2">
                                                <input
                                                    className=" center-align"
                                                    type="number"
                                                    maxLength="4"
                                                    name={this.state.kc4pcanto.cod_sbm_blindex_BC}></input>
                                            </div>
                                        </td>
                                        <td className="row">
                                            <div className="input-field col s7 offset-s2">
                                                <input
                                                    className=" center-align"
                                                    type="number"
                                                    maxLength="4"
                                                    name={this.state.kc4pcanto.cod_sbm_blindex_PT}></input>
                                            </div>
                                        </td>
                                        <td className="row">
                                            <div className="input-field col s7 offset-s2">
                                                <input
                                                    className=" center-align"
                                                    type="number"
                                                    maxLength="4"
                                                    name={this.state.kc4pcanto.cod_sbm_blindex_BG}></input>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

export default AluminiumSemRebaixo