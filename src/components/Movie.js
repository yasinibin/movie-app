import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const Movie = ({ item }) => (
  <div className="movie">
    <img
      src={
        item.poster_path
          ? IMG_API + item.poster_path
          : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfawQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
      }
      alt={item.title}
    />
    <div className="movie-info">
      <h3>{item.title}</h3>
      <span className={`tag ${setVoteClass(item.vote_average)}`}>
        {item.vote_average}
      </span>
    </div>

    <div className="movie-over">
      <h2>Overview:</h2>
      <p>{item.overview}</p>
    </div>
  </div>
);
export default Movie;
