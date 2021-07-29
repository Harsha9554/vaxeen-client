import { Session } from "./Session";
import { VaccineFee } from "./VaccineFee";

export class VaccineCenter {
	centerId!: number;
	name!: string;
	address!: string;
	state!: string;
	district!: string;
	pincode!: number;
	feeType!: string;
	vaccineFees?: VaccineFee[] | null;
	sessions!: Session[];

	constructor(centersResponse: any) {
		this.centerId = centersResponse.center_id;
		this.name = centersResponse.name;
		this.address = centersResponse.address;
		this.state = centersResponse.state_name;
		this.district = centersResponse.district_name;
		this.pincode = centersResponse.pincode;
		this.feeType = centersResponse.fee_type;
		if (centersResponse["vaccine_fees"]) {
			this.vaccineFees = centersResponse["vaccine_fees"].map(
				(fee: any) => new VaccineFee(fee)
			);
		} else {
			this.vaccineFees = null;
		}
		this.sessions = centersResponse["sessions"].map(
			(session: any) => new Session(session)
		);
		// this.sessions = undefined;
	}
}
