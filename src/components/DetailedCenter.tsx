import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { StaticContext } from "react-router";
import { VaccineCenter } from "../types/VaccineCenter";

interface LocationState {
	center: VaccineCenter;
}

export interface DetailedCenterProps
	extends RouteComponentProps<{}, StaticContext, LocationState> {}

const DetailedCenter: React.FC<DetailedCenterProps> = ({ location }) => {
	const { center } = location.state;
	const { sessions } = center;
	return (
		<div>
			<h1>Detailed Center</h1>
			<hr />
			<div>
				{center && (
					<div key={center.centerId} className="row centers col-md-4">
						<ul>{center.name}</ul>
						<ul>{center.address}</ul>
						<ul>{center.district}</ul>
						{sessions &&
							sessions.map((session) => {
								return (
									<div key={session.sessionId}>
										<ul>{session.minAge}</ul>
										{console.log(session.date)}
										<ul>{session.date}</ul>
										<ul>{session.slots.length}</ul>
										<ul>{session.vaccine}</ul>
									</div>
								);
							})}
					</div>
				)}
			</div>
		</div>
	);
};

export default DetailedCenter;
