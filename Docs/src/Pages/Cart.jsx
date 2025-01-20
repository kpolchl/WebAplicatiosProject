import 'react'; 
import { useCart } from '../Context/CartContext';
import axios from "axios";
import {useEffect, useState} from "react";
// import '../StyleSheets/cart.css';

function Cart() {
  const { cart, setCart } = useCart(); // Pobranie koszyka i funkcji do aktualizacji koszyka
  const [userId, setUserId] = useState('');

  useEffect(() => {
    let getUser = localStorage.getItem("user");
    if (getUser) {
      const parsedUser = JSON.parse(getUser);
      setUserId(parsedUser._id); // Set the user ID to state
    }
  },[])

  const handleRemoveFromCart = (productToRemove) => {
    const updatedCart = cart.filter((product) => product !== productToRemove);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  // Obliczanie całkowitej wartości koszyka
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  const handleOrder = () => {

    const cartItems = cart.map(item => item.title);
    let price = calculateTotal();
    if(price ==0.00){
      alert("dodaj coś do swojego koszyka")
      return;
    }

    axios.post("http://localhost:3000/orders/cart",{
      userId: userId,
      orderContents: cartItems,
      value: price,
    });

    alert("zamówienie złożone")

    setCart([]);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div style={{ margin: "80px 50px", display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {/* Sekcja produktów */}
      <div style={{ flex: 2, minWidth: '60%' }}>
        <h1>Koszyk</h1>
        <br />
        {cart.length === 0 ? (
          <div>Twój koszyk jest pusty.</div>
        ) : (
          cart.map((product, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                borderBottom: '1px solid gray',
                padding: '10px 0',
                marginBottom: '10px',
                alignItems: 'center',
              }}
            >
              {/* Obrazek produktu po lewej stronie */}
              <div style={{ width: '200px', height: '200px', marginRight: '20px' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '10px',
                  }}
                />
              </div>

              {/* Treść produktu obok obrazka */}
              <div style={{ flex: 1 }}>
                <h3>{product.title}</h3>
                <p><strong>Kategoria:</strong> {product.category}</p>
                <p><strong>Cena:</strong> ${product.price.toFixed(2)}</p>
                {/* Przycisk do usuwania produktu */}
                <button
                  onClick={() => handleRemoveFromCart(product)}
                  style={{
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    marginTop: '10px',
                  }}
                >
                  Usuń
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Sekcja z całkowitą wartością koszyka */}
      <div
        className="cart-summary"
        style={{
          flex: 1,
          minWidth: '300px',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          border: '1px solid #ddd',
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          height: 'fit-content',
        }}
      >
        <h2>Podsumowanie</h2>
        <p><strong>Łączna wartość:</strong> {calculateTotal()} $</p>
        <button onClick={handleOrder}
          style={{
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
          }}
        >
          Złóż zamówienie
        </button>
      </div>
    </div>
  );
}

export default Cart;
