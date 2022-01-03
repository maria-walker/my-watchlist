import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = ({ searchText, setSearchText }) => {
	let navigate = useNavigate();
	const submitHandler = (e) => {
		e.preventDefault();
		setSearchText(e.target.value);
		navigate("/movies?search=*" + searchText + "*");
	};

	return (
		<div className="alert alert-primary">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<Link
							to="/"
							style={{ textDecoration: "none" }}
							onClick={() => setSearchText("")}
						>
							<h3>Films & TV Shows</h3>
						</Link>
					</div>
					<div className="col-md-6">
						<form onSubmit={submitHandler}>
							<input
								type="search"
								placeholder="Search..."
								className="form-control"
								value={searchText}
								onChange={(e) => {
									//e.preventDefault();
									setSearchText(e.target.value);
									navigate(
										"/movies?search=" +
											e.target.value.replace(/ /g, "+").replace(/'/g, "%27")
									);
								}}
							/>
						</form>
					</div>
					<div className="col-md-2">
						<Link to="watchlist">
							<button type="button" className="btn btn-success">
								My Watchlist
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
