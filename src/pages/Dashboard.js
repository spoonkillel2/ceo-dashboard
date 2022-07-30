import React, { useState, useEffect, setSession } from "react";
import { auth, logOut } from "../firebase";
import { initializeApp } from "firebase/app";



const Dashboard = () => {
  
  return (
    <div>
      Dashboard
      <button type="button" > Logout </button>
    </div>
  );
};

export default Dashboard;
