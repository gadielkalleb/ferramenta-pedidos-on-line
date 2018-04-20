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
import CaixaNumPedido from '../components/CaixaNumPedido'

import kc4pcanto from '../data/alucomrebaixo/kc4pcanto'
import kf2pfrontal from '../data/alucomrebaixo/kf2pfrontal'
import kf3pfrontal from '../data/alucomrebaixo/kf3pfrontal.json'
import kf4pfrontal from '../data/alucomrebaixo/kf4pfrontal.json'

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
                    <CaixaNumPedido />

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
                    <Tab title={kf3pfrontal.produto} tabWidth={3}>
                        <Table centered striped responsive>
                            <TheadK />
                            <tbody>
                                {kf3pfrontal.data.map(produto => <TabelaK key={produto.tam} tam={produto.tam} cod={produto.cod} FF={produto.FF} PB={produto.PB} BF={produto.BF} DB={produto.DB} BC={produto.BC} PT={produto.PT} BG={produto.BG} />)
                                }
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab title={kf4pfrontal.produto} tabWidth={3}>
                        <Table centered striped responsive>
                            <TheadK />
                                <tbody>
                                    {kf4pfrontal.data.map(produto => <TabelaK key={produto.tam} tam={produto.tam} cod={produto.cod} FF={produto.FF} PB={produto.PB} BF={produto.BF} DB={produto.DB} BC={produto.BC} PT={produto.PT} BG={produto.BG} />)
                                    }
                                </tbody>
                            </Table>
                    </Tab>
                </Tabs>
                
                <Obs />
                <BtnEnviar/>

            </Row>

        )
    }
}

export default AluminiumSemRebaixo