import { useState, useEffect, useContext } from 'react';
import { TotalDataContext } from '../context/TotalDataContext';
import { useSpring, animated } from 'react-spring';
import { Card, Typography } from '@material-ui/core';

const Count = ({ dataType }: { dataType: string }) => {
	const [count, setCount] = useState(0);
	const totalData = useContext(TotalDataContext);

	useEffect(() => {
		if (totalData) {
			switch (dataType) {
				case 'Deaths':
					setCount(totalData?.death);
					break;
				case 'Recovered':
					setCount(totalData?.discharge);
					break;
				default:
					setCount(totalData?.positive);
					break;
			}
		}
	}, [totalData]);

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
