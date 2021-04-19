// import logo from './logo.svg';
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./App/Component/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./App/Component/ProductListing/ProductListing";
import ProductDetails from "./App/Component/ProductDetails/ProductDetails";

/* 
* @function App
*/
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/Product/:ProductId" exact component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
