import React from 'react';
import { Container, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import { getTrendingDevs } from '../services/GithubRepoService';
import DeveloperRow from '../components/DeveloperRow';

const useStyles = makeStyles((theme) => ({
	mainWrapper: {
		borderLeft: '1px solid #cecece',
		borderRight: '1px solid #cecece',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: '0'
	},
	centerLoader: {
		display: 'flex',
		justifyContent: 'center',
		padding: '10px',
		flexDirection: 'row',
		color: theme.palette.secondary.main,
		fontSize: '1.3rem',
		alignItems: 'center'
	}
}));

const DevelopersList = () => {
	const classes = useStyles();
	const { isLoading, error, data } = useQuery('devRepoData', getTrendingDevs);

	if (isLoading)
		return (
			<div className={classes.centerLoader}>
				<CircularProgress color="primary" style={{ marginRight: '10px' }} /> Loading
			</div>
		);

	if (error) return 'An error has occurred: ' + error.message;

	return (
		<Container className={classes.mainWrapper} maxWidth="lg" padding="0">
			{data.map((repo, index) => <DeveloperRow key={index} devData={repo} />)}
		</Container>
	);
};

export default DevelopersList;
