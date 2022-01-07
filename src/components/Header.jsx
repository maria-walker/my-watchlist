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
		<nav
			class="navbar navbar-expand-lg navbar-dark bg-primary"
			style={{ color: "#fff" }}
		>
			<div className="container">
				<div className="row" style={{ width: "100%" }}>
					<div className="col-md-4">
						<Link
							to="/"
							style={{ textDecoration: "none" }}
							onClick={() => setSearchText("")}
						>
							<h3 style={{ color: "#fff" }}>Films & TV Shows</h3>
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
		</nav>
	);
};

export default Header;
