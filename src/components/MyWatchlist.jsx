import React from "react";

const MyWatchlist = ({ watchlist }) => {
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
						height: 150,
						width: "85%",
						margin: "10px auto",
						display: "flex",
						//justifyContent: "space-between",
					}}
				>
					<div>
						<img
							src={myMovie.movie.Poster}
							alt="poster"
							style={{ objectFit: "contain", height: 150 }}
						/>
					</div>
					<div style={{ textAlign: "left" }}>
						<div style={{ margin: "10px 10px" }}>
							<h5>{myMovie.movie.Title}</h5>
							<p> {myMovie.movie.Year}</p>
							<p> {myMovie.movie.Plot}</p>
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
