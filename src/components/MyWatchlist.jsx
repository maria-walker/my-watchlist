import React from "react";

const MyWatchlist = ({ watchlist, setWatchlist, saveToLS }) => {
	console.log(watchlist, "watchlist in watchlist");
	console.log(watchlist[0], "watchlist in watchlist");

	return watchlist[0] ? (
		watchlist.map((myMovie, index) => {
			return (
				<div
					key={index}
					style={{
						backgroundColor: "teal",
						borderRadius: 3,
						height: 160,
						width: "85%",
						margin: "10px auto",
						display: "flex",
						//justifyContent: "space-between",
					}}
				>
					<div>
						<img
							className="details-poster"
							src={myMovie.movie.Poster}
							alt="poster"
						/>
					</div>
					<div style={{ textAlign: "left" }}>
						<div style={{ margin: "10px 10px" }}>
							<div style={{ display: "flex", justifyContent: "space-between" }}>
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
									Remove from watchlist
								</button>
							</div>

							<p className="details-year"> {myMovie.movie.Year}</p>
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
