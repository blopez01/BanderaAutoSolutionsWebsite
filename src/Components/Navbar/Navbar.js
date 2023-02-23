import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom";
import { MenuItems } from './MenuItems'
import './Navbar.css'

class Navbar extends Component {
    state = { active: false }

    handleClick = () => {
        this.setState({active: !this.state.active})
    }
    
    closeMobileMenu = () => {
        this.setState({active: false})
    }

    render () {
        return(
            <nav className='NavItems'>
                <Link to="/" className="navbar-logo" onClick={this.closeMobileMenu}>
                    <h1>Logo</h1>
                </Link>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.active ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            
                            <li key={index}>
                                <NavLink
                                to={`/${item.url}`}
                                className={({ active }) =>
                                    item.shortName + (active ? " activated" : "")
                                }
                                onClick={this.closeMobileMenu}
                                >
                                {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar