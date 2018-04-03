import React, { Component } from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import BemVindo from './BemVindo'
import AluminioSemRebaixo from './AluminioSemRebaixo'

class App extends Component {
    render () {
        return (
            <div className="corpo-site">
                <Router>
                    <main>
                        <form>
                            <Route path='/' exact component={ BemVindo } />
                            <Route path='/aluminiosemrebaixo' component={ AluminioSemRebaixo } />
                        </form>
                    </main>
                </Router>
            </div>
        )
    }
}

export default App
