import React from 'react';
import Header from './Component/Header';
import Carousel from './Component/Carousel';
import BlogList from './Component/BlogList';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <BlogList />
      <Footer />
    </div>
  );
};

export default App;
