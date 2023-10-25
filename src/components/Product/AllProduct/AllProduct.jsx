import React, { useEffect, useState } from "react";
import classes from "./AllProduct.module.css";
import ProductInfo from "../../ProductInfo/ProductInfo";

function AllProduct() {
  const [showProductInfo, setShowProductInfo] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
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

  const showProductInfoHandler = (item) => {
    setShowProductInfo(true);
    setSelectedProduct(item);
  };

  const hideProductInfoHandler = () => {
    setShowProductInfo(false);
    setSelectedProduct(null);
  };

  let content = <p>Found no product.</p>;

  if (allProductData.length > 0) {
    content = (
      <div className={classes.allProductWrapper}>
        {allProductData.map((item) => (
          <div
            onClick={() => {
              showProductInfoHandler(item);
            }}
            key={item.id}
            className={classes.allProduct}
          >
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
    <React.Fragment>
      <div className={classes.allProductContainer}>
        <h1>All Products</h1>
        {content}
      </div>
      {showProductInfo && (
        <div className={classes.ProductInfo}>
          <ProductInfo
            onClose={hideProductInfoHandler}
            selectedProduct={selectedProduct}
          />
        </div>
      )}
    </React.Fragment>
  );
}

export default AllProduct;
