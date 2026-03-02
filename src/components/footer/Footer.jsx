import React from 'react'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

const Footer = () => {
    return (
        <div className='bg-[#111112]'>
            <div className='border border-b-[#878787]'>
                <FooterTop />
            </div>
            <FooterBottom />
        </div>
    )
}

export default Footer