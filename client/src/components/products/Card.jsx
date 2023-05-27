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
      <div className="h-[20%] mt-4 py-3 p-3">
        <div>
          <div className="text-[16px] text-center pt-2 bold">
            {product.title}
          </div>
        </div>
        <div className="text-[15px] text-center pt-2 mb-6">
          <span className="block">Rs. {product.price}</span>
        </div>
      </div>
      <div className="justify-center mt-14 flex">
        <Button size="md" onClick={() => dispatch(addToCart(product))}>
          <span className="text-[15px] block">Add to Cart</span>
        </Button>
      </div>
    </div>
  );
}

export default Card;
