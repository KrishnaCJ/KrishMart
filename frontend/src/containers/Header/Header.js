import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
// import ShopImage from "../../assets/Fakecart.jpg";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/">
          <h1>Shopfreak</h1>
        </Link>
        <HeaderCartButton
          onClick={props.onShowCart}
          setToken={props.setToken}
          token={props.token}
        />
      </header>
      {/* <div className={classes["main-image"]}>
        <img src={ShopImage} alt="All partners" />
      </div> */}
    </Fragment>
  );
};

export default Header;
