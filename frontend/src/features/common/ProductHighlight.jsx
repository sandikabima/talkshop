import Button from "@/shared/components/common/atom/Button";
import Heading from "@/shared/components/common/atom/Heading";
import ProductCard from "@/shared/components/common/molecules/ProductCard";
import { useSelector } from "react-redux";

const dummyProducts = [
  {
    id: 1,
    name: "Kemeja Flanel Merah",
    image: "https://res.cloudinary.com/dd0duto44/image/upload/v1750463943/img-7_rc72ah.png",
    price: 120000,
  },
  {
    id: 2,
    name: "Kaos Oversize Putih",
    image: "https://res.cloudinary.com/dd0duto44/image/upload/v1750463943/img-9_qmepye.png",
    price: 85000,
  },
  {
    id: 3,
    name: "Celana Pendek Santai",
    image: "https://res.cloudinary.com/dd0duto44/image/upload/v1750463943/img-1_mpkjjk.png",
    price: 60000,
  },
  {
    id: 4,
    name: "	Kaos Oversize Orange",
    image: "https://res.cloudinary.com/dd0duto44/image/upload/v1750463943/img-2_msxgku.png",
    price: 85000,
  },
];

const ProductHighlight = () => {

  return (
    <section className="px-5 md:px-20 py-16 space-y-8">
      <Heading className="text-center">New Arrivals</Heading>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="text-center">
        <Button variant="neutral" size="md" className="rounded-full">
          View All
        </Button>
      </div>
    </section>
  );
};

export default ProductHighlight;
