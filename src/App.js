import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/MainContentComponents/Home';
import PageProduct from './components/PageProduct';

import './styles/style.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<PageProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
