const ProductCard = ({ product }) => {
    const finalPrice = product?.discount ? product?.price - product?.price * (product?.discount / 100) : product?.price;

    return (
        <div className='border p-2 border-[#eee] rounded-2xl mb-2 lg:mb-0'>
            <div className='w-full'>
                <img src={product.image} className='w-full h-30 sm:h-40 md:h-60 object-contain ' />
            </div>
            <div className='flex flex-col p-4'>
                <span className='text-sm text-black'>{(product.title).slice(0, 20) + "..."}</span>
                <div className="flex gap-2  pt-1">
                    {
                        product.discount ?
                            <>
                                <span className='text-md text-black font-bold'>₹{parseInt(finalPrice)}</span>
                                <span className="text-md line-through text-[#707070] font-semibold">₹{product.price}</span>
                            </>
                            :
                            <span className='text-md text-black font-bold'>₹{parseInt(finalPrice)}</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductCard