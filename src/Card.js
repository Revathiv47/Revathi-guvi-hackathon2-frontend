import React from "react";
import CartItem from './CartItem';
import {useEffect, useState} from 'react';
import LandingPage from "./LandingPage";

function Card(props) {

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
	
  return (
    <>
    <div class="col-sm-6 col-md-4 col-lg-4 mt-2">
      <div class="card card-inverse card-info">
        <img class="card-img-top" src={props.data.image} />
        <div class="card-block">

        <h4 class="card-title">{props.data.Categeory}</h4>
        <div class="card-text">{props.data.description}
        </div>
      </div>
      <div class="card-footer">
        <button class="btn btn-info float-right btn-sm" onClick ={() => {props.handleCart(props.data.id)}}>Add to card</button>
      </div>
    </div>
    </div>
    </>

  );
}
export default Card;
