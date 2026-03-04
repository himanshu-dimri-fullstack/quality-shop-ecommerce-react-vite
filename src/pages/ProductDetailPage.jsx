import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {

    const { catSlug, slug } = useParams();

    const [subCat, setSubCat] = useState(null);
    const [product, setProduct] = useState(null);
    // const []

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`http://localhost:3000/products?slug=${slug}`);
            const data = await res.json();
            console.log(data[0]);
            const subCategoryId = data[0].subcategoryId;
            console.log(subCategoryId);
            const subCat = await fetch(`http://localhost:3000/subcategories?id=${subCategoryId}`);
            const subCatData = await subCat.json();
            console.log(subCatData[0]);
            setSubCat(subCatData[0]);
            setProduct(data[0]);
        }
        fetchProduct();

    }, [slug]);

    if (!product || !subCat) {
        return <div>Loading...</div>
    }
    return (
        <div className="container mx-auto px-6 lg:px-12">
            <div className="my-2">
                <span className="text-sm text-[#707070ff] font-semibold pr-1"><Link>Home</Link></span>
                <span className="text-sm text-[#707070ff] font-semibold pr-1">/</span>
                <span className="text-sm text-[#707070ff] font-semibold pr-1"><Link>{subCat.name}</Link></span>
                <span className="text-sm text-[#707070ff] font-semibold pr-1">/</span>
                <span className="text-sm text-[#707070ff] font-semibold pr-1"><Link>{product.title}</Link></span>

            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-7">
                    <img src={product.image} />
                </div>
                <div className="col-span-5">
                    <div>

                    </div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage