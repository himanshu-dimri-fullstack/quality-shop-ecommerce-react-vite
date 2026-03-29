import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {

    const navigate = useNavigate();

    const { cart, setCart } = useContext(CartContext);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip: ""
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === "phone" || name === "zip") {
            if (!/^\d*$/.test(value)) return;
        }

        setFormData({
            ...formData,
            [name]: value
        });

    };

    const totalPrice = cart.reduce((acc, item) => {

        const finalPrice = item.product.discount
            ? item.product.price - item.product.price * item.product.discount / 100
            : item.product.price;

        return acc + finalPrice * item.qtn;

    }, 0);

    const isFormValid =
        formData.name &&
        formData.email &&
        formData.phone.length === 10 &&
        formData.address &&
        formData.city &&
        formData.zip.length === 6;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isFormValid) return;

        const orderData = {
            customer: formData,
            items: cart,
            total: totalPrice
        };

        console.log(orderData);

        setCart([]);
        localStorage.removeItem("cart");

        navigate("/order-success", { state: orderData })
    };

    return (
        <div className="container mx-auto px-6 lg:px-12 py-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div>

                <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-[#ccc] p-2"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-[#ccc] p-2"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        maxLength="10"
                        inputMode="numeric"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-[#ccc] p-2"
                    />

                    <textarea
                        name="address"
                        placeholder="Address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        rows="4"
                        className="w-full border border-[#ccc] p-2 resize-none"
                    />

                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full border border-[#ccc] p-2"
                    />

                    <input
                        type="text"
                        name="zip"
                        placeholder="ZIP Code"
                        maxLength="6"
                        inputMode="numeric"
                        value={formData.zip}
                        onChange={handleChange}
                        className="w-full border border-[#ccc] p-2"
                    />

                </form>

            </div>


            <div>

                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4">

                    {cart?.map((item) => {
                        const finalPrice = item.product.discount
                            ? item.product.price - item.product.price * item.product.discount / 100
                            : item.product.price;
                        return (
                            <div
                                key={item.product.id}
                                className="flex justify-between border-b border-[#ccc] pb-3"
                            >

                                <div className="flex gap-4">

                                    <img
                                        src={item.product.image}
                                        alt=""
                                        className="w-12 h-12 border border-[#ccc] rounded-lg p-1 object-cover"
                                    />

                                    <div>

                                        <p className="font-semibold">
                                            {item.product.title}
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            Qty: {item.qtn}
                                        </p>

                                    </div>

                                </div>

                                <p className="font-semibold">
                                    ₹{parseInt(finalPrice * item.qtn)}
                                </p>

                            </div>
                        )
                    }



                    )}

                </div>

                <div className="mt-6 border-t border-[#ccc] pt-4 flex justify-between text-xl font-bold">

                    <span>Total</span>

                    <span>₹{parseInt(totalPrice)}</span>

                </div>

                <button
                    disabled={!isFormValid}
                    onClick={handleSubmit}
                    className={`mt-6 w-full py-3 text-black ${isFormValid ? "bg-[#ff914d]" : "bg-gray-400 cursor-not-allowed"
                        }`}
                >
                    Place Order
                </button>

            </div>

        </div>
    );
};

export default CheckoutPage;