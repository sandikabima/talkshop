import { StarIcon } from "lucide-react";

const Star = ({ filled }) => {
  return (
    <StarIcon
      size={20}
      className={filled ? "fill-yellow-400" : "text-gray-300"}
    />
  );
};

export default Star;
