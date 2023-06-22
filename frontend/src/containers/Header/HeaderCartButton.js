import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useSelector } from "react-redux";
// import Login from "../../components/Login";
import { Link } from "react-router-dom";

const HeaderCartButton = (props) => {
  var cart = useSelector((state) => state.cart.cartList);
  // const dispatch = useDispatch();
  console.log("Header cart value", cart);

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("Logout function entered");
    props.setToken("");
    localStorage.clear();
  };

  return (
    <>
      <button
        className={classes.button1}
        onClick={props.onClick}
        disabled={cart.length === 0}
      >
        <span>Your</span>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>has</span>
        <span className={classes.badge}>
          {cart.length || (cart.length === 0 && <div>no</div>)}
        </span>
        <span>{cart.length === 1 ? "item" : "items"}</span>
      </button>

      {props.token && (
        <Link to="/login">
          <button className={classes.button3} onClick={handleLogout}>
            Log Out
          </button>
        </Link>
      )}
      <Link to="/signup">
        <button className={classes.button2}>sign In</button>
      </Link>
    </>
  );
};

export default HeaderCartButton;
