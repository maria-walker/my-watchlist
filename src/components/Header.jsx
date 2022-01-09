import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Header = ({ searchText, setSearchText }) => {
	const navigate = useNavigate();
	const location = useLocation().pathname;
	const inWatchlist = location === "/watchlist";
	console.log(location, inWatchlist);

	const searchHandler = (e) => {
		setSearchText(e.target.value);
		navigate(
			"/movies?search=" + e.target.value.replace(/ /g, "+").replace(/'/g, "%27")
		);
	};

	return (
		<header
			className="navbar navbar-expand-lg navbar-dark "
			style={{ color: "#fff", backgroundColor: "#000 !important" }}
		>
			<div className="container">
				<div className="row" style={{ width: "100%", display: "flex" }}>
					<div className="col-md-1 d-none d-md-block"></div>
					<div className="col-md-2 col-sm-2 col-2">
						<Link
							to="/"
							style={{ textDecoration: "none" }}
							onClick={() => setSearchText("")}
						>
							<img
								src="../../favicon.ico"
								alt="app logo"
								height="60"
								style={{ marginTop: "-3px", marginLeft: "30%" }}
							/>
						</Link>
					</div>

					{/* <div
						className="col-md-2 col-sm-2 col-2"
						style={inWatchlist ? { display: "block" } : { display: "none" }}
					>
						<Link
							to="/"
							style={{ textDecoration: "none" }}
							onClick={() => setSearchText("")}
						>
							<img
								//className="app-logo"
								src="../../favicon.ico"
								alt="app logo"
								height="60"
								style={{ marginTop: "-3px", marginLeft: "30%" }}
							/>
						</Link>
					</div> */}

					<div
						className={
							!inWatchlist
								? "col-md-6 col-sm-7 col-7"
								: "col-md-6 col-sm-10 col-10"
						}
					>
						<form
							onSubmit={(e) => {
								e.preventDefault();
							}}
						>
							<input
								type="search"
								placeholder="Start typing to search..."
								className="form-control"
								value={searchText}
								onChange={searchHandler}
								style={{ marginLeft: 13 }}
							/>
						</form>
					</div>
					<div
						className="col-md-2 col-sm-3 col-3"
						style={!inWatchlist ? { display: "block" } : { display: "none" }}
					>
						<Link to="watchlist" onClick={() => setSearchText("")}>
							<button type="button" className="btn btn-success">
								My List
							</button>
						</Link>
					</div>

					<div className="col-md-1"></div>
				</div>
			</div>
		</header>
	);
};

export default Header;
