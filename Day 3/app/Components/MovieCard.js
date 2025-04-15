import React from "react";

const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="p-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-400">{release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
