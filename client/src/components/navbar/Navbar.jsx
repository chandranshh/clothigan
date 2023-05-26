import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.allCartItems);

  console.log(cart);

  return (
    <div className="flex pl-4 pb-3 pr-4 pt-4 w-screen fixed z-10 bg-white ">
      <div className="flex gap-5">
        <div>Mens</div>
        <div>Womens</div>
        <div>Kids</div>
      </div>
      <div className="flex items-center justify-center flex-grow font-extrabold text-2xl ml-32">
        <Link to="/">CLOTHIGAN</Link>
      </div>
      <div className="flex gap-5">
        <Link to="/membership">Login/Register</Link>
        <div>Wishlist(0)</div>
        <Link to="/cart">
          <div>Cart({cart.cartQuantity})</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
