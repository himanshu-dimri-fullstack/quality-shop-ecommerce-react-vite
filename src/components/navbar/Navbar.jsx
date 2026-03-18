import React from 'react'
import NavbarBanner from './NavbarBanner'
import NavbarBelt from './NavbarBelt'

const Navbar = () => {
    return (
        <div className='container mx-auto px-6 lg:px-12'>
            <NavbarBanner />
            <NavbarBelt />
        </div>
    )
}

export default Navbar