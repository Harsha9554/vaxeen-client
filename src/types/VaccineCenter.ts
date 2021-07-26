import { Session } from "./Session";

export class VaccineCenter {
	centerId!: number;
	name!: string;
	address!: string;
	state!: string;
	district!: string;
	pincode!: number;
	sessions!: Session[];

	constructor(centersResponse: any) {
		this.centerId = centersResponse.center_id;
		this.name = centersResponse.name;
		this.address = centersResponse.address;
		this.state = centersResponse.state_name;
		this.district = centersResponse.district_name;
		this.pincode = centersResponse.pincode;
		this.sessions = centersResponse["sessions"].map(
			(session: any) => new Session(session)
		);
		// this.sessions = undefined;
	}
}
