import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import "@splidejs/react-splide/css";
import React from "react";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </main>
  );
};

export default Layout;
