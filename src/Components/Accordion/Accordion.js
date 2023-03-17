import { React, useState } from 'react'
import { AccordionItems } from './AccordionItems'
import './Accordion.css'

function Accordion() {

    const [active, setActive] = useState(null)

    return (
        <div className='accordion-wrapper'>
            <div className='accordion'>
            {AccordionItems.map((item, index) => {
                    return (
                        <div className='accordion-item' key={index}>       
                            <div className='accordion-title-box' onClick={() => active === index ? setActive(null) : setActive(index)}>
                                <h2 className='accordion-title'>{item.question}</h2>
                                <i className={active === index ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}></i>
                            </div>
                            <div className={active === index ? 'accordion-content-box show' : 'accordion-content-box'}>
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