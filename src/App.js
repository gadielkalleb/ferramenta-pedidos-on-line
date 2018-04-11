import React, { Component } from 'react'
import { 
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import MenuTop from './components/MenuTop'
import MenuLateral from './components/MenuLateral'
import BemVindo from './rotas/BemVindo'
import AluminiumSemRebaixo from './rotas/AluminiumSemRebaixo'


class App extends Component {
    render () {
        return (
            <Router>
                <div className="corpo-site">
                    <header>
                        <MenuTop />
                        <MenuLateral />
                    </header>
                    <main>
                        <form>
                            <Route path='../index.html'></Route>
                            <Route path='/pedidos' exact component={ BemVindo } />
                            <Route path='/pedidos/aluminiumsemrebaixo' component={ AluminiumSemRebaixo } />
                        </form>
                    </main>
                </div>
            </Router>
        )
    }
}

export default App
