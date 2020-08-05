import React from "react";
import {Route} from "react-router-dom";
import "./App.css";
import "./Newp.css";
import "./Main.css"; 
import logo from "./assets/logo.png";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Features from "./pages/Features";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Navbar from "./Navbar";

function App() {
  return (
    <section className="logo">
      <switch>
      <Navbar />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={Faq} />
      <Route path="/features" component={Features} />
      <Route path="/gallery" component={Gallery} />
      </switch>
      
    </section>
  );
}

export default App;
