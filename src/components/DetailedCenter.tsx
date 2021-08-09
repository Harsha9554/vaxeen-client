import React, { useState } from "react";
import "../styles/DetailedCenter.css";
import { RouteComponentProps } from "react-router-dom";
import { StaticContext } from "react-router";
import { VaccineCenter } from "../types/VaccineCenter";

interface LocationState {
	center: VaccineCenter;
}

export interface DetailedCenterProps
	extends RouteComponentProps<{}, StaticContext, LocationState> { }

const DetailedCenter: React.FC<DetailedCenterProps> = ({ location }) => {
	const { center } = location.state;
	const [modalInfo, setModalInfo] = useState<String[]>([]);
	const [showModal, setShowModal] = useState(false)
	const [show, setShow] = useState(false)

	const onSessionClick = (id: string) => {
		const session = center.sessions.find(session => session.sessionId === id)
		if (session) {
			setModalInfo(session.slots)
			console.log(modalInfo)
		}
	}

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
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
			<div className="container w-100">
				<div className=" align-items-center p-3 my-3 text-white bg-secondary rounded box-shadow w-100">
					<h6 className="border-bottom text-white border-white pb-2">Vaccine Center Details</h6>
					<div>
						{center && (
							<div key={center.centerId}>
								<table className="table table-striped bg-light rounded">
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td>Center Name</td>
											<td>{center.name}</td>
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>Address</td>
											<td>{center.address}</td>
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>Block</td>
											<td>{center.block}</td>
										</tr>
										<tr>
											<th scope="row">4</th>
											<td>District</td>
											<td>{center.district}</td>
										</tr>
										<tr>
											<th scope="row">5</th>
											<td>State</td>
											<td>{center.state}</td>
										</tr>
										<tr>
											<th scope="row">6</th>
											<td>Fee Type</td>
											<td><span className="badge  text-black bg-success badge-danger">{center.feeType}</span></td>
										</tr>
									</tbody>
								</table>
							</div>
						)}
						<div className="my-3 bg-secondary rounded box-sha">
							<h6 className="border-bottom text-white border-white pb-2">Vaccine Session Details</h6>
							<div className="card bg-light mb-2">
								<div className="card-body">
									<table className="table table-striped table-lg">
										<thead>
											<tr>
												<th scope="col">Date</th>
												<th scope="col">Slots</th>
												<th scope="col">Vaccine</th>
												<th scope="col">Minimum Age</th>
												<th scope="col">Dose 1</th>
												<th scope="col">Dose 2</th>
											</tr>
										</thead>
										<tbody>
											{center.sessions && center.sessions.length > 0 && center.sessions.map((session) => {
												return (
													<tr>
														<td>{session.date}</td>
														<td><button onClick={() => onSessionClick(session.sessionId)} className="btn btn-sm btn-success">Slots</button></td>
														<td><span className="badge badge-pill bg-danger">{session.vaccine}</span></td>
														<td><span className="badge badge-pill bg-info">{session.minAge}</span></td>
														<td><span className="badge badge-pill bg-warning">{session.availableCapacityDose1}</span></td>
														<td><span className="badge badge-pill bg-secondary">{session.availableCapacityDose2}</span></td>
													</tr>
												)
											})}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailedCenter;
