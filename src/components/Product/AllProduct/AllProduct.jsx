import React, { useEffect, useState } from "react";
import classes from "./AllProduct.module.css";

function AllProduct() {
  const [allProductData, setAllProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAllProduct = async () => {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setAllProductData(data);
      setIsLoading(false);
    };
    fetchAllProduct();
  }, []);

  let content = <p>Found no product.</p>;

  if (allProductData.length > 0) {
    content = (
      <div className={classes.allProductWrapper}>
        {allProductData.map((item) => (
          <div key={item.id} className={classes.allProduct}>
            <img src={item.image} alt="" />
            <div className={classes.allProductInfo}>
              <h1>{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isLoading) {
    content = (
      <p>
        <img className={classes.gif} src="loading.gif" alt="gif" />
      </p>
    );
  }

  return (
    <div className={classes.allProductContainer}>
      <h1>All Products</h1>
      {content}
    </div>
  );
}

export default AllProduct;
