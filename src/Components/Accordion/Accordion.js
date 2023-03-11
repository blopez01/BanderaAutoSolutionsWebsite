import React, { Component } from 'react'
import { AccordionItems } from './AccordionItems'
import './Accordion.css'

export class move extends Component {    
    //TODO: fix state
    //<i className={this.state.menuActive ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'}></i>

    state = {active: false}

    toggle = (i) => {
        console.log("clicked " + {i})
        if (this.state.active === i)
        {
            return this.setActive(false);
        }
        this.setActive(true);
    }

    setActive = () => {
        
        console.log("clicked ");
        this.setState({active: !this.state.active});
    }

    render () {
        return (
            <div className='accordion-wrapper'>
                <div className='accordion'>
                {AccordionItems.map((item, index) => {
                    return (
                        <div className='accordion-item'>       
                            <div className='accordion-title-box' onClick={this.setActive}>
                                <h2 className='accordion-title'>{item.question}</h2>
                                <i className={this.active === index ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'}></i>
                            </div>
                            <div className='accordion-content-box'>
                                <p className='accordion-content'>{item.answer}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default move