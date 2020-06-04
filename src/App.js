import React,{Component} from 'react';
import './App.css';
import Zipcode from "./components/Zipcode";
import axios from "axios";


class App extends Component{
  render(){
  return (
    <div className="App">
      <h1>reactjs with APIs</h1>
     <Zipcode code="10016"/>
    </div>
  );
  }
}

export default App;
