import React from 'react';
import './design.css';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';

import {Products,Shoes,SingleProduct} from './components/product';


function Home(){
  return<div className='mid'>
      <h1>Home</h1>
  </div>
}
function Nothing(){
  return<h1>Not Found</h1>
}


function App() {
  return (
    <Router>
    <div className='nav'>
      <Link className='option' to='/home'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className='option' to='/products'>Products</Link>
    </div>
    
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route  path= '/products' element={<Products/>}>
        <Route path='/' element={<Shoes/>}/>
        <Route path=':label' element={<SingleProduct/>}/>
      </Route>
      <Route path='*' element={<Nothing/>}/>
    </Routes>
    
    
    
    </Router>
  );
}

export default App;
