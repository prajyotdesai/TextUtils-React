import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
 
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
 

 
function App() {
   const[alert,setAlert]=useState(null);

   const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })

      setTimeout(() => {
        setAlert(null);
      },1500);
   }


  return (
    <>
    {/* <Router>  */}
    <Navbar title="TextUtils" aboutText="About Us" />
    <Alert alert={alert}/>
     
    <div className="container my-3">
      {/* <Switch> */}
            {/* <Route path="/about">
              <About />
            </Route> */}
            {/* <Route path="/"> */}
             <TextForm  showAlert={showAlert} heading="Enter Your Text Here"/>
            {/* </Route> */}
           
     {/* </Switch> */}
           
     </div>
     {/* </Router> */}
    
      
     
    </>
  );
}

export default App;
