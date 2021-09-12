import React from 'react'
import {useEffect, useState} from 'react';

function Filter(props) {
let Categeory = ["Camera", "Tripod", "Camera Bag", "Lenses", "Stand"];
let value;
const [Checked, setChecked] = useState([])
const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if(currentIndex === -1){
        newChecked.push(value)
    }else {
        newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
    props.handleFilters(newChecked)
}
    return (
        <div className="col-lg-3">
        <div class="card">
          <article class="card-group-item">
            <header class="card-header">
              <h6 class="title">Categeory </h6>
            </header>
            <div class="filter-content">
              <div class="card-body">
                <form>
                  {
                      Categeory.map((categories) => {
                        return <label class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          onChange={(event) => handleToggle(event.target.value)}
                          Checked={Checked.indexOf(value) === -1 ? false : true}

                        />
                        <span class="form-check-label">
                            {categories}
                        </span>
                      </label>

                      })
                  }
                </form>
              </div>
            </div>
          </article>

         
            
             
          
        </div>
        </div>

    )
}

export default Filter
