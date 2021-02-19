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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4">Japan Corona Virus Dashboard</Typography>
        <Typography variant="subtitle1">Last updated: 2021-2-20 13:34</Typography>
      </Toolbar>
    </div>
  )
}

export default Header;
