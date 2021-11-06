
import { useEffect, useState } from "react";
import styled from "styled-components";

import Product from "./Product";
import axios from "axios";
import { Rowing } from "@material-ui/icons";

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
    <Container>
      <Product></Product>
    </Container>
  );
};

export default Products;



