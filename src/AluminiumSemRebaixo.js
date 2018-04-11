import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TabelaK from './tabelas/TabelaK'
import TheadK from './tabelas/TheadK'
import Obs from './Observacao'
import kc4pcanto from './data/alucomrebaixo/kc4pcanto'
import kf2pfrontal from './data/alucomrebaixo/kf2pfrontal'

const corPadrao = {
    azul: "#012641"
}


class AluminiumSemRebaixo extends Component {

    render() {
        return (

            <div className="row">

                <div className="col s12">
                    <div className="card" style={{ background: corPadrao.azul }}>
                        <div className="card-content white-text">
                            <h4 className="light">{kc4pcanto.titulo}</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <ul className="tabs">
                            <li className="tab col s3"><Link className="active" to="#test1">{kc4pcanto.produto}</Link></li>
                            <li className="tab col s3"><Link to="#test2">{kf2pfrontal.produto}</Link></li>
                            <li className="tab col s3 disabled"><Link to="#test3">Disabled Tab</Link></li>
                            <li className="tab col s3"><Link to="#test4">Test 4</Link></li>
                        </ul>
                    </div>
                    <div id="test1" className="col s12">
                        <table className="responsive-table centered striped">
                                <TheadK />
                                <tbody>
                                    {kc4pcanto.data.map(produto => <TabelaK key={produto.tam} tam={produto.tam} cod={produto.cod} FF={produto.FF} PB={produto.PB} BF={produto.BF} DB={produto.DB} BC={produto.BC} PT={produto.PT} BG={produto.BG} />)
                                    }
                                </tbody>
                            </table>
                    </div>
                    <div id="test2" className="col s12">
                        <table className="responsive-table centered striped">
                                <TheadK />
                                <tbody>
                                    {kf2pfrontal.data.map(produto => <TabelaK key={produto.tam} tam={produto.tam} cod={produto.cod} FF={produto.FF} PB={produto.PB} BF={produto.BF} DB={produto.DB} BC={produto.BC} PT={produto.PT} BG={produto.BG} />)
                                    }
                                </tbody>
                            </table>
                    </div>
                    <div id="test3" className="col s12">Test 3</div>
                    <div id="test4" className="col s12">Test 4</div>
                </div>
                            
                <Obs />               
            </div>

        )
    }
}

export default AluminiumSemRebaixo