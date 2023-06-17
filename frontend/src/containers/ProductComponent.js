import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/productActions";
import Card from "./UI/Card";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const renderList = products.map((product) => {
    product.quantity = 1;
    const { id, title, image, price, category } = product;

    return (
      <Card key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">₹ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
        <div>
          <br />
          <br />
          <center>
            <button
              className="addTocart"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </center>
        </div>
      </Card>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
