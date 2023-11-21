import { useEffect, useState } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Cart/Cart.Slice";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const productInCart = useSelector((state) => state.myCart.data);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProductList(data));
  }, []);

  const onAddToCart = (product) => {
    console.log("Product: selected:  ", product);
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1>My Products</h1>
      <div className="product-list">
        {productList.map((item) => {
          return (
            <div className="item" key={item.id}>
              <img className="item-image" src={item.image} />
              <div>
                <p>{item.title}</p>

                <button onClick={() => onAddToCart(item)}>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
