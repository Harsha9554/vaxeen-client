import { useEffect, useState } from "react";
import dateFormat from "dateformat";
import "../styles/Entry.css";
import { useHistory } from "react-router-dom";
import { DiReact } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

interface EntryProps {}

const Entry: React.FC<EntryProps> = (props) => {
	const [pincode, setPincode] = useState("");
	const [today] = useState(dateFormat(new Date(), "d-mm-yyyy"));
	const history = useHistory();

	useEffect(() => {
		document.title = "VAXEEN - Home";
	}, []);

	const onClick = () => {
		history.push({
			pathname: "/centers",
			state: { pincode: pincode, today: today },
		});
	};

	return (
		<div>
			<div className="">
				<nav className="navbar">
					<a className="logo" href="/">
						Vaxeen
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
				</nav>
				<div className="container">
					<div className="col-md-4">
						<form action="" className="card bg-light p-2">
							<div className="input-group">
								<input
									type="text"
									name="pincode"
									id="pincode"
									value={pincode}
									onChange={(e) => setPincode(e.target.value)}
									className="form-control"
									placeholder="Enter Pincode"
								/>
								<button onClick={onClick} className="btn btn-primary">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<footer>
				<div className="footer">
					<div className="footer-div">
						Created with <DiReact size={"2em"} color={"#298594"} />
						<SiTypescript size={"1.5em"} color={"#298594"} /> by
					</div>
					<div className="footer-div">
						<a className="name" href="https://github.com/Harsha9554">
							Sai SriHarsha Griddaluru
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Entry;
