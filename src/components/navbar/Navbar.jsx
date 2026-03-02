import React from 'react'
import NavbarBanner from './NavbarBanner'
import NavbarBelt from './Navbarbelt'

const Navbar = () => {
    return (
        <div className='px-6 xl:container xl:mx-auto xl:px-12'>
            <NavbarBanner />
            <NavbarBelt />
        </div>
    )
}

export default Navbar