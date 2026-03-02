import React from 'react'

const FooterTop = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-12 px-6 xl:px-12 py-5 lg:py-10'>
                <div className='col-span-6 md:col-span-3'>
                    <h5 className='text-[#878787] text-md py-3'>About</h5>
                    <ul className='text-white text-sm font-semibold whitespace-nowrap'>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Carrers</a></li>
                        <li><a href="#">Flipkart stories</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Corporate Information</a></li>
                    </ul>
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <h5 className='text-[#878787] text-md py-3'>Group Companies</h5>
                    <ul className='text-white text-sm font-semibold'>
                        <li><a href="#">Myntra</a></li>
                        <li><a href="#">Cleartrip</a></li>
                        <li><a href="#">Shopsy</a></li>
                    </ul>
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <h5 className='text-[#878787] text-md py-3'>Help</h5>
                    <ul className='text-white text-sm font-semibold'>
                        <li><a href="#">Payment</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Cancellation & Returns</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <h5 className='text-[#878787] text-md py-3'>Consumers Policy</h5>
                    <ul className='text-white text-sm font-semibold'>
                        <li><a href="#">Cancellation & Returns</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Connect App</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterTop