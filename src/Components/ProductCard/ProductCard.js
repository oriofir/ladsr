// ProductCard.js
// ProductCard.js
import { useReducer } from "react";

const dispatchReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return (state += 1);
    case "SUBTRACT":
      return (state -= 1);
    default:
      return state;
  }
};

function Product({ product, addToCart, index, action }) {
  const [quantity, dispatch] = useReducer(dispatchReducer, 0);

  return (
    <li className="card">
      <img src={`${product.image}`} alt="" />
      <div className="description">
        <h2>{product.title}</h2>
        <div className={`price ${!!product.salePrice ? "sale" : ""}`}>
          <span className="reg"> {`$${product.price}`}</span>
          {product.salePrice && `$${product.salePrice}`}
        </div>
      </div>
      <div className="quantity">
        <button
          className="quantity-increase"
          onClick={() => dispatch({ type: "ADD" })}
        >
          +
        </button>
        Quantity: {quantity}
        <button
          className="quantity-decrease"
          onClick={() => dispatch({ type: "SUBTRACT" })}
        >
          -
        </button>
      </div>
      {addToCart && (
        <>
          <button className="btn btn-primary" onClick={() => addToCart(index)}>
            {action ? "Remove from Cart" : "Add To Cart"}
          </button>
        </>
      )}
    </li>
  );
}

export default Product;
