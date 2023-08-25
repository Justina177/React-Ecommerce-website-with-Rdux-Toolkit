import './App.scss';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import { Cart, Home } from './pages';
import CategoryPage from './pages/categoryPage/CategoryPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/category/:id" element = {<CategoryPage />} />
          <Route path = "/cart" element = {<Cart />} />
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
