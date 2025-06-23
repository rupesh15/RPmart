import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hook";
import { getProducts } from "../network/product";

const LandingScreen: React.FC = () => {
     const [logout, handlelogout] = useState(false);
     const navigate = useNavigate();
     const dispatch = useAppDispatch();

     useEffect(() => {
        if (logout) {
            navigate("/login");
        }
     }, [logout]);

     useEffect(() => {
      dispatch(getProducts());
     },[]);

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>Welcome to RPMart</h1>
        <p>Your one-stop shop for all your needs.</p>
        <button onClick={() => handlelogout(true)}>Logout</button>    
        </div>
    );
 }

 export default LandingScreen;
