import React, { Component } from 'react'

import TabelaK from './TabelaK'
import TheadK from './TheadK'

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
                            <h4 className="light">teste</h4>
                        </div>
                    </div>
                </div>

                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            <span className=" card-title">teste</span>
                            <table className="responsive-table centered">
                                <TheadK />
                               <TabelaK />
                            </table>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default AluminiumSemRebaixo