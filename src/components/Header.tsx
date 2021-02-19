import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { Toolbar, Typography, makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    toolbar: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(2),
      backgroundColor: 'red'
    }
  })
)

const Header = () => {
  const data = useContext(DataContext);
  const classes = useStyles();

  let date = data?.date.toString()
  date = date?.substring(0, 4) + "-" + date?.substring(4,6) + "-" + date?.substring(6,8);
  
  return (
		<div className={classes.root}>
			<Toolbar className={classes.toolbar}>
				<Typography variant="h4">Japan Corona Virus Dashboard</Typography>
				<Typography variant="subtitle1">
					Last updated: {data && date}
				</Typography>
			</Toolbar>
		</div>
	);
}

export default Header;
