import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Catalog } from './pages/Catalog';
import { Details } from './pages/Details';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<Details />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
