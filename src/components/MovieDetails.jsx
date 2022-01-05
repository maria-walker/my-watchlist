import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";

const MovieDetails = ({ movie, setMovie, watchlist, setWatchlist }) => {
	const [added, setAdded] = useState(false);
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
			});
	}, [sText]);

	return (
		<div className="row" style={{ textAlign: "left" }}>
			{" "}
			<div className="col-md-4">
				<img
					src={movie.Poster}
					alt={movie.Title}
					className="img img-thumbnail"
				/>
			</div>
			<div className="col-md-8">
				<h2>{movie.Title}</h2>
				<p>
					{movie.Year} | {movie.Rated} | {movie.Runtime} | {movie.Country}
				</p>
				<p>{movie.Genre} </p>
				{/* <button type="button" class="btn btn-primary">
					Primary
				</button> */}

				<button
					type="button"
					className="btn btn-info"
					onClick={() => {
						let newList;
						if (!added) {
							newList = watchlist;

							newList.push({ movie });
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
					{!added ? "+ Add to my watchlist" : "Remove from watchlist"}
				</button>
				<br />
				<br />
				<p>{movie.Plot} </p>
				<table className="table">
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
