import Navbar from "../../components/navbar/Navbar";
import CartProduct from "./CartProduct";
import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";

function Cart() {
  const cartItems = useSelector((state) => state.allCartItems.cartItems);
  const cartPrice = useSelector((state) =>
    state.allCartItems.cartPrice.toFixed(2)
  );

  return (
    <div className="font-sans">
      <div>
        <Navbar />
      </div>
      <div className="w-full justify-center mt-20 text-3xl inline-block">
        <span className="ml-5 my-6 flex align-center">Your Cart :</span>
      </div>
      <div className="flex justify-center">
        <div className="w-[60%] mr-8">
          {cartItems.map((item) => (
            <CartProduct key={item?.id} item={item} />
          ))}
        </div>
        <div className="rounded-lg w-[28%] shadow-slate-600 max-h-[35rem] flex flex-col justify-between">
          <div className="py-4 text-center rounded-lg bg-gray-200">
            <span className="text-[20px]">Cart Details</span>
          </div>
          <div className="flex flex-col h-auto">
            <div className="h-[24rem] overflow-y-scroll">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between max-w-[95%]">
                  <span className="text-[13px] p-4 block w-[80%]">
                    {item.title}
                  </span>
                  <span className="text-[13px] p-4 block w-[20%]">
                    {parseFloat(item.price).toFixed(2)}
                  </span>
                  <span className="text-[13px] p-4 block w-[20%]">
                    x {item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-4 flex justify-between">
              <span className="block">Total MRP </span>
              <span className="pl-[12rem]">Rs. {cartPrice}</span>
            </div>
            <div className="flex justify-center py-2">
              <Button
                colorScheme="facebook"
                size="lg"
                className="max-w-[80%] min-w-[60%]  self-center"
              >
                <span className="text-lg text-bold p-3">Buy now</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
