import React, { Component } from 'react'
import { 
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import MenuTop from './MenuTop'
import MenuLateral from './MenuLateral'
import BemVindo from './BemVindo'
import AluminiumSemRebaixo from './AluminiumSemRebaixo'


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
                            <table class="responsive-table centered">
                                <Route path='/' exact component={ BemVindo } />
                                <Route path='/aluminiumsemrebaixo' component={ AluminiumSemRebaixo } />
                            </table>
                        </form>
                    </main>
                </div>
            </Router>
        )
    }
}

export default App
