import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Services from './pages/Services';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/main.scss';
import MainDish from './components/subpages/MainDish';
import Drinks from './components/subpages/Drinks';
import Desserts from './components/subpages/Desserts';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />}>
          <Route index element={<MainDish />} />
          <Route path="drinks" element={<Drinks />} />
          <Route path="desserts" element={<Desserts />} />
        </Route>
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
