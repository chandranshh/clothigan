import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userAuthLogout } from "../../features/slices/authSlice";

function Navbar() {
  const userState = useSelector((state) => state.userAuthLogin);
  const cart = useSelector((state) => state.allCartItems);
  const userData = useSelector((state) => state.fetchedUserData.userData.user);

  console.log(userData);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userAuthLogout());
  };

  //console.log(cart);

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
        {userData?.isAdmin && userState?.isAuthenticated && (
          <div className="cursor-pointer">Admin Panel</div>
        )}
        {!userData?.isAdmin && userState?.isAuthenticated && (
          <Link to="/account">
            <div className="cursor-pointer">My account</div>
          </Link>
        )}
        {!userState?.isAuthenticated && (
          <Link to="/membership">Login/Register</Link>
        )}

        <div>Wishlist(0)</div>
        <Link to="/cart">
          <div>Cart({cart?.cartQuantity})</div>
        </Link>
        {userState?.isAuthenticated && (
          <div className="cursor-pointer" onClick={logoutHandler}>
            Logout
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
