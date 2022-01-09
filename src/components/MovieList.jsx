import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "./MovieCard";
import axios from "axios";

const MovieList = ({ searchText, setSearchText, movies, setMovies }) => {
	const omdbApi = axios.create({
		baseURL: "https://www.omdbapi.com/",
	});

	console.log(useLocation());

	const sText = useLocation().search.slice(
		useLocation().search.indexOf("=") + 1
	);
	console.log(sText);

	useEffect(() => {
		omdbApi
			.get("/", {
				params: {
					apikey: "18275a44",
					s: sText.replace(/%27/g, "'") + "*",
				},
			})
			.then((searchResults) => {
				console.log(searchResults);
				setMovies(searchResults.data.Search);
			});
	}, [searchText]);

	return (
		<div className="row" style={{ height: "100%", backgroundColor: "#000" }}>
			{movies &&
				movies.map((movie, index) => (
					<MovieCard movie={movie} key={index} setSearchText={setSearchText} />
				))}
		</div>
	);
};

export default MovieList;
