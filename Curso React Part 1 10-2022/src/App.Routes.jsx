import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Exemplos } from './pages/Exemplos';
import { Home } from './pages/Home';
import Posts from './pages/Posts';

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Exemplos />} />
        <Route path="/form" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
