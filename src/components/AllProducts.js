import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";
import Table1 from './Table1';
import './AllProducts.css';
//import { deleteUser, getAll, update } from './api/api';

 
const AllProducts = () => {

  const [greeting, setGreeting] = useState("Hello functional component");
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    id: '',
    name: '',
    username: '',
    password: '',
    occupation: '',
    hobby: '',
  })

  
  
  
 
  return (
    <div className="container">
      <div className="space">
      <Link to="/allProductsForm" >Manage Products</Link>
        </div>
        
        <Table1></Table1>
      
      </div>
  );
};
 

 
export default AllProducts;