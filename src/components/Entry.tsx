import { useEffect, useState } from "react";
import dateFormat from "dateformat";
import { useHistory } from "react-router-dom";

interface EntryProps {}

export const EntryComponent: React.FC<EntryProps> = (props) => {
	const [pincode, setPincode] = useState("");
	const [today] = useState(dateFormat(new Date(), "d-mm-yyyy"));
	// const [vaccineCenter, setVaccineCenter] = useState<VaccineCenter>();
	// const [vaccineCenters, setVaccineCenters] = useState<VaccineCenter[]>();
	const [vaccineCenters, setVaccineCenters] = useState([]);
	const history = useHistory();

	const onClick = () => {
		console.log(vaccineCenters);
		history.push({ pathname: "/centers", state: { vaccineCenters } });
	};

	// useEffect(() => {
	// 	fetch(url)
	// 		.then((res) => {
	// 			return res.json();
	// 		})
	// 		.then((data) => {
	// 			console.log(data);
	// 			const vc = new VaccineCenter(data["centers"][0]);
	// 			setVaccineCenter(vc);
	// 		});
	// }, []);

	useEffect(() => {
		loadData();
	});

	// useEffect(() => {
	// 	fetch(url)
	// 		.then((res) => {
	// 			return res.json();
	// 		})
	// 		.then((data) => {
	// 			setVaccineCenters(vaccineResMaker(data));
	// 		});
	// }, []);

	const loadData = async () => {
		if (!today || pincode.length < 6) return;
		try {
			const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${today}`;

			const response = await fetch(url);
			const data = await response.json();
			// setVaccineCenters(vaccineResMaker(data));
			setVaccineCenters(data["centers"]);
		} catch (e) {
			console.error(e);
		}
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
			{/* {vaccineCenters && <p>Centers: {vaccineCenters.length}</p>}
			{vaccineCenters &&
				vaccineCenters.map((center) => {
					return (
						<div key={center.centerId}>
							<ul>{center.name}</ul>
							<ul>{center.address}</ul>
						</div>
					);
				})} */}
		</div>
	);
};

// class Home extends React.PureComponent<HomeProps, HomeState> {
// 	// state: HomeState;

// 	constructor(props: HomeProps) {
// 		super(props);
// 	}
// 	onChange = (e: React.FormEvent<HTMLInputElement>): void => {
// 		this.setState({ pincode: e.currentTarget.value });
// 	};

// 	// handlePincode = (today) => {
// 	// 	// this.setState((state) => {
// 	// 	// 	return { today: state.today + todayValue };
// 	// 	this.setState(today);
// 	// 	// });
// 	// 	// this.props.history.push("/centers", this.state);
// 	// };

// 	render() {
// 		// const { pincode } = this.state;
// 		const today = dateFormat(new Date(), "d/mm/yyyy");
// 		return (
// <main className="container">
// 	<div className="col-md-2">
// 		<label htmlFor="pincode">PinCode</label>
// 		<input name="pincode" value={pincode.f} onChange={this.onChange} type="text" />
// 		<button
// 			onClick={() => {
// 				return this.handlePincode({ today });
// 			}}
// 			className="btn btn-primary btn-block"
// 		>
// 			Submit
// 		</button>
// 	</div>
// </main>
// 			// <div>
// 			// 	<p>pincode : {pincode}</p>
// 			// 	<p>isValid : {isValid}</p>
// 			// </div>
// 		);
// 	}
// }

// export default Home;
