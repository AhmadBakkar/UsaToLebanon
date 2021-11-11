

import styled from "styled-components";
import Product from "./Product";




const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = (props) => {


  return (
    <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <div className="row">
      <Product></Product>   
      </div>
    </Container>
  );
};

export default Products;



