import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from "react";
import { Component } from "react";
import axios from "axios";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

class Product extends Component {
  constructor(props) {
      super(props);
      this.state = { 
          search: '',
          items:[],          
       }
       this.setSearch = this.setSearch.bind(this);
  }

   
  setSearch(e) {
    this.setState({ search: e.target.value });
    e.preventDefault();
  }

  loadProducts = () =>{
    axios.get("http://localhost:3001/allRecord",{
    }).then((res) => {
        console.log(res);
        this.setState({items: res?.data});
}
)
};
  
  /**
   * This is the first method to be called.
   */
  componentDidMount(){
      
      this.loadProducts();
  }

  //onChange={e => {setSearchItem(e.target.value)}}

  render(){
  return (
    
    <ImageList sx={{ width: 1000, height: 800 }} >
      <div >
      <input style={{ height: 40 ,width:300}} type="text" placeholder="Search" value={this.state.search} onChange={this.setSearch}/>
      </div>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Laptops</ListSubheader>
      </ImageListItem>
      {this.state.items.filter((val) =>{
        if(this.state.search == ""){
        return val
      }else if(val.Description.toLowerCase().includes(this.state.search.toLowerCase())){
        return val
      }else if(val.Name.toLowerCase().includes(this.state.search.toLowerCase())){
        return val
      }else if(('' + val.Price).includes(this.state.search)){
        return val
      }
      }).map((val) => (
        <ImageListItem key={val.ImageSrc}>
          <img
            src={`${val.ImageSrc}?w=248&fit=crop&auto=format`}
            srcSet={`${val.ImageSrc}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={val.Name}
            loading="lazy"
          />
          <ImageListItemBar
            title={val.Name}
            subtitle={val.Description + "   " + val.Price +"\u0024"}
            
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${val.Price}`}
              >
                
          <ShoppingCartOutlined />
        
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}}

export default Product;

