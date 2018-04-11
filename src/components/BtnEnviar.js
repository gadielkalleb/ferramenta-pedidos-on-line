import React, {Component} from 'react'
import { Button, Icon, Row, Col, Input } from 'react-materialize'

class BtnEnviar extends Component {
    constructor(props){
        super(props)

        this.state = {
            btnDisable: true,
            checkboxState: false,
            label: 'Clique aqui para confirma seu pedido.'
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        
        this.setState({
            checkboxState: !this.state.checkboxState
        })

        if (this.state.checkboxState === false) {
            this.setState({
                btnDisable: false,
                label: 'Agora clique em enviar!'
            })
        } else if(this.state.checkboxState === true) {
            this.setState({
                btnDisable: true,
                label: 'Clique aqui para confirma seu pedido.'
            })
        }

    }
    
    render(){
        return (
            <Row className="container">
                <Input name='confirma' type='checkbox' value={this.event} onChange={this.handleChange} label={this.state.label}/>
                <Col s={12} className="right-align">
                    <Button waves='light' disabled={this.state.btnDisable}>Enviar<Icon right>send</Icon></Button>
                </Col>
            </Row>
        )
    } 
} 
    


export default BtnEnviar