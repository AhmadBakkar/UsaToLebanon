
import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

 




  return (
    <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <Product></Product>
    </Container>
  );
};

export default Products;



