import React from 'react'
import {useEffect, useState} from 'react';
import CartItem from './CartItem';
import LandingPage from "./LandingPage";
function CardList() {
    
  const [products, setProduct] = useState([
    {
    id: 1,
    Categeory: "Camera",
    title: "Tissot Watch",
    description: "Canon EOS R Mirrorless Digital Camera with 24-105mm f/4L Lens",
    price: 2000,
    image:
    "https://www.bhphotovideo.com/images/images1000x1000/canon_eos_r_mirrorless_digital_1433711.jpg"},
    {
    id: 2,
    Categeory: "Tripod",
    title: "Casio Watch",
    description: "Manfrotto PIXI Mini Table Top Tripod (Black)",
    price: 4000,
    image:
      "https://heavy.com/wp-content/uploads/2014/06/reticam-mini-tripod-mini-camera-stand-small-tripod-travel-tripod.jpg?quality=65&strip=allhttps://heavy.com/wp-content/uploads/2014/06/reticam-mini-tripod-mini-camera-stand-small-tripod-travel-tripod.jpg?quality=65&strip=all",
    },
    {
    id: 3,
    Categeory: "Camera Bag",
    title: "Tissot Watch",
    description: "DSLR Backpack Camera Bag, Lens Accessories Carry Case (Blue)",
    price: 3500,
    image:
      "https://m.media-amazon.com/images/I/41XO5mf8BuL._SY355_.jpg",
    },
    {
    id: 1,
    Categeory: "Camera Stand",
    title: "Tissot Watch",
    description: "Canon EOS R Mirrorless Digital Camera with 24-105mm f/4L Lens",
    price: 2000,
    image:
    "https://m.media-amazon.com/images/I/31RZVb4JmrL.jpg"},
    {
      id: 1,
      Categeory: "Camera Bag",
      title: "Tissot Watch",
      description: "Canon EOS R Mirrorless Digital Camera with 24-105mm f/4L Lens",
      price: 2000,
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBEzXty8eb48S1pNEMWDTfj3lWdmRIr-Na5Q&usqp=CAU"},
      {
        id: 1,
        Categeory: "Camera Lens",
        title: "Tissot Watch",
        description: "Canon EOS R Mirrorless Digital Camera with 24-105mm f/4L Lens",
        price: 2000,
        image:
        "https://m.media-amazon.com/images/I/51gHFlAeyrL._AC_SY355_.jpg"},
        
  ]);
  
  const [cartItems, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);
  let addToCart = (id) => {
    let product = products.find((obj) => obj.id == id);
    setCartItem([...cartItems, product]);
    setTotal(total + product.price);
  };

  let removeItems = (id) => {
    let product = products.find((obj) => obj.id == id);
    setTotal(total - product.price);
    cartItems.splice(product, 1);
    setCartItem([...cartItems]);
  };

  let removeItem = (id) => {
    let result = window.confirm("Are you sure do you want to remove?");
    if (result) {
      let cartIndex = cartItems.findIndex((obj) => obj.id == id);
      setTotal(total - cartItems[cartIndex].price);
      cartItems.splice(cartIndex, 1);
      setCartItem([...cartItems]);
    }
  };
  
    return (
      <>
        <div className="container" style={{ marginTop: "70px" }}>
          <div className="row">
            <div className="col-lg-8"></div>
            <div className="col-lg-4">
              <ol class="list-group list-group-numbered">
                {cartItems.length == 0 ? <h3>No items in cart</h3> : null}
                {cartItems.map((item) => {
                  return (
                    <CartItem
                      handleRemove={removeItem}
                      data={item}
                      handleRemove={removeItem}
                      handleCart={addToCart}
                    />
                  );
                })}

                <h1>Total - Rs {total}</h1>
                <input class="btn btn-success btn-lg float-right" type="button" value="checkout" />
   
              </ol>
            </div>
          </div>
        </div>
       
    </>
    )
}

export default CardList
