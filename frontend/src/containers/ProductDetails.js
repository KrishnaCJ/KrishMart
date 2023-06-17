import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  addToCart,
} from "../redux/actions/productActions";

const ProductDetails = (props) => {
  // [cartCount, setCartCount] = useState(0);

  const { productId } = useParams();

  let product = useSelector((state) => state.product);
  console.log("Product Details>>>", product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  const fetchProductDetail = useCallback(
    async (id) => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(selectedProduct(response.data));
    },
    [dispatch]
  );

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail(productId);
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [fetchProductDetail, productId, dispatch]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt="Imagerey" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2 className="ui teal tag label">${price}</h2>
                <h3 className="ui brown block header">{category}</h3>

                <p>{description}</p>
                <div>
                  <br />
                  <br />
                  <center>
                    <button onClick={() => dispatch(addToCart(product))}>
                      Add to Cart
                    </button>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
