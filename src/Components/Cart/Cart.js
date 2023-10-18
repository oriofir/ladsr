// Cart.js
import ProductCard from "../ProductCard/ProductCard";

const Cart = ({ cartOpen, setCartOpen, cartItems, removeProductFromCart }) => {
  return (
    <div className={`cart ${cartOpen === true ? "open" : "closed"}`}>
      <div className="cart-header">
        <h4>Your Cart</h4>
        <button className="btn" onClick={() => setCartOpen(false)}>
          Close
        </button>
      </div>
      {cartItems.map((product, i) => (
        <ProductCard
          addToCart={removeProductFromCart}
          action={"remove"}
          key={i}
          index={i}
          product={product}
        />
      ))}
    </div>
  );
};

export default Cart;
