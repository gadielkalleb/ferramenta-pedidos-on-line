import React, { Component } from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import MenuTop from './MenuTop'
import MenuLateral from './MenuLateral'
import BemVindo from './BemVindo'

class App extends Component {
    render () {
        return (
            <div className="corpo-site">
                <header>
                    <MenuTop/>
                    <MenuLateral/>
                </header>

                <Router>
                    <main>
                        <form>
                            <BemVindo/>
                        </form>
                    </main>
                </Router>
            </div>
        )
    }
}

export default App
