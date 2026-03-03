import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const NavbarBanner = () => {
    return (
        <div className='py-4 md:flex md:items-center md:justify-between md:h-18'>
            <div className='w-full md:w-auto flex justify-between gap-3'>
                <Link to={"/"} className='flex gap-2 justify-center w-full md:w-auto items-center bg-[#ffe51fff] h-11 py-5 px-6 border border-[#ffffff66] rounded-xl'>
                    <img src="/assets/logo.webp" className='w-7 h-7 object-contain' />
                    <img src="/assets/logo-1.webp" className='w-11.5 h-4.5 object-contain' />
                </Link>
                <Link to={"/"} className='flex gap-1 justify-center w-full md:w-auto items-center bg-[#f0f0f0] h-11 py-5 px-6 border border-[#f0f0f0] rounded-xl'>
                    <img src="/assets/travel-logo.webp" className='w-7 h-7 object-contain' />
                    <img src="/assets/travel-logo-1.webp" className='w-11.5 h-4.5 object-contain' />
                </Link>
            </div>
            <div className='pt-6 md:pt-0 flex gap-1'>
                <MapPin strokeWidth={3} size={14} className='mt-0.5' />
                <a href="#" className='text-sm font-bold text-[#2a55e5]'>Select delivery location</a>
            </div>
        </div>
    )
}

export default NavbarBanner