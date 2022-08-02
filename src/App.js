import React, {useState, useEffect} from "react";
import Header from "./Header";
import News from "./News";
import Footer from "./Footer";
import './App.css';


function App() {
  return (
    <div className="App">
        <Header/>
        <News/>
        <Footer/>
    </div>
  );
}

export default App;
