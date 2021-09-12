import React from "react";
import CartItem from './CartItem';
import {useEffect, useState} from 'react';
import LandingPage from "./LandingPage";

function Card(props) {

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
