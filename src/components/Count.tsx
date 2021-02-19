import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { useSpring, animated } from 'react-spring';
import { Card, Typography } from '@material-ui/core';

const Count = ({ dataType }: { dataType: string }) => {
	const [count, setCount] = useState(0);
	const data = useContext(DataContext);

	useEffect(() => {
		if (data) {
			switch (dataType) {
				case 'Deaths':
					setCount(data?.death);
					break;
				case 'Recovered':
					setCount(data?.discharge);
					break;
				default:
					setCount(data?.positive);
					break;
			}
		}
	}, [data]);

	const spring = useSpring({ val: count, from: { val: 0 } });

	return (
		<div>
			<Card>
				<Typography>Total {dataType}</Typography>
				<animated.div>
					{/* @ts-ignore */}
					{spring.val.interpolate(val => Math.floor(val))}
				</animated.div>
			</Card>
		</div>
	);
};

export default Count;
