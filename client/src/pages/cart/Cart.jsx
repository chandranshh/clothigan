import Navbar from "../../components/navbar/Navbar";
import CartProduct from "./CartProduct";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.allCartItems.cartItems);

  return (
    <div className="font-sans">
      <div>
        <Navbar />
      </div>
      <div className="w-full justify-center mt-20 text-3xl inline-block">
        <span className="ml-5 my-6 flex align-center">Your Cart : </span>
      </div>
      <div className="flex justify-center">
        <div className="w-3/4">
          {cartItems.map((item) => (
            <CartProduct key={item?.id} item={item} />
          ))}
        </div>
        <div className="bg-green-500 w-1/4">Purchase details</div>
      </div>
    </div>
  );
}

export default Cart;
