import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {

    const { user, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate()

    return (
        <div className="container mx-auto flex flex-col justify-center items-center px-6 lg:px-12 py-10">
            <h1 className="text-3xl font-bold text-center mb-6">
                Welcome {user.name}
            </h1>
            <div className="flex gap-2">


                <Button onClick={() => navigate("/")} className="border border-[#ff914d] rounded-lg bg-[#ff914d] text-sm text-black font-semibold px-6 py-3">Home</Button>
                <Button onClick={logoutUser} className="border border-red-600 rounded-lg bg-red-600 text-sm text-black font-semibold px-6 py-3">Logout</Button>
            </div>
        </div>
    );
};

export default Dashboard;