import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProductList from './components/productList';
import ProductDetail from './components/productDetail';
import AddProduct from './components/addProduct';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  const add = (product) => {
    setProducts((p) => [...p, {...product}])
  } 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productlist' element={<ProductList products={products}/>}/>
          <Route path='/productdetail/:id' element={<ProductDetail products={products}/>}/>
          <Route path='/addproduct' element={<AddProduct add={add}/>}/>
          <Route path='*' element={<h1>404 Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;