import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	header: {
		display: 'flex',
		height: '170px',
		borderBottom: '1px solid #cecece',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerTitle: {
		fontSize: '3.1rem',
		fontWeight: 'bold',
		color: '#fff'
	},
	headerSubTitle: {
		fontSize: '1rem',
		color: theme.palette.secondary.main
	}
}));

const Header = () => {
	const classes = useStyles();
	return (
		<Box className={classes.header}>
			<Typography className={classes.headerTitle} variant="h2" component="h1" gutterBottom>
				Trending
			</Typography>
			<Typography className={classes.headerSubTitle} variant="h4" component="h1" gutterBottom>
				See what Github community is most excited about today
			</Typography>
		</Box>
	);
};

export default Header;
