import React from 'react'

import {
    Navbar,
    Footer,
    Landing,
    About,
    Skills,
    Testimonials,
    Why
} from '../../components'

function Main() {
    return (
        <div>
            <Navbar />        
            <Landing />
            <About />
            <Why/>
            <Skills />
            <Testimonials/>
            <Footer/>
        </div>
    )
}

export default Main
