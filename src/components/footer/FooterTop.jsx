import React from 'react'

const FooterTop = () => {
    return (
        <div className='container mx-auto px-6 lg:px-12 py-5 lg:py-10'>
            <div className='grid grid-cols-12'>
                <div className='col-span-6 md:col-span-3'>
                    <h5 className='text-[#878787] text-md py-3'>About</h5>
                    <ul className='text-white text-sm font-semibold whitespace-nowrap'>
                        <li><a href="#" className='hover:underline'>Contact Us</a></li>
                        <li><a href="#" className='hover:underline'>About Us</a></li>
                        <li><a href="#" className='hover:underline'>Carrers</a></li>
                        <li><a href="#" className='hover:underline'>Flipkart stories</a></li>
                        <li><a href="#" className='hover:underline'>Press</a></li>
                        <li><a href="#" className='hover:underline'>Corporate Information</a></li>
                    </ul>
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <h5 className='text-[#878787] text-md py-3'>Group Companies</h5>
                    <ul className='text-white text-sm font-semibold'>
                        <li><a href="#" className='hover:underline'>Myntra</a></li>
                        <li><a href="#" className='hover:underline'>Cleartrip</a></li>
                        <li><a href="#" className='hover:underline'>Shopsy</a></li>
                    </ul>
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <h5 className='text-[#878787] text-md py-3'>Help</h5>
                    <ul className='text-white text-sm font-semibold'>
                        <li><a href="#" className='hover:underline'>Payment</a></li>
                        <li><a href="#" className='hover:underline'>Shipping</a></li>
                        <li><a href="#" className='hover:underline'>Cancellation & Returns</a></li>
                        <li><a href="#" className='hover:underline'>FAQ</a></li>
                    </ul>
                </div>
                <div className='col-span-6 md:col-span-3'>
                    <h5 className='text-[#878787] text-md py-3'>Consumers Policy</h5>
                    <ul className='text-white text-sm font-semibold'>
                        <li><a href="#" className='hover:underline'>Cancellation & Returns</a></li>
                        <li><a href="#" className='hover:underline'>Terms of Use</a></li>
                        <li><a href="#" className='hover:underline'>Security</a></li>
                        <li><a href="#" className='hover:underline' >Privacy</a></li>
                        <li><a href="#" className='hover:underline'>Sitemap</a></li>
                        <li><a href="#" className='hover:underline'>Connect App</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterTop