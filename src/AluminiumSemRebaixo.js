import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Tabs, Tab } from 'react-materialize'

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

                <Tabs className='tab-demo z-depth-1'>
                    <Tab title={kc4pcanto.produto} tabWidth="3" active>
                        <table className="responsive-table centered striped">
                            <TheadK />
                            <tbody>
                                {kc4pcanto.data.map(produto => <TabelaK key={produto.tam} tam={produto.tam} cod={produto.cod} FF={produto.FF} PB={produto.PB} BF={produto.BF} DB={produto.DB} BC={produto.BC} PT={produto.PT} BG={produto.BG} />)
                                }
                            </tbody>
                        </table>
                    </Tab>
                    <Tab title={kf2pfrontal.produto} tabWidth="3">
                        <table className="responsive-table centered striped">
                            <TheadK />
                            <tbody>
                                {kf2pfrontal.data.map(produto => <TabelaK key={produto.tam} tam={produto.tam} cod={produto.cod} FF={produto.FF} PB={produto.PB} BF={produto.BF} DB={produto.DB} BC={produto.BC} PT={produto.PT} BG={produto.BG} />)
                                }
                            </tbody>
                        </table>
                    </Tab>
                    <Tab title="Desativado" tabWidth="3" disabled></Tab>
                    <Tab title="Desativado" tabWidth="3" disabled>Test 4</Tab>
                </Tabs>
    
                <Obs />               
            </div>

        )
    }
}

export default AluminiumSemRebaixo