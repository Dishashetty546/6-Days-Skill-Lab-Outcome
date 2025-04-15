import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchTrending = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );
    setMovies(res.data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">🔥 Trending Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
