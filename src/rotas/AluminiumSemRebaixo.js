import React, { Component } from 'react'
import { 
    Tabs, 
    Tab,  
    Row, 
    Col,
    Card,
    Table 
} from 'react-materialize'

import TabelaK from '../tabelas/TabelaK'
import TheadK from '../tabelas/TheadK'
import Obs from '../components/Observacao'
import BtnEnviar from '../components/BtnEnviar'

import kc4pcanto from '../data/alucomrebaixo/kc4pcanto'
import kf2pfrontal from '../data/alucomrebaixo/kf2pfrontal'

const corPadrao = {
    azul: "#012641"
}


class AluminiumSemRebaixo extends Component {

    render() {
        return (

            <Row>

                <Col s={12}>
                    <Card style={{ background: corPadrao.azul }} textClassName='white-text'>
                        <h4 className="light">{kc4pcanto.titulo}</h4>
                    </Card>
                </Col>

                <Tabs className='z-depth-1'>
                    <Tab title={kc4pcanto.produto} tabWidth={3} active>
                        <Table centered striped responsive>
                            <TheadK />
                            <tbody>
                                {kc4pcanto.data.map(produto => <TabelaK key={produto.tam} tam={produto.tam} cod={produto.cod} FF={produto.FF} PB={produto.PB} BF={produto.BF} DB={produto.DB} BC={produto.BC} PT={produto.PT} BG={produto.BG} />)
                                }
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab title={kf2pfrontal.produto} tabWidth={3}>
                        <Table centered striped responsive>
                            <TheadK />
                            <tbody>
                                {kf2pfrontal.data.map(produto => <TabelaK key={produto.tam} tam={produto.tam} cod={produto.cod} FF={produto.FF} PB={produto.PB} BF={produto.BF} DB={produto.DB} BC={produto.BC} PT={produto.PT} BG={produto.BG} />)
                                }
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab title="Desativado" tabWidth={3} disabled></Tab>
                    <Tab title="Desativado" tabWidth={3} disabled></Tab>
                </Tabs>
    
                <Obs />
                <BtnEnviar/>

            </Row>

        )
    }
}

export default AluminiumSemRebaixo