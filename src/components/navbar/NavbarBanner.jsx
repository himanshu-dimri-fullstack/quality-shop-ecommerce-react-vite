import { ChevronDown, ShoppingCart, User } from "lucide-react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const NavbarBanner = () => {


    const { user, logoutUser } = useContext(AuthContext);
    const { cart } = useContext(CartContext);

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='grid py-4 grid-cols-12'>
            <div className='col-span-2'>
                <Link to={"/"} className=''>
                    <img src="/assets/logo.png" className='w-35 h-15 object-contain' />
                </Link>
            </div>
            <div className="col-span-8 flex items-center">
                <input
                    className="w-full h-10 px-3 text-black text-sm border border-[#2a55e5] rounded-lg focus:outline-none"
                    placeholder="Search for Products"
                />
            </div>
            <div className="col-span-2 justify-items-end">
                <div className="flex justify-between items-center h-15">
                    <div className="flex justify-end gap-3">
                        <div ref={dropdownRef} className="relative">

                            <button
                                onClick={() => setOpen(!open)}
                                className="flex items-center gap-1"
                            >
                                {user ? (
                                    <>
                                        <span className="text-[#ff914d] text-[10px] sm:text-sm font-bold">
                                            Hi, {user.name.split(" ")[0]}
                                        </span>
                                        <ChevronDown size={18} className="text-[#ff914d]" />
                                    </>
                                ) : (
                                    <>
                                        <User size={18} />
                                        <span className="hidden sm:block text-black text-sm">Login</span>
                                        <ChevronDown size={18} />
                                    </>
                                )}
                            </button>

                            {open && (
                                <div className="absolute right-0 mt-4 sm:mt-2 w-25 sm:w-30 bg-white shadow-lg rounded z-50 border border-[#ff914d]">

                                    {user ? (
                                        <div className="flex flex-col">

                                            <Link
                                                to="/dashboard"
                                                className="px-4 py-2 text-sm hover:bg-gray-100"
                                                onClick={() => setOpen(false)}
                                            >
                                                Dashboard
                                            </Link>

                                            <button
                                                onClick={() => {
                                                    logoutUser();
                                                    setOpen(false);
                                                }}
                                                className="text-left px-4 py-2 text-sm hover:bg-gray-100"
                                            >
                                                Logout
                                            </button>

                                        </div>
                                    ) : (
                                        <div className="flex flex-col">

                                            <Link
                                                to="/login"
                                                className="px-4 py-2 text-sm hover:bg-gray-100"
                                                onClick={() => setOpen(false)}
                                            >
                                                Login
                                            </Link>

                                            <Link
                                                to="/signup"
                                                className="px-4 py-2 text-sm hover:bg-gray-100"
                                                onClick={() => setOpen(false)}
                                            >
                                                Signup
                                            </Link>

                                        </div>
                                    )}

                                </div>
                            )}

                        </div>

                        <Link to="/cart" className="flex gap-1 items-center relative">
                            <ShoppingCart size={18} />
                            <span className="hidden sm:block text-black text-sm">Cart</span>

                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-3 text-xs bg-[#ff914d] text-white px-1 rounded-full">
                                    {cart.length}
                                </span>
                            )}
                        </Link>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default NavbarBanner