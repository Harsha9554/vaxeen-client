import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { VaccineCenter } from "../types/VaccineCenter";

export interface CentersProps extends RouteComponentProps {
	pincode: string;
}

export interface CentersState {
	centers: VaccineCenter[];
}

class Centers extends React.Component<CentersProps, CentersState> {
	state: CentersState = { centers: [] };

	render() {
		const { pincode } = this.props;
		return (
			<div>
				<h1>Centers</h1>
				<p>{pincode}</p>
			</div>
		);
	}
}

export default Centers;
