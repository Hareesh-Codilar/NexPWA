import "./App.css";
import Header from "./App/Component/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./App/Component/ProductListing/ProductListing";
import ProductDetails from "./App/Component/ProductDetails/ProductDetails";
import Home from "./App/Component/home/Home";

/* 
* @function App
*/
function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ProductListing/:catId" exact component={ProductListing} />
          <Route path="/Product/:ProductId" exact component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
