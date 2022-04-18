import React, { useState, useEffect } from 'react';
import MoviesGallery from '../components/MoviesGallery';
import * as moviesAPI from '../services/moviesAPI';

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function fetchTrends() {
      try {
        const response = await moviesAPI.getTrandingMovies();
        setTrends([...response.results]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchTrends();
  }, []);

  return (
    <>
      <h1>Trending day</h1>
      {trends.length > 0 && <MoviesGallery items={trends} />}
    </>
  );
};

export default HomePage;
