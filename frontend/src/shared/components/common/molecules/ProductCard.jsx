import Heading from "../atom/Heading";
import Rating from "./Rating";


const ProductCard = ({ image, name, price, rating }) => {
  return (
    <div className="flex flex-col space-y-2">
      <img
        src={image}
        alt={name}
        className="w-full object-cover h-full rounded-xl bg-[#F0EEED]"
      />
      <Heading level>{name}</Heading>
      <Rating rating={rating} />
      <Heading level={3}>Rp {price}</Heading>
    </div>
  );
};

export default ProductCard;
