/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
function CartProduct({ item }) {
  console.log(item);
  return (
    <div className="flex my-3 rounded-md m-8 h-[130px] shadow-xl">
      <div className="h-[100px] w-[100px]">
        <img className="p-4" src={item.image} alt={item.id} />
      </div>
      <div>
        <div>{item.title}</div>
        <div>{item.price}</div>
        <div>{item.quantity}</div>
      </div>
    </div>
  );
}

export default CartProduct;
