import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom";
import { MenuItems } from './MenuItems'
import './Navbar.css'

class Navbar extends Component {
    state = { menuActive: false, pageActive: false }
    //TODO: pageActive highlights current page's nav item

    handleClick = () => {
        this.setState({menuActive: !this.state.menuActive})
    }
    
    closeMobileMenu = () => {
        this.setState({menuActive: false})
    }

    render () {
        return(
            <nav className='NavItems'>
                <Link to="/" className="navbar-logo" onClick={this.closeMobileMenu}>
                    <h1>Logo</h1>
                </Link>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.menuActive ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.menuActive ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            
                            <li key={index}>
                                <NavLink
                                to={`/${item.url}`}
                                className={({ menuActive }) =>
                                    item.shortName + (menuActive ? " activated" : "")
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