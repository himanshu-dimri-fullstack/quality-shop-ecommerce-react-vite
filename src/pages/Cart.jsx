import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Plus, Minus } from "lucide-react";
import Button from "../components/Button";

const Cart = () => {

    const { cart, increaseQtn, decreaseQtn, removeItem } = useContext(CartContext);

    const totalPrice = cart.reduce((acc, item) => {

        const finalPrice = item.product.discount
            ? item.product.price - item.product.price * item.product.discount / 100
            : item.product.price;

        return acc + finalPrice * item.qtn;

    }, 0);

    return (
        <div className="bg-[#f1f3f6] min-h-screen">

            <div className="container mx-auto px-6 lg:px-12 py-6">

                <div className="grid grid-cols-12 gap-6">

                    {/* CART ITEMS */}
                    <div className="col-span-12 lg:col-span-8 bg-white rounded-xl shadow p-4">

                        {cart.map((item) => {

                            const finalPrice = item.product.discount
                                ? item.product.price - item.product.price * item.product.discount / 100
                                : item.product.price;

                            return (

                                <div
                                    key={item.product.id}
                                    className="flex items-center justify-between border-b border-[#ccc] py-4"
                                >

                                    {/* PRODUCT INFO */}
                                    <div className="flex items-center gap-4 w-1/2">

                                        <img
                                            src={item.product.image}
                                            className="w-16 h-16 object-contain border border-[#ccc] rounded-lg p-1"
                                        />

                                        <span className="text-md md:text-lg font-semibold text-black">
                                            {item.product.title}
                                        </span>

                                    </div>

                                    {/* QUANTITY */}
                                    <div className="flex items-center gap-3 border border-[#ccc] rounded-lg px-3 py-1">

                                        <Button onClick={() => decreaseQtn(item.product.id)} className="pt-1">
                                            <Minus size={16} />
                                        </Button>

                                        <span className="font-semibold">{item.qtn}</span>

                                        <Button onClick={() => increaseQtn(item.product.id)} className="pt-1">
                                            <Plus size={16} />
                                        </Button>

                                    </div>

                                    {/* PRICE + REMOVE */}
                                    <div className="flex flex-col items-end">

                                        <span className="text-lg font-bold text-black">
                                            ₹{parseInt(finalPrice) * item.qtn}
                                        </span>

                                        <button
                                            onClick={() => removeItem(item.product.id)}
                                            className="text-sm text-red-500 hover:text-red-600"
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                    {/* PRICE DETAILS */}
                    <div className="col-span-12 lg:col-span-4">

                        <div className="bg-white rounded-xl shadow p-4 sticky top-5">

                            <h3 className="text-lg font-bold border-b border-[#ccc] pb-2 mb-4">
                                Price Details
                            </h3>

                            <div className="flex justify-between mb-2">
                                <span>Price ({cart.length} items)</span>
                                <span>₹{parseInt(totalPrice)}</span>
                            </div>

                            <div className="flex justify-between mb-2">
                                <span>Delivery</span>
                                <span className="text-green-600">Free</span>
                            </div>

                            <div className="flex justify-between border-t border-[#ccc] pt-3 mt-3 text-lg font-bold">
                                <span>Total Amount</span>
                                <span>₹{parseInt(totalPrice)}</span>
                            </div>

                            <Button className="w-full mt-4 bg-[#ffe51f] text-black py-3 rounded-lg font-semibold hover:bg-[#f7dc0a] transition">
                                Proceed to Checkout
                            </Button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Cart;