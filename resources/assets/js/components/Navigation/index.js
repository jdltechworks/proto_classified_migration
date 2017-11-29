import React, { Component } from 'react'
import { Link } from 'react-router'


class NavBar extends Component {
    render() {
        return(
            <header className="header">
                <div className="container grid-xl">
                    <div className="navbar">
                        <section className="navbar-section branding">
                            <a href="#" className="navbar-brand">
                            <img src="https://dummyimage.com/170x50/000/fff" />
                            </a>
                        </section>
                        <section className="navbar-section form">
                            <div className="input-group input-inline">
                                <input className="form-input" type="text" placeholder="search" />
                                <button className="btn btn-primary btn-action input-group-btn">
                                <i className="icon icon-search"></i>
                                </button>
                            </div>
                        </section>
                        <section className="navbar-section controller">
                            <ul>
                                <li>
                                    <a href="#" className="btn btn-link">
                                    <i className="ion-ios-cart" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <button className="drop-down" href="javascript:void(0)">
                                        <span href="#" className="btn btn-link">
                                            <i className="ion-android-person" aria-hidden="true"></i>
                                        </span>
                                        <ul className="drop-down-menu">
                                            <li><Link to="/accounts/login">Signin</Link></li>
                                            <li><Link to="/accounts/register">Signup</Link></li>
                                        </ul>
                                    </button>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <ul className="tab tab-block">
                        <li className="tab-item active">
                            <a href="#">Music</a>
                        </li>
                        <li className="tab-item">
                            <a href="#">Playlists</a>
                        </li>
                        <li className="tab-item">
                            <a href="#">Radio</a>
                        </li>
                        <li className="tab-item">
                            <a href="#">Connect</a>
                        </li>
                        <li className="tab-item">
                            <a href="#">Music</a>
                        </li>
                        <li className="tab-item">
                            <a href="#">Playlists</a>
                        </li>
                        <li className="tab-item">
                            <a href="#">Radio</a>
                        </li>
                        <li className="tab-item">
                            <a href="#">Connect</a>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}


export default NavBar
