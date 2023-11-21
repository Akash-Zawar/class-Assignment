import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addMoreQuantity,
  reduceQuantity,
} from "../Cart/Cart.Slice";

const MyCart = () => {
  const cartList = useSelector((state) => state.myCart.data);
  const dispatch = useDispatch();
  let totalCost = 0;
  const costCalculator = cartList.map((item) => {
    totalCost += item.price * item.quantity;
  });

  const onRemoveFromCart = (removedProduct) => {
    console.log({ removedProduct });
    dispatch(removeFromCart(removedProduct));
    console.log({ cartList });
  };
  console.log({ cartList });
  return (
    <div>
      <h1>My Cart</h1>
      {cartList.length > 0 ? (
        cartList.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                gap: "20px",
                border: "1px solid silver",
                padding: "4px",
                borderRadius: "6px",
                alignItems: "center",
                marginBottom: 6,
                justifyContent: "space-around",
              }}
              key={item.id}>
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}>
                <img src={item.image} width={30} />
                <p style={{ fontSize: "14px" }}>
                  {item.title} : {item.price}$
                </p>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => {
                    onRemoveFromCart(item);
                  }}
                  style={{ fontSize: "12px" }}>
                  Remove Product
                </button>
                <div style={{ display: "flex", gap: "4px" }}>
                  <button onClick={() => dispatch(addMoreQuantity(item))}>
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(reduceQuantity(item))}>
                    -
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No Products in the cart</p>
      )}
      <span>Total Cart Price: {totalCost}</span>
    </div>
  );
};

export default MyCart;
