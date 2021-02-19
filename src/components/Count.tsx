import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { useSpring, animated } from 'react-spring';
import { Card, Typography } from '@material-ui/core';

const Count = ({ dataType }: { dataType: string }) => {
	const [count, setCount] = useState(0);
	const data = useContext(DataContext);

	console.log(data);

	useEffect(() => {
		if (data) {
			switch (dataType) {
				case 'deaths':
					setCount(data?.TotalDeaths);
					break;
				case 'recovered':
					setCount(data.TotalRecovered);
					break;
				default:
					setCount(data.TotalConfirmed);
					break;
			}
		}
	}, [data]);

	const spring = useSpring({ val: count, from: { val: 0 } });

	return (
		<div>
			<Card>
				<Typography>Total Deaths</Typography>

				<animated.div>
					{/* @ts-ignore */}
					{spring.val.interpolate(val => Math.floor(val))}
				</animated.div>
			</Card>
		</div>
	);
};

export default Count;
