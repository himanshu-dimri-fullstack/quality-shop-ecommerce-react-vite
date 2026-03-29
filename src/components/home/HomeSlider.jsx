import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (

        <Slider {...settings}>
            <div className="w-full border-[#eee] rounded-2xl">
                <img src="/assets/banner.jpg" className="w-full h-50 sm:h-75 md:h-150 object-fill  border-[#eee] rounded-2xl" />
            </div>
            <div className="w-full border-[#eee] rounded-2xl">
                <img src="/assets/banner-2.jpg" className="w-full h-50 sm:h-75 md:h-150 object-fill border-[#eee] rounded-2xl" />
            </div>
        </Slider>

    )
}

export default HomeSlider