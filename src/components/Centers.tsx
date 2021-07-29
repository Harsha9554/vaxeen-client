/* eslint-disable @typescript-eslint/no-unused-vars */
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
		// <div>
		// 	<h1>Centers</h1>
		// 	<hr />
		// 	<div>
		// 		{vaccineCenters &&
		// 			vaccineCenters.length > 0 &&
		// 			vaccineCenters.map((center) => {
		// 				return (
		// 					<div key={center.centerId} className="row centers col-md-4">
		// 						<ul>{center.name}</ul>
		// 						<ul>{center.address}</ul>
		// 						<ul>{center.district}</ul>
		// 						<button
		// 							onClick={() => onClick(center.centerId)}
		// 							className="btn btn-primary"
		// 						>
		// 							Check
		// 						</button>
		// 						<hr />
		// 					</div>
		// 				);
		// 			})}
		// 	</div>
		// </div>
		<div>
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
				<div className="my-3 p-3 bg-secondary rounded box-shadow">
					<h6 className="border-bottom text-white border-white pb-2">
						Recent Updates
					</h6>
					<div>
						{vaccineCenters &&
							vaccineCenters.length > 0 &&
							vaccineCenters.map((center) => {
								return (
									<div>
										<div key={center.centerId} className="card bg-light mb-2">
											<div className="card-body">
												<div className="title mb-2 bg-secondary text-white rounded p-2">
													<h6 className="card-title rounded my-0">
														{center.name}
														<span className="badge mx-2 text-black bg-success badge-danger">
															{center.feeType}
														</span>
													</h6>
													<small className="mb-0">{center.address}</small>
												</div>
												{center.vaccineFees && center.vaccineFees.length > 0 ? (
													<div className="vax mt-2 bg-secondary text-white rounded px-3">
														<p className="my-0 border-bottom">
															Available Vaccines
														</p>
														<ul>
															{center.vaccineFees.map((fee) => {
																return (
																	<li className="my-1">
																		<small>
																			{fee.vaccine}
																			<span className="badge mx-2 text-black bg-success badge-danger">
																				₹ {fee.fee}
																			</span>
																		</small>
																	</li>
																);
															})}
														</ul>
													</div>
												) : (
													""
												)}
												<button
													onClick={() => onClick(center.centerId)}
													className="btn btn-success btn-block"
												>
													Check Sessions
												</button>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Centers;
