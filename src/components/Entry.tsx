import { useState } from "react";
import dateFormat from "dateformat";
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
		<div className="container">
			<div className="col-md-2">
				<label htmlFor="pincode">PinCode</label>
				<input
					name="pincode"
					value={pincode}
					type="text"
					onChange={(e) => setPincode(e.target.value)}
					className="input"
				/>
				<button onClick={onClick} className="btn btn-primary btn-block">
					Submit
				</button>
			</div>
		</div>
	);
};

export default Entry;
