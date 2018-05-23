import React, { Component } from 'react'
import { renderToString } from 'react-dom/server'

class App extends Component {
    render() {
        return(
            <div className="app">aaaaa</div>
        )
    }
}
console.log(context)

console.log(renderToString(<App />))
