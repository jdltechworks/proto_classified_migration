import React, { Component } from 'react'
import { Link } from 'react-router'


class NavBar extends Component {
    render() {
        return(
            <header className="header">
                <div className="bg-secondary">
                    <div className="container grid-xl">
                        <div className="navbar">
                            <section className="navbar-section">
                                <a href="#" className="btn btn-sm btn-link">
                                    <i className="fa fa-truck fa-rotate-180 fa-flip-horizontal" aria-hidden="true"></i> TRACK MY ORDERS
                                </a>
                                <a href="#" className="btn btn-sm btn-link">LOGIN</a>
                                <a href="#" className="btn btn-sm btn-link">SIGNUP</a>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="container grid-xl">
                    <div className="navbar">
                        <section className="navbar-section branding">
                            <a href="/" className="navbar-brand">
                                <img src="https://dummyimage.com/170x50/000/fff" />
                            </a>
                        </section>
                        <section className="navbar-section form">
                            <div className="input-group input-inline">
                                <input className="form-input input-lg" type="text" placeholder="search" />
                                <button className="btn btn-primary btn-lg btn-action input-group-btn">
                                <i className="icon icon-search"></i>
                                </button>
                            </div>
                        </section>
                        <section className="navbar-section controller">
                            <a href="#" className="btn btn-link badge" data-badge="10">
                                <i className="fa fa-heart fa-lg" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="btn btn-link badge" data-badge="10">
                                <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                            </a>
                        </section>
                    </div>
                    <ul className="tab tab-block">
                        <li className="tab-item active">
                            <a href="#">CATEGORIES</a>
                        </li>
                        <li className="tab-item">
                            <a href="#">BEST SELLERS</a>
                        </li>
                        <li className="tab-item">
                            <a href="#">LATEST PRODUCTS</a>
                        </li>
                        <li className="tab-item">
                            <a href="#">PROMOTIONS</a>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}


export default NavBar
