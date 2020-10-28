import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/navBar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from "./components/catalog/catalog";
import Todo from "./components/todo/toDo";

import { BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar></NavBar>

    <div className="container-fluid">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/catalog" exact component={Catalog}></Route>
        <Route path="/todo" exact component={Todo}></Route>
        <Route path="/about" exact component={About}></Route>
       </Switch>
      </div>

      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
