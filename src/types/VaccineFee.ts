export class VaccineFee {
	vaccine!: String;
	fee!: number;

	constructor(vaccineFeeResponse: any) {
		this.vaccine = vaccineFeeResponse.vaccine;
		this.fee = vaccineFeeResponse.fee;
	}
}
