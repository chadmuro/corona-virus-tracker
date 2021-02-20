import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import { Prefecture } from '../interface';

export const PrefectureDataContext = createContext<Prefecture[]>([]);

// TO-DO update props type?
export const PrefectureDataProvider = (props: any) => {
	const [prefectureData, setPrefectureData] = useState<Prefecture[]>([]);

	useEffect(() => {
		axios
			.get('https://covid19-japan-web-api.now.sh/api/v1/prefectures')
			.then(res => setPrefectureData(res.data));
	}, []);

	return (
		<PrefectureDataContext.Provider value={prefectureData}>
			{props.children}
		</PrefectureDataContext.Provider>
	);
};
