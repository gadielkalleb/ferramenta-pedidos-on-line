import React, {Component} from 'react'
import { Button, Icon, Row, Col, Input } from 'react-materialize'

class BtnEnviar extends Component {
    constructor(props){
        super(props)

        this.state = {
            btnDisable: true,
            checkboxState: false
        }
    }

    handleChange(event){
        this.setState({
            checkboxState: !this.state.checkboxState
        })
    }

    componentDidMount(){
        if (this.state.checkboxState === true) {
            this.setState({
                btnDisable: false
            })
        } else {
            this.setState({
                btnDisable: true
            })
        }
        
    }
        
    render(){
        
        return (
            <Row className="container">
                <Input name='confirma' type='checkbox' value={this.event} onChange={this.handleChange} label='Clique aqui para confirma seu pedido antes de clicar no botão enviar'/>
                <Col s={12} className="right-align">
                    <Button waves='light' disabled={this.state.btnDisable}>Enviar<Icon right>send</Icon></Button>
                </Col>
            </Row>
        )
    } 
} 
    


export default BtnEnviar