import { VaccineCenter } from "../types/VaccineCenter";

export function vaccineResMaker(data: any): VaccineCenter[] {
	const centersRawData = data["centers"];
	const vaccineCenters: VaccineCenter[] = centersRawData.map((center: any) => {
		return new VaccineCenter(center);
	});
	return vaccineCenters;
}
