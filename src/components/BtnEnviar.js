import React from 'react'
import { Button, Icon, Row, Col } from 'react-materialize'

const BtnEnviar = props => 
    <Row className="container">
        <Col s={12} className="right-align">
            <Button waves='light' >Enviar<Icon right>send</Icon></Button>
        </Col>
    </Row>


export default BtnEnviar