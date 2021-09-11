import React from 'react'
import {useEffect, useState} from 'react';
import CartItem from './CartItem';
import LandingPage from "./LandingPage";
function CardList() {
    
    const [products,setProduct] = useState([
		{
			id : 1,
			Categeory:"Camera",
			title : "Tissot Watch",
			description : "STUNNER IN BLACK DIAL AND METAL WATCH",
			price : 2000,
			image : "https://www.tissotwatches.com/media/catalog/product/cache/aaadd316e453df5b08f7f4246fad1a9c/T/0/T063.409.16.058.00_SET.png"},
		  {
			id : 2,
			Categeory:"Tripod",
			title : "Casio Watch",
			description : "GAMIFY WATCH WITH SILVER AND GOLD DIAL",
			price : 4000,
			image : "https://4.imimg.com/data4/UW/CQ/MY-7608733/casio-watches-500x500.jpg" },
		  {
			id : 3,
			Categeory:"Camera Bag",
			title : "Tissot Watch",
			description : "RED DIAL DUAL TIME WATCH FOR WOMEN",
			price : 3500,
			image : "https://www.tissotwatches.com/media/home/hp_our_categories_touch.jpg"
			}
	])

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
              </ol>
            </div>
          </div>
        </div>
    
    )
}

export default CardList
