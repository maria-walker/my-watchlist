import React from "react";
import { useNavigate } from "react-router-dom";

const MyWatchlist = ({ watchlist, setWatchlist, saveToLS }) => {
	console.log(watchlist, "watchlist in watchlist");
	console.log(watchlist[0], "watchlist in watchlist");

	const navigate = useNavigate();

	const getMovieDetails = (imdbID) => {
		navigate("/details?imdbID=" + imdbID);
	};

	return watchlist[0] ? (
		watchlist.map((myMovie, index) => {
			return (
				<div key={index} className="watchlist-card">
					<div
						onClick={() => {
							getMovieDetails(myMovie.movie.imdbID);
						}}
						style={{ minWidth: "135px", display: "flex" }}
					>
						<img
							className="watchlist-poster"
							src={myMovie.movie.Poster}
							alt={myMovie.movie.Title + " poster"}
						/>
					</div>
					<div style={{ textAlign: "left", width: "100%" }}>
						<div style={{ margin: "10px 10px" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									width: "100%",
								}}
							>
								<h5
									className="watchlist-title"
									onClick={() => {
										getMovieDetails(myMovie.movie.imdbID);
									}}
								>
									{myMovie.movie.Title}
								</h5>
								<button
									type="button"
									className="btn btn-secondary"
									onClick={() => {
										const newList = watchlist.filter(
											(film) => film.movie.imdbID !== myMovie.movie.imdbID
										);

										saveToLS("watchlist", newList);
										setWatchlist(newList);
									}}
								>
									Unsave
								</button>
							</div>

							<p
								style={{ marginBottom: "5px" }}
								className="watchlist-year"
								onClick={() => {
									getMovieDetails(myMovie.movie.imdbID);
								}}
							>
								{" "}
								{myMovie.movie.Year}
							</p>

							<p
								className="watchlist-plot"
								onClick={() => {
									getMovieDetails(myMovie.movie.imdbID);
								}}
							>
								{" "}
								{myMovie.movie.Plot}
							</p>
						</div>
					</div>
				</div>
			);
		})
	) : (
		<>
			<p>You have nothing on your watchlist yet. </p>
			<p>Please search for movies or TV shows and add them to your list.</p>
		</>
	);
};

export default MyWatchlist;
