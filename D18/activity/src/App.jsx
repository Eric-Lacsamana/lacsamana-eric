import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Products from './pages/Products';

// import ProductDetailsModal from './components/ProductDetailsModal';



function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/search" element={<Search />} /> */}
        <Route path="/products" element={<Products />} >
          {/* <Route path="/:id" element={<ProductDetailsModal />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;