import React from 'react';
import SearchForm from '../components/SearchForm';
import MoviesGallery from '../components/MoviesGallery';

const MoviesPage = () => {
  return (
    <>
      <SearchForm />
      <MoviesGallery />
    </>
  );
};

export default MoviesPage;
