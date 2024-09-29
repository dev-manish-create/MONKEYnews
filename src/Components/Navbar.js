import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-black ">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="/">MONKEYnews</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav " >
                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href="/">Home</a>
                                </li>
                               
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/business">Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/entertainment">Entertainment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/sports">Sports</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/health">Health</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/technology">Technology</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/science">Science</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
