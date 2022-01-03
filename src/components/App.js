import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Links } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import Home from "./Home";

import MovieDetails from "./MovieDetails";
import MovieList from "./MovieList";
import MyWatchlist from "./MyWatchlist";

//const watchlistItems = [];
const watchlistItems = getFromLS("watchlist") ? getFromLS("watchlist") : [];

function App() {
	const [searchText, setSearchText] = useState("");
	const [movies, setMovies] = useState([]);
	const [movie, setMovie] = useState({});
	// const [watchlist, setWatchlist] = useState([]);
	const [watchlist, setWatchlist] = useState(watchlistItems);
	return (
		<BrowserRouter>
			<div className="App">
				<Header searchText={searchText} setSearchText={setSearchText} />
				{/* <Home /> */}
				<div className="container">
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route
							path="/movies"
							element={
								<MovieList
									searchText={searchText}
									movies={movies}
									setMovies={setMovies}
								/>
							}
						/>
						<Route
							path="/details"
							element={
								<MovieDetails
									searchText={searchText}
									movie={movie}
									setMovie={setMovie}
									watchlist={watchlist}
									setWatchlist={setWatchlist}
								/>
							}
						/>
						<Route
							path="/watchlist"
							element={<MyWatchlist watchlist={watchlist} />}
						/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

function getFromLS(key) {
	let ls = {};
	if (global.localStorage) {
		try {
			ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
		} catch (e) {}
	}
	return ls[key];
}
