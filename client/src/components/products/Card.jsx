/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

function Card({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="shadow rounded-lg bg-white z-0">
      <div className="h-[250px] pt-4">
        <img
          src={product.image}
          className="object-contain w-full h-full "
          alt={product.title}
        />
      </div>
      <div>
        <div className="text-[14px] text-center pt-2">{product.title}</div>
      </div>
      <div className="text-[15px] text-center pt-2">Rs. {product.price}</div>
      <div className="p-5 flex justify-between">
        <Button size="lg" onClick={() => dispatch(addToCart(product))}>
          <span className="text-[15px]">Add to Cart</span>
        </Button>
        <Button size="lg">
          <span className="text-[15px]">Buy Now</span>
        </Button>
      </div>
    </div>
  );
}

export default Card;
