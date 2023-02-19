import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'

class Navbar extends Component {
    state = { active: false }

    handleClick = () => {
        this.setState({active: !this.state.active})
    }

    render () {
        return(
            <nav className='NavItems'>
                <h1 className='navbar-logo'>Logo</h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.active ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.shortName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar