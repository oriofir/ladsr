import React, { useState, useEffect, useReducer } from "react";
import logo from "../assets/LADSR_LOGO_ROC_HORZ_YELLOW.png";
import Navigation from "./Navigation";
import Cart from "./Cart/Cart";
import ProductCard from "./ProductCard/ProductCard";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.value];
    case "REMOVE":
      return [
        ...state.slice(0, action.value),
        ...state.slice(action.value + 1),
      ];
    default:
      return state;
  }
};

const useProductsApi = () => {
  const [products, setProducts] = useState([]);

  const updateProducts = () => {
    fetch("https://run.mocky.io/v3/8f6209d6-f1db-482c-9599-4e79af45adbf")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((error) => console.log(`Oops! There was an error: ${error}`));
  };

  useEffect(() => {
    updateProducts();
  }, []);

  return products;
};

const Home = () => {
  const products = useProductsApi();
  console.log(products);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, updateCartItem] = useReducer(cartReducer, []);

  const addProductToCart = (index) => {
    updateCartItem({ type: "ADD", value: products[index] });
    setCartOpen(true);
  };

  const removeProductFromCart = (index) => {
    updateCartItem({ type: "REMOVE", value: index });
  };

  return (
    <>
      <div className="homeContainer">
        <img src={logo} className="logoImageHome" alt="logo" />
        <Navigation />
        <header>
          <h1>Store</h1>
          <nav>
            <button onClick={() => setCartOpen(!cartOpen)}>
              <img
                width="30"
                src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
                alt="Shopping cart icon"
              />
            </button>
          </nav>
        </header>
        <Cart
          removeProductFromCart={removeProductFromCart}
          cartOpen={cartOpen}
          cartItems={cartItems}
          setCartOpen={setCartOpen}
        />

        <main>
          <ul>
            {products.length > 0 ? (
              products.map((product, idx) => (
                <ProductCard
                  key={idx}
                  index={idx}
                  addToCart={addProductToCart}
                  product={product}
                />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </ul>
        </main>
      </div>
    </>
  );
};

export default Home;
