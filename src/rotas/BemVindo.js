import React from 'react'
import { Col, Card, Row, CardTitle } from 'react-materialize'

import ImgCard from '../img/aluminio_perfil.jpg'

const BemVindo = props =>
    <Row>
        <Col s={12} m={6}>
            <Card className="z-depth-4" title='Seja Bem vindo ao pedidos on line Blindex®' header={<CardTitle image={ImgCard}></CardTitle>}>
                Esta é a pagina de Pedidos On Line produtos Blindex®
        </Card>
        </Col>
        <Col s={12} m={6}>
            <Card className="z-depth-4" textClassName='black-text' title='Novidades'>
                <p>Este é um card com as novidades sobre os produtos Blindex®</p>
            </Card>
        </Col>
    </Row>


export default BemVindo