import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

export interface Data {
	ID: string;
	Country: string;
	CountryCode: string;
	Slug: string;
	NewConfirmed: number;
	TotalConfirmed: number;
	NewDeaths: number;
	TotalDeaths: number;
	NewRecovered: number;
	TotalRecovered: number;
	Date: string;
}

const japanData = {
	ID: '4e81cb7d-a54d-4dd9-90d0-ba2e7a6d55d2',
	Country: 'Japan',
	CountryCode: 'JP',
	Slug: 'japan',
	NewConfirmed: 1461,
	TotalConfirmed: 419896,
	NewDeaths: 79,
	TotalDeaths: 7218,
	NewRecovered: 3468,
	TotalRecovered: 391052,
	Date: '2021-02-19T05:32:52.01Z',
};

export const DataContext = createContext<Data | null>(null);

export const DataProvider = (props: any) => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
		axios.get('https://api.covid19api.com/summary').then(res => {
			setData(res.data.Countries[84]);
		});
	}, []);

	return (
		<DataContext.Provider value={data}>
			{props.children}
		</DataContext.Provider>
	);
};
