import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";

const ProductListMyTime = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const targetTimeString = new Date("October 12,2023 20:12:00");
  const targetTime = targetTimeString.getTime();
  setTimeout(() => {
    console.log({ isLoading });
    setIsLoading(false);
  }, targetTime - Date.now());
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        //console.log(data);
        // Success

        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
        // Error
        setIsLoading(false);
      });
  }, []);

  console.log("Re-Render: ", isLoading, products);

  return (
    <div>
      <h1>My Product</h1>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {isLoading ? (
          <p>Sale will start at 8:12pm</p>
        ) : (
          products.map((item) => {
            return (
              <div style={{ width: 140 }} key={item.id}>
                <img width={70} height={70} src={item.image} />
                <p style={{ fontSize: 11 }} key={item.id}>
                  {item.title}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductListMyTime;
