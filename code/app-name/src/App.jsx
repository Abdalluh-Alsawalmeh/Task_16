import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import Favorite from "./components/Favorite";

const App = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [view, setView] = useState("");
  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    console.log(result);
    setProducts(result);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterdProducts =
    category === "all"
      ? products
      : products.filter((elem) => elem.category === category);

  const addToCart = (product) => {
    const exist = cart.find((elem) => elem.id === product.id);
    if (exist) {
      const updated = cart.map((elem) =>
        elem.id === product.id ? { ...elem, quantity: elem.quantity + 1 } : elem
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const targetProduct = cart.find((elem) => elem.id === id);
    if (targetProduct && targetProduct.quantity > 1) {
      const updated = cart.map((elem) =>
        elem.id === id ? { ...elem, quantity: elem.quantity - 1 } : elem
      );
      setCart(updated);
    } else {
      const updated = cart.filter((elem) => elem.id !== id);
      setCart(updated);
    }
  };

  const addToFavorites = (product) => {
    const isExist = favorites.some((elem) => elem.id === product.id);
    if (!isExist) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFromFavorites = (id) => {
    const updated = favorites.filter((elem) => elem.id !== id);
    setFavorites(updated);
  };

  return (
    <div>
      <Nav setView={setView} />
      <select
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
      {view === "cart" ? (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      ) : view === "fav" ? (
        <Favorite
          favorites={favorites}
          removeFromFavorites={removeFromFavorites}
          addToCart={addToCart}
        />
      ) : (
        <ProductsList
          products={filterdProducts}
          addToCart={addToCart}
          addToFavorites={addToFavorites}
        />
      )}
    </div>
  );
};

export default App;