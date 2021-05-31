import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/content";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//import './App.css';

function App() {
  return (
    <div className="container">
        <Header name = {"reham"} />

        <Content   />


        <Footer />
      </div>
  );
}

export default App;
