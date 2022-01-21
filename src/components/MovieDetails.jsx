import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";

const MovieDetails = ({ movie, setMovie, watchlist, setWatchlist }) => {
	const [added, setAdded] = useState(false);
	const [loading, setLoading] = useState(true);
	const omdbApi = axios.create({
		baseURL: "https://www.omdbapi.com/",
	});
	console.log(watchlist, "watchlist in movie details");

	const sText = useLocation().search.slice(
		useLocation().search.indexOf("=") + 1
	);
	console.log(sText);

	useEffect(() => {
		omdbApi
			.get("/", {
				params: {
					apikey: "18275a44",
					i: sText,
				},
			})
			.then((movieDetails) => {
				console.log(movieDetails);
				setMovie(movieDetails.data);
				setLoading(false);
			});
	}, [sText]);

	console.log(watchlist);
	console.log(movie.imdbID);
	console.log(
		watchlist.filter((myMovie) => myMovie.movie.imdbID === movie.imdbID).length
	);

	return loading ? (
		<div>
			<div class="spinner-border text-success" role="status"></div>
			<p class="text-success">Loading...</p>
		</div>
	) : (
		<div
			className="row"
			style={{
				textAlign: "left",
				height: "100%",
				width: "100%",
				backgroundColor: "#000",
			}}
		>
			{" "}
			<div className="col-md-4 col-sm-12 col-12">
				<img
					id="details-poster"
					src={movie.Poster}
					alt={movie.Title}
					className="img img-thumbnail"
				/>
			</div>
			<div id="movie-details" className="col-md-8 col-sm-12 col-12">
				<h2 id="details-title">{movie.Title}</h2>
				<p>
					{movie.Year} | {movie.Rated} | {movie.Runtime} | {movie.Country}
				</p>
				<p>{movie.Genre} </p>

				<button
					type="button"
					className="btn btn-info"
					onClick={() => {
						let newList;
						if (
							!watchlist.filter(
								(myMovie) => myMovie.movie.imdbID === movie.imdbID
							).length
						) {
							newList = watchlist;

							newList.unshift({ movie });
							saveToLS("watchlist", newList);
							setWatchlist(newList);
							setAdded(!added);
						} else {
							newList = watchlist.filter(
								(film) => film.movie.imdbID !== movie.imdbID
							);
							console.log(newList, "filtered in Movie Details");
							saveToLS("watchlist", newList);
							setWatchlist(newList);
							setAdded(!added);
						}
					}}
				>
					{!watchlist.filter((myMovie) => myMovie.movie.imdbID === movie.imdbID)
						.length
						? "+ Add to my watchlist"
						: "Remove from watchlist"}
				</button>
				<br />
				<br />
				<p>{movie.Plot} </p>
				<table className="table" style={{ color: "#fafafa" }}>
					<tbody>
						<tr>
							<td>Director</td>
							<td>{movie.Director}</td>
						</tr>
						<tr>
							<td>Writer</td>
							<td>{movie.Writer}</td>
						</tr>
						<tr>
							<td>Stars</td>
							<td>{movie.Actors}</td>
						</tr>
						<tr>
							<td>Ratings</td>
							<td>
								{/* IMDb: {movie.imdbRating} |{" "} */}
								{movie.Ratings &&
									movie.Ratings.map((rating, i) => {
										return <p key={i}>{rating.Source + ": " + rating.Value}</p>;
									})}{" "}
							</td>
						</tr>
						<tr>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MovieDetails;

function getFromLS(key) {
	let ls = {};
	if (global.localStorage) {
		try {
			ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
		} catch (e) {}
	}
	return ls[key];
}

function saveToLS(key, value) {
	if (global.localStorage) {
		global.localStorage.setItem(
			"rgl-8",
			JSON.stringify({
				[key]: value,
			})
		);
	}
}
