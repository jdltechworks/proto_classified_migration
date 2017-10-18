import React, { Component } from 'react'
import Search from '../Search'
export default class Navigation extends Component {
    state = {
        isOpen: false
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { props, state, toggle } = this
        const { isOpen } = state
        return(
            <header className="navbar grid-xl container navbar-container">
              <section className="navbar-section">
                <a href="#" className="btn btn-link">AWPI</a>
                <Search {...props} />
                <a href="#" className="btn btn-link">Docs</a>
              </section>

            </header>
        )
    }
}
