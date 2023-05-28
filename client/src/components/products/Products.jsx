import Card from "./Card";
import { useGetAllProductsQuery } from "../../features/slices/productAPI";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../features/slices/productSlice";

function Products() {
  const { data } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.allProducts.products);

  if (!data) {
    // Data is not yet available, show loading or fallback UI
    return <div>Loading...</div>;
  }

  // Update products state with the fetched data
  dispatch(setProducts(data));

  return (
    <div className="overflow-y-auto scrollbar-hide pt-16 ml-2 pl-64 h-screen w-screen">
      <div className="p-5 grid grid-cols-4 gap-4">
        {products?.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
