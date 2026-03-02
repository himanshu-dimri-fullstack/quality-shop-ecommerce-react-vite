
const CategoryCard = ({ name, src }) => {
    return (
        <div className="text-center">
            <img src={src} className='w-full h-10 md:h-15 lg:h-25 object-contain border-[#eee] rounded-xl' />
            <span className='text-black text-xs whitespace-nowrap'>{name}</span>
        </div>
    )
}

export default CategoryCard