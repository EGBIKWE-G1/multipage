import React from "react";
import { Route } from "react-router-dom";
// import "./App.css";
// import "./Newp.css";
// import "./Main.css";
import logo from "../assets/logo.png";
import Header from "../Header";
import Aboutus from "../Aboutus";
import Features from "../OurFeatures";
import Testimonials from "../Testimonials";
import Client from "../Client";
import OurGallery from "../OurGallery";
import Store from "../Store";
import Price from "../Price";
import Frequently from "../Frequently";
import Contactus from "../Contactus";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Home() {
  return (
    <section className="logo">
      <Navbar />
      <Header />
      <Aboutus />
      <Features />
      <Testimonials />
      <Client />
      <OurGallery />
      <Store />
      <Price />
      <Frequently />
      <Contactus />
      <Footer />
    </section>
  );
}

export default Home;
