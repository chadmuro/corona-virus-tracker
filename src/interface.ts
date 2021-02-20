export interface TotalData {
	date: number;
	pcr: number;
	hospitalize: number;
	positive: number;
	severe: number;
	discharge: number;
	death: number;
	symptom_confirming: number;
}

export interface Prefecture {
	id: number;
	name_ja: string;
	name_en: string;
	lat: number;
	lng: number;
	population: number;
	last_updated: {
		cases_date: number;
		deaths_date: number;
		pcr_date: number;
		hospitalize_date: number;
		severe_date: number;
		discharge_date: number;
		symptom_confirming_date: number;
	};
	cases: number;
	deaths: number;
	pcr: number;
	hospitalize: number;
	severe: number;
	discharge: number;
	symptom_confirming: number;
}
