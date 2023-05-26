/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../features/slices/cartSlice";

function CartProduct({ item }) {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity({ id: item.id }));
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity({ id: item.id }));
    } else {
      dispatch(removeFromCart({ id: item.id }));
    }
  };

  return (
    <div className="flex my-3 rounded-md m-8 h-[130px] shadow-xl">
      <div className="h-[100px] w-[100px]">
        <img className="p-4" src={item.image} alt={item.id} />
      </div>
      <div className="mt-10">
        <div>{item.title}</div>
        <div>Rs. {item.price}</div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-5 inline-block mt-[5rem]">
          <Button size="sm" onClick={handleDecreaseQuantity}>
            -
          </Button>
          <div>{item.quantity}</div>
          <Button size="sm" onClick={handleIncreaseQuantity}>
            +
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
