import React, { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data.js"
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book])
  }

  useEffect(() => {console.log(cart);}, [cart])

  return (
    <div className="App">
      <Router>
        <Nav />
          <Routes>
            <Route path="/" exact element = {<Home />} />
            <Route path="/books" exact element = {<Books books={books} />} />
            <Route path="/books/:id" element = {<BookInfo books={books} addToCart={addToCart} />} />
            <Route path="/cart" element = {<Cart books={books} />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
