
import './App.css';
import React from "react"
import imgs from './Hach.jpg'
import './style.css'

function App() {
  return ( 
    <div className="tri" style={{border:"solid 1px black", maxWidth:"100vw"}}>

    <h1 className="titleRed">KHALIL</h1>
  
  
    
   
    <img src={imgs} className="khl1"/>
   
    <br>
    </br>
    <img src="imageInPublic.jpg" className="khl2"/>
   
   <br>
   </br>
   
   <video width="320" height="240" controls>
   
    <source src="myVideo.mp4" type="video/mp4"/>
   
   </video>
   </div>

  );
}

export default App;