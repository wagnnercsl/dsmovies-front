import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieForm from './pages/MovieForm';
import MovieList from './pages/MovieList';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/form" element={<MovieForm />} />
          <Route path=":movieId" element={<MovieForm />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
