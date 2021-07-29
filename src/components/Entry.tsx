/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import dateFormat from "dateformat";
import "../styles/Entry.css";
import { useHistory } from "react-router-dom";

interface EntryProps {}

const Entry: React.FC<EntryProps> = (props) => {
	const [pincode, setPincode] = useState("");
	const [today] = useState(dateFormat(new Date(), "d-mm-yyyy"));
	const history = useHistory();

	const onClick = () => {
		history.push({
			pathname: "/centers",
			state: { pincode: pincode, today: today },
		});
	};

	return (
		<div className="">
			<nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
				<h2 className="navbar-brand">
					<i>Vaxeen</i>
				</h2>
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
					<form action="" className="card p-2 bg-light">
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
							<button onClick={onClick} className="btn btn-secondary">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		// <div className="container">
		// 	<div className="col-md-2">
		// 		<label htmlFor="pincode">PinCode</label>
		// 		<input
		// 			name="pincode"
		// 			value={pincode}
		// 			type="text"
		// 			onChange={(e) => setPincode(e.target.value)}
		// 			className="input"
		// 		/>
		// 		<button onClick={onClick} className="btn btn-primary btn-block">
		// 			Submit
		// 		</button>
		// 	</div>
		// </div>
	);
};

export default Entry;
