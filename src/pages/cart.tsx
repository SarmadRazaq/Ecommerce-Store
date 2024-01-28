import { useState, useEffect } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "./cart-item";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "sdasdas",
    photo:
      "https://m.media-amazon.com/images/I/71TPda7cwUL.__AC_SY445_SX342_QL70_FMwebp_.jpg",
    name: "Macbook",
    price: 3000,
    quantity: 4,
    stock: 10,
  },
];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const discount = 400;
const shippingCharges = 200;
const total = subTotal + tax + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setisValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (Math.random() > 0.5) setisValidCouponCode(true);
      else setisValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutID);
      setisValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => <CartItem key={idx} cartItem={i} />)
        ) : (
          <h1>No Items in cart</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: Rs. {subTotal}</p>
        <p>Shipping Chargers : Rs. {shippingCharges}</p>
        <p>Tax:Rs. {tax}</p>
        <p>
          Discount <em className="red">- Rs. {discount}</em>
        </p>
        <p>
          <b>Total: Rs. {total}</b>
        </p>
        <input
          type="text"
          value={couponCode}
          placeholder="Coupon Code"
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              Rs. {discount} off using the <code>{couponCode}</code>{" "}
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout Link</Link>}
      </aside>
    </div>
  );
};

export default Cart;
