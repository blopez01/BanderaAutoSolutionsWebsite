import { React, useState } from 'react'
import { AccordionItems } from './AccordionItems'
import './Accordion.css'

function Accordion() {
    //<i className={this.state.menuActive ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'}></i>

    const [active, setActive] = useState(null)

    const toggle = (i) => {
        console.log("clicked " + {i})
        if (active == i)
        {
            return setActive(null);
        }
        setActive(i);
    }

  return (
    <div className='accordion-wrapper'>
        <div className='accordion'>
        {AccordionItems.map((item, index) => {
                return (
                    <div className='accordion-item'>       
                        <div className='accordion-title-box'>
                            <h2 className='accordion-title' onClick={() => toggle(index)}>{item.question}</h2>
                            <i className={active == index ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'}></i>
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

export default Accordion