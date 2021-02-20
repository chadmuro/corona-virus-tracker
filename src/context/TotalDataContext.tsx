import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import { TotalData } from '../interface';

export const TotalDataContext = createContext<TotalData | null>(null);

// TO-DO update props type?
export const TotalDataProvider = (props: any) => {
	const [totalData, setTotalData] = useState<TotalData | null>(null);

	useEffect(() => {
		axios
			.get('https://covid19-japan-web-api.now.sh/api/v1/total')
			.then(res => setTotalData(res.data));
	}, []);

	return (
		<TotalDataContext.Provider value={totalData}>
			{props.children}
		</TotalDataContext.Provider>
	);
};
