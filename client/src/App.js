import React from 'react'
import { Router } from '@reach/router'
import Main from './views/Main'
import ProductDetail from './views/ProductDetail'
import ProductUpdate from './views/ProductUpdate'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <ProductDetail path="/:id"/>
        <ProductUpdate path="/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
