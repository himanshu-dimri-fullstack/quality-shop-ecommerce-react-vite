import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const OrderSuccess = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const order = location.state;

    useEffect(() => {

        if (!order) {
            navigate("/");
        }

    }, [order, navigate]);

    if (!order) return null;

    return (

        <div className="container mx-auto px-6 lg:px-12 py-6">

            <h1 className="text-3xl font-bold mb-6">
                Order Placed Successfully
            </h1>

            <h2 className="text-xl font-semibold mb-4">
                Customer Details
            </h2>

            <p>Name: {order.customer.name}</p>
            <p>Email: {order.customer.email}</p>
            <p>Phone: {order.customer.phone}</p>
            <p>Address: {order.customer.address}</p>
            <p>City: {order.customer.city}</p>
            <p>ZIP: {order.customer.zip}</p>

            <h2 className="text-xl font-semibold mt-6 mb-4">
                Order Items
            </h2>

            {order.items.map((item) => (

                <div key={item.product.id} className="flex justify-between border-b py-2">

                    <span>{item.product.title} (x{item.qtn})</span>

                </div>

            ))}

            <h2 className="text-xl font-bold mt-6">
                Total: ₹{parseInt(order.total)}
            </h2>

        </div>
    );
};

export default OrderSuccess;