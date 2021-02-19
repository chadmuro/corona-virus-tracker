import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

export interface Data {
	date: number;
	pcr: number;
	hospitalize: number;
	positive: number;
	severe: number;
	discharge: number;
	death: number;
	symptom_confirming: number;
}

export const DataContext = createContext<Data | null>(null);

export const DataProvider = (props: any) => {
	const [data, setData] = useState<Data | null>(null);

	useEffect(() => {
		axios
			.get('https://covid19-japan-web-api.now.sh/api/v1/total')
			.then(res => setData(res.data));
	}, []);

	return (
		<DataContext.Provider value={data}>{props.children}</DataContext.Provider>
	);
};
