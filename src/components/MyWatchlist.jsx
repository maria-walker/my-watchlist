import React from "react";

const MyWatchlist = ({ watchlist, setWatchlist, saveToLS }) => {
	console.log(watchlist, "watchlist in watchlist");
	console.log(watchlist[0], "watchlist in watchlist");

	return watchlist[0] ? (
		watchlist.map((myMovie, index) => {
			return (
				<div key={index} className="details-card">
					<div style={{ minWidth: "160px", display: "flex" }}>
						<img
							className="details-poster"
							src={myMovie.movie.Poster}
							alt="poster"
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
								<h5 className="details-title">{myMovie.movie.Title}</h5>
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

							<p style={{ marginBottom: "5px" }} className="details-year">
								{" "}
								{myMovie.movie.Year}
							</p>

							<p className="details-plot"> {myMovie.movie.Plot}</p>
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
