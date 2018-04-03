import React, {Component} from 'react'

import TabelaK from './TabelaK'

const corPadrao = {
    azul: "#012641"
}

class AluminioSemRebaixo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div
                        className="card"
                        style={{ background: corPadrao.azul }}>
                        <div className="card-content white-text">
                            <h4 className="light">Produtos Blindex® Aluminium sem Rebaixo</h4>
                        </div>
                        <div className="card-tabs">
                            <ul className="tabs tabs-fixed-width tabs-transparent">
                                <li className="tab">
                                    <a className="active" href="#test1">KC 4P CANTO</a>
                                </li>
                                <li className="tab">
                                    <a href="#test2">KF 2P FRONTAL</a>
                                </li>
                                <li className="tab">
                                    <a href="#test3">KF 3P FRONTAL</a>
                                </li>
                                <li className="tab">
                                    <a href="#test4">KF 4P FRONTAL</a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-content blue lighten-5">
                            <div id="test1">
                                <table className="responsive-table centered">
                                    <thead className="cabecalhoTabela"></thead>
                                    <tbody>
                                        <TabelaK/>
                                    </tbody>
                                </table>
                            </div>
                            <div id="test2">
                                <table className="responsive-table centered">
                                    <thead className="cabecalhoTabela"></thead>
                                    <tbody>
                                        <TabelaK/>
                                    </tbody>
                                </table>
                            </div>
                            <div id="test3">
                                <table className="responsive-table centered">
                                    <thead className="cabecalhoTabela"></thead>
                                    <tbody>
                                        <TabelaK/>
                                    </tbody>
                                </table>
                            </div>
                            <div id="test4">
                                <table className="responsive-table centered">
                                    <thead className="cabecalhoTabela"></thead>
                                    <tbody>
                                        <TabelaK/>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AluminioSemRebaixo