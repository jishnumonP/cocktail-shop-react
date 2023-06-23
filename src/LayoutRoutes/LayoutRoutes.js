import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import SingleCocktail from '../pages/CocktailDetails/SingleCocktail';
import Error from '../pages/Error/Error';
// import components
import Navbar from '../components/NavBar/Navbar';
function LayoutRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cocktail-shop-react' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default LayoutRoutes;
