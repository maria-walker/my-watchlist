import React from "react";

const Home = () => (
	<div
		className="row"
		style={{
			//	width: "100vw", height: "100vh", alignSelf: "left",
			backgroundColor: "#000",
			margin: 0,
		}}
	>
		<div className="col-md-3 col-xs-12"></div>
		<div className="col-md-6 col-xs-12 ">
			{/* /<p>Browse films and TV shows and add them to your watchlist</p> */}
			<img
				src="/images/movie-icon.png"
				alt="The watchlist app. Browse films and TV shows and add them to your watchlist"
				className="img img-thumbnail"
				style={{ border: "none", width: "90wv", margin: "5px auto" }}
			/>
		</div>
		<div className="col-md-3 col-xs-12"></div>
	</div>
);

export default Home;
