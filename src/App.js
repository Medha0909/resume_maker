import React, { useState } from "react";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Details from "./Components/Details";
import Alert from "./Components/Alert";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route
  } from "react-router-dom";
  
  

function App()
{
  const [alert,setAlert]=useState(null);

const showAlert = (message,type)=>{
  setAlert({
    msg: message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },2000);
}

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home showAlert={showAlert} />} />
        <Route path="register" element={<Register showAlert={showAlert} />} />
        <Route path="login" element={<Login showAlert={showAlert} />} />
        <Route path="resume" element={<Details showAlert={showAlert}/>} />
      </Route>
    )
  );

    return(
    <div>
        <RouterProvider router={router} />
        <Alert alert={alert} />
    </div>
    );
}
export default App;
