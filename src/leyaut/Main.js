import React, { Component, useEffect, useState } from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

function Main() {
  const [movies, setMovie] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect((type) => {
    fetch("https://www.omdbapi.com/?apikey=329ffa13&s=panda")
      .then((response) => response.json())
      .then((data) => {
        setLoader(false);
        setMovie(data.Search);
      });
  }, []);

  const SearchMovie = (str, type) => {
    setLoader(true)
    fetch(
      `https://www.omdbapi.com/?apikey=329ffa13&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
         setMovie(data.Search);
        setLoader(false);
      });
  };
  return (
    <div className=" content container ">
      <Search SearchMovie={SearchMovie} />

      {loader ? <Loader /> : <Movies movies={movies} />}
    </div>
  );
}

export default Main;
