import React, { Component } from 'react'

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

                <div class="row">
                    <div class="col s12">
                        <ul class="tabs">
                            <li class="tab col s3"><a class="active" href="#test1">{kc4pcanto.produto}</a></li>
                            <li class="tab col s3"><a href="#test2">{kf2pfrontal.produto}</a></li>
                            <li class="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>
                            <li class="tab col s3"><a href="#test4">Test 4</a></li>
                        </ul>
                    </div>
                    <div id="test1" class="col s12">
                        <table className="responsive-table centered">
                                <TheadK />
                                {kc4pcanto.data.map(produto => <TabelaK key={produto.tam} tam={produto.tam} cod={produto.cod} FF={produto.FF} PB={produto.PB} BF={produto.BF} DB={produto.DB} BC={produto.BC} PT={produto.PT} BG={produto.BG} />)
                                }
                            </table>
                    </div>
                    <div id="test2" class="col s12">
                        <table className="responsive-table centered">
                                <TheadK />
                                {kf2pfrontal.data.map(produto => <TabelaK key={produto.tam} tam={produto.tam} cod={produto.cod} FF={produto.FF} PB={produto.PB} BF={produto.BF} DB={produto.DB} BC={produto.BC} PT={produto.PT} BG={produto.BG} />)
                                }
                            </table>
                    </div>
                    <div id="test3" class="col s12">Test 3</div>
                    <div id="test4" class="col s12">Test 4</div>
                </div>
                            
                <Obs />               
            </div>

        )
    }
}

export default AluminiumSemRebaixo