import React from 'react';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AdminLog from './components/AdminLog';
import AllProducts from './components/AllProducts';
import Table1 from './components/Table1';
import Form1 from './components/Form1';
import ProductsDisplay from './components/ProductsDisplay';

  
function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Switch>
        <Route path='/admin' exact component={AdminLog} />
      </Switch>
      <Switch>
        <Route path='/allProducts' exact component={AllProducts} />
      </Switch>
      <Switch>
        <Route path='/allProductsForm' exact component={Form1} />
      </Switch>
      <Switch>
        <Route path='/Laptops' exact component={ProductsDisplay} />
      </Switch>
    </Router>
  );
}
  
export default App;

