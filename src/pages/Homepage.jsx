import { useEffect, useState } from "react"
import CategoryCard from "../components/CategoryCard"
import HomeSlider from "../components/home/HomeSlider"
import data from "../data/categoryData"
import ProductCard from "../components/ProductCard"
import { ArrowRight } from "lucide-react"

const Homepage = () => {

    const [mobiles, SetMobiles] = useState([]);
    const [watches, SetWatches] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("http://localhost:3000/mobiles");
            const data = await res.json();
            console.log(data);
            SetMobiles(data);
        }
        fetchProducts();
    }, [])
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("http://localhost:3000/watches");
            const data = await res.json();
            console.log(data);
            SetWatches(data);
        }
        fetchProducts();
    }, [])

    return (
        <div className='px-6 xl:container xl:mx-auto xl:px-12 my-4'>

            <HomeSlider />

            <div className="grid grid-cols-12 py-2">
                <div className="col-span-12 lg:col-span-9 overflow-x-auto scroll-smooth hide-scrollbar">
                    <div className="w-full flex gap-4">
                        {
                            data.map((d, i) => {
                                return (
                                    <div key={i} className="w-full">
                                        <CategoryCard name={d.name} src={d.img} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="">
                <div className="flex justify-between py-2 md:py-5">
                    <h3 className="text-lg md:text-2xl text-black font-bold">Suggested for you</h3>
                    <div className="py-1 px-3 md:py-2 md:px-6 bg-[#2a55e5] border border-[#eee] rounded-2xl">
                        <ArrowRight size={18} className="text-white" />
                    </div>
                </div>
                <div className="grid grid-cols-12 py-2">
                    {
                        mobiles.map((product) => {
                            return (
                                <div key={product.id} className="col-span-6 md:col-span-4 lg:col-span-2 pr-2">
                                    <ProductCard product={product} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="">
                <div className="flex justify-between py-2 md:py-5">
                    <h3 className="text-lg md:text-2xl text-black font-bold">Suggested for you</h3>
                    <div className="py-1 px-3 md:py-2 md:px-6 bg-[#2a55e5] border border-[#eee] rounded-2xl">
                        <ArrowRight size={18} className="text-white" />
                    </div>
                </div>
                <div className="grid grid-cols-12 py-2">
                    {
                        watches.map((product) => {
                            return (
                                <div key={product.id} className="col-span-6 md:col-span-4 lg:col-span-2 pr-2">
                                    <ProductCard product={product} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Homepage