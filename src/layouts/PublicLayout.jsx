import { Outlet } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const PublicLayout = () => {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </>
    );
};

export default PublicLayout;