import React from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navigation from "./components/Navigation";
import  "./fontawesome/css/all.min.css"

const App = () => {
  return (
    <div>
      <Router>
        <SnackbarProvider
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </SnackbarProvider>
      </Router>
    </div>
  );
};

export default App;
