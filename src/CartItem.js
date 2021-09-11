import React from "react";
import LandingPage from "./LandingPage";
export default function CartItem(props){
    
    return (
         <> 
        <div className="block">    
        <ol class=" list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto" >
        <div class="fw-bold">{props.data.title}</div>
        Rs{props.data.price}
        </div>
        <span class="btn btn-outline-primary btn-sm" onClick ={() => {props.handleRemove(props.data.id)}}>-</span>
        <span class="btn btn-outline-primary btn-sm" onClick ={() => {props.handleCart(props.data.id)}}>+</span>

        </li>
        </ol>
        <div class="container">
        <div class="row">
          <form
            class="form-horizontal col-sm-7 col-sm-offset-2"
            action=""
            method="post"
          >
              <div className = "duration">
            <div class="row">
              <div className="col-sm-6">
                <h2>
                  <code>Start date</code>
                </h2>
                <input type="date" />
              </div>
              <div className="col-sm-6">
                <h2>
                  <code>End date</code>
                </h2>
                <input type="date" />
              </div>
            </div>
            <div class="row">
              <div className="col-sm-6">
                <h2>
                  <code>Start Time</code>
                </h2>
                <input type="time" />
              </div>
              <div className="col-sm-6">
                <h2>
                  <code>End Time</code>
                </h2>
                <input type="time" />
              </div>
            </div>
            </div> 

            
          </form>
      </div>
      </div>
      </div> 
        
        </>
  
    );
}

        