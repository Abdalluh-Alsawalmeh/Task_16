import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    console.log(cart);

    // حساب المجموع الكلي لكافة المنتجات في السلة
    const totalPrice = cart.reduce((acc, elem) => {
        return acc + elem.price * elem.quantity;
    }, 0);

    return (
        <div>
            <h1>Cart</h1>

            {cart.map((elem) => {
                return (
                    <div key={elem.id} className='cart'>
                        <img style={{ width: "50px" }} src={elem.image} alt={elem.title} />
                        <span style={{ display: "flex", justifyContent: "center" }}>
                            {elem.title}
                        </span>
                        <p>Quantity: {elem.quantity}</p>
                        <p>Unit Price: ${elem.price}</p>
                        <p>Subtotal: ${(elem.price * elem.quantity).toFixed(2)}</p>

                        <button
                            onClick={() => {
                                removeFromCart(elem.id);
                            }}
                        >remove
                        </button>

                    </div>
                );
            })}

            {/* المجموع الكلي يظهر في النهاية فقط إذا كانت السلة تحتوي على منتجات */}
            {cart.length > 0 ? (
                <div style={{ marginTop: "20px", fontWeight: "bold", fontSize: "1.2rem" }}>
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;