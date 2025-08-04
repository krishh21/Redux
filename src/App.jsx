import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => (
  <BrowserRouter>
    {/* <nav style={{ display: 'flex', gap: 10 }}>
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav> */}

     {/* <Link to="/" className="hover:underline">Home</Link>
      <Link to="/cart" className="hover:underline">Cart</Link> */}

      <Navbar />

   

    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
