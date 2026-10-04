function ProductCard({ image, name, description, price }) {
  return (
    <div className="group overflow-hidden border border-[#403a34] bg-[#2b231d]">

      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold">
          {name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#b8aa9a]">
          {description}
        </p>

        <p className="mt-5 font-semibold text-[#d6a66a]">
          PKR {price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;