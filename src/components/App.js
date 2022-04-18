import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
