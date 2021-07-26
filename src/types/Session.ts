export class Session {
	sessionId!: string;
	date!: string;
	minAge!: number;
	vaccine!: string;
	slots!: string[];
	availableCapacityDose1!: number;
	availableCapacityDose2!: number;

	constructor(sessionResponse: any) {
		this.sessionId = sessionResponse.session_id;
		this.date = sessionResponse.date;
		this.minAge = sessionResponse.min_age_limit;
		this.vaccine = sessionResponse.vaccine;
		this.slots = sessionResponse["slots"].map((x: any) => x);
		this.availableCapacityDose1 = sessionResponse.available_capacity_dose1;
		this.availableCapacityDose2 = sessionResponse.available_capacity_dose2;
	}
}
