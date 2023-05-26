import Sidebar from "../sidebar/Sidebar";
import Products from "../products/Products";

function Body() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <Products />
      </div>
    </div>
  );
}

export default Body;
