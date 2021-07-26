import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import "../styles/Centers.css";
import { StaticContext } from "react-router";
import { vaccineResMaker } from "../services/VaccineCentersApiService";
import { VaccineCenter } from "../types/VaccineCenter";
import { useHistory } from "react-router-dom";

interface LocationState {
	pincode: string;
	today: string;
}

export interface CentersProps
	extends RouteComponentProps<{}, StaticContext, LocationState> {}

const Centers: React.FC<CentersProps> = ({ location }) => {
	const { pincode, today } = location.state;
	const [vaccineCenters, setVaccineCenters] = useState<VaccineCenter[]>([]);
	const history = useHistory();
	const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${today}`;

	useEffect(() => {
		loadData();
	});

	const loadData = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setVaccineCenters(vaccineResMaker(data));
		} catch (e) {
			console.error(e);
		}
	};

	const onClick = (centerId: number) => {
		console.log(centerId);
		const center = vaccineCenters.find((c) => c.centerId === centerId);
		if (center) {
			history.push({
				pathname: "/detailedCenter",
				state: { center: center },
			});
		}
	};

	return (
		<div>
			<h1>Centers</h1>
			<hr />
			<div>
				{vaccineCenters &&
					vaccineCenters.length > 0 &&
					vaccineCenters.map((center) => {
						return (
							<div key={center.centerId} className="row centers col-md-4">
								<ul>{center.name}</ul>
								<ul>{center.address}</ul>
								<ul>{center.district}</ul>
								<button
									onClick={() => onClick(center.centerId)}
									className="btn btn-primary"
								>
									Check
								</button>
								<hr />
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Centers;
