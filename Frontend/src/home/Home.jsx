import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import '../styles/Home.css'


function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <h1 className="titlw">Books</h1>
      <div className="books">
      <Cards/>
      <Cards/>
      <Cards/>
      </div>
      <div className="books">
      <Cards/>
      <Cards/>
      <Cards/>
      </div>
      <Footer />
    </>
  );
}

export default Home;
