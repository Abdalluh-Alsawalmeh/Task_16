import React from "react";
import '/src/App.css'
const Favorite = ({ favorites, removeFromFavorites, addToCart }) => {
  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorite items yet.</p>
      ) : (
        favorites.map((elem) => (
          <div
            key={elem.id}
            style={{
              marginBottom: "15px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px",
            }}
          >
            <div className="crat">
              <img style={{ width: "50px" }} src={elem.image} alt={elem.title} />
              <span style={{ display: "flex", justifyContent: "center" }}>
                {elem.title}
              </span>
              <p>Price: ${elem.price}</p>

              <button onClick={() => removeFromFavorites(elem.id)}>
                Remove from Fav
              </button>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => addToCart(elem)}
              >
                Add to Cart
              </button>
            </div>

          </div>
        ))
      )}
    </div>
  );
};

export default Favorite;