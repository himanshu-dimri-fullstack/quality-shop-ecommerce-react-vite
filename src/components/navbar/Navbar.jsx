import React from 'react'
import NavbarBanner from './NavbarBanner'
import NavbarBelt from './Navbarbelt'

const Navbar = () => {
    return (
        <div className='px-6 xl:px-12 xl:container xl:mx-auto'>
            <NavbarBanner />
            <NavbarBelt />
        </div>
    )
}

export default Navbar