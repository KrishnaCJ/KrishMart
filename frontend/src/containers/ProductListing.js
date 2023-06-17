import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
// import { removeSelectedProduct } from "../redux/actions/productActions";

const ProductListing = () => {
  // const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fecthAsc = useCallback(async () => {
    console.log("inside ASC");
    const response = await axios
      .get("https://fakestoreapi.com/products?sort=asc'")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  }, [dispatch]);

  const fecthDesc = useCallback(async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products?sort=desc'")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  }, [dispatch]);

  const fecthJewelery = useCallback(async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  }, [dispatch]);

  const fecthElectronics = useCallback(async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  }, [dispatch]);

  const fecthMens = useCallback(async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  }, [dispatch]);

  const fecthWomens = useCallback(async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  }, [dispatch]);

  const fecthProducts = useCallback(async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  }, [dispatch]);

  useEffect(() => {
    fecthProducts();
    console.log("Product Listing loaded");
  }, [fecthProducts]);

  // console.log("productList >>>", products);
  return (
    <>
      <div className="five ui buttons">
        <button className="ui black button" onClick={fecthAsc}>
          All
        </button>
        <button className="ui black button" onClick={fecthJewelery}>
          Jewellery
        </button>
        <button className="ui black button" onClick={fecthElectronics}>
          electronics
        </button>
        <button className="ui black button" onClick={fecthMens}>
          Mens Clothing
        </button>
        <button className="ui black button" onClick={fecthWomens}>
          Womens Clothing
        </button>
      </div>

      {/* <select class="ui dropdown">
        <option value="">Sorting</option>
        <option value="1" onClick={fecthAsc}>
          asc
        </option>
        <option value="0" onClick={fecthDesc}>
          desc
        </option>
      </select> */}

      <div className="ui grid container">
        <ProductComponent />
      </div>
    </>
  );
};

export default ProductListing;
