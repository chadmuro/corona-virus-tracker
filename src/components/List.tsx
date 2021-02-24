import { useContext } from 'react';
import { PrefectureDataContext } from '../context/PrefectureDataContext';
import {
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableContainer,
	TableCell,
	Paper,
	makeStyles,
	createStyles,
	Theme,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		table: {
			maxWidth: 400,
			minWidth: 300,
			maxHeight: '80vh',
		},
		head: {
			backgroundColor: theme.palette.grey['800'],
			color: theme.palette.common.white,
		},
		row: {
			'&:nth-of-type(odd)': {
				backgroundColor: theme.palette.action.hover,
			},
		},
	})
);

const List = () => {
	const classes = useStyles();
	const prefectureData = useContext(PrefectureDataContext);

	prefectureData.sort((a, b) => b.cases - a.cases);

	return (
		<TableContainer component={Paper} className={classes.table}>
			<Table stickyHeader size="small">
				<TableHead>
					<TableRow>
						<TableCell className={classes.head} align="center">
							Prefecture
						</TableCell>
						<TableCell className={classes.head} align="center">
							Total Cases
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{prefectureData.map(prefecture => (
						<TableRow key={prefecture.id} className={classes.row}>
							<TableCell align="center">{prefecture.name_en}</TableCell>
							<TableCell align="center">{prefecture.cases}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default List;
