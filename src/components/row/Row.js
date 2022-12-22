import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Row.css";
import Card from "../card/Card";
function Row(props) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => { // async is used make await work adn axios gives time promise (it gets data for us)
    const response = await axios.get(props.url);
    setMovies(response.data.results);
    console.log(response.data.results);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="row_wrapper">
      <h3 className="row_title">{props.title}</h3>
      <div className='row_card'>
        {movies.map((movie) => {
           return <Card title={movie.title} poster={movie.poster_path} id={movie.id}/>;
        })}
      </div>
    </div>
  );
}
export default Row;
