import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AdminLog from './components/Admin/AdminLog';
import AllProducts from './components/Admin/AllProducts';
import Form1 from './components/Admin/Form1';
import ProductsDisplay from './components/Tablets/ProductsDisplay';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

  
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
      <Switch>
        <Route path='/checkout' exact component={Cart} />
      </Switch>
      <Footer/>
    </Router>
  );
}
  
export default App;

