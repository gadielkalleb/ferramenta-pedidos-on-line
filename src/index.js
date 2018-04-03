import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import MenuTop from './MenuTop'
import MenuLateral from './MenuLateral'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<MenuTop />, document.getElementById('menutop'))
ReactDOM.render(<MenuLateral />, document.getElementById('menulateral'))
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker();
