import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, setSearchText }) => {
	const navigate = useNavigate();

	const getMovieDetails = (imdbID) => {
		navigate("/details?imdbID=" + imdbID);
	};

	return (
		<div className="col-md-3 col-sm-6 col-6">
			<div
				className="card"
				onClick={() => {
					getMovieDetails(movie.imdbID);
					setSearchText("");
				}}
				style={{ marginBottom: 10 }}
			>
				<img
					src={movie.Poster}
					className="card-img-top"
					alt={movie.Title}
					//style={{ height: 200 }}
				/>
				<div className="card-body">
					<h5 className="card-title">{movie.Title}</h5>
					<p className="card-text">{movie.Year}</p>
					{/* <a href="#" className="btn btn-primary">
						Go somewhere
					</a> */}
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
