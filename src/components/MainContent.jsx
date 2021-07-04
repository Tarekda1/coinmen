import React from 'react';
import { Box, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TopBar from './TopBar';

const useStyles = makeStyles((theme) => ({
	mainWrapper: {
		border: '1px solid #cecece',
		marginTop: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: '0',
		borderTopLeftRadius: '8px',
		borderTopRightRadius: '8px'
	},
	navWrapper: {}
}));

const MainContent = () => {
	const classes = useStyles();
	return (
		<Container className={classes.mainWrapper} maxWidth="lg" padding="0">
			<Box className={classes.navWrapper} display="flex" flexDirection="row" padding="0">
				<TopBar activeBtnParam="1" />
			</Box>
		</Container>
	);
};

export default MainContent;
