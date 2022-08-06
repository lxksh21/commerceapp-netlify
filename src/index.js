import ReactDom from 'react-dom';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import React from 'react';
import Checkout from './components/Checkout'
import './index.css';
import App from './App';

// ReactDom.render(<App />,document.getElementById('root'))

const root = ReactDom.createRoot(
    document.getElementById("root")
  );
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
  );