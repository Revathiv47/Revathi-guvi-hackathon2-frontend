import logo from "./logo.svg";
import "./App.css";
import "./portal.css";
import LandingPage from "./LandingPage";
import Card from './Card';
import Filter from './Filter';
import CartItem from './CartItem';
import CardList from "./CardList";



import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
  
function App() {
return (
	
      <Router>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div class="container-fluid">
              <Switch>
              
              <Route path="/" component={LandingPage} exact={true} />
              <Route path="/CardList" component={CardList} exact={true} />
			  
              
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>

);
}

export default App;
