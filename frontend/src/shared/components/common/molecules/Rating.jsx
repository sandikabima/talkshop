import Star from "../atom/Star";

const Rating = ({ rating = 2 }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <Star key={index} filled={index < rating} />
  ));

  return <div className="flex space-x-1">{stars}</div>;
};

export default Rating;
