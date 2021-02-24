import './Count.css';
import { useState, useEffect, useContext } from 'react';
import { TotalDataContext } from '../context/TotalDataContext';
import { useSpring, animated } from 'react-spring';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 500
  },
  content: {
    textAlign: 'center'
  }
})

const Count = ({ dataType }: { dataType: string }) => {
  const classes = useStyles();
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
			<Card className={classes.root}>
				<CardContent className={classes.content}>
					<Typography variant="h4">Total {dataType}</Typography>
					<animated.div className="animated-number">
						{/* @ts-ignore */}
						{spring.val.interpolate(val => Math.floor(val))}
					</animated.div>
				</CardContent>
			</Card>
	);
};

export default Count;
