import React from 'react';
import { useQuery } from 'react-query';
import { getTrendingRepos } from '../services/GithubRepoService';
import { Container, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RepoRow from '../components/RepoRow';

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

const RepoList = () => {
	const classes = useStyles();
	const { isLoading, error, data } = useQuery('repoData', getTrendingRepos);

	if (isLoading)
		return (
			<div className={classes.centerLoader}>
				<CircularProgress color="primary" style={{ marginRight: '10px' }} /> Loading
			</div>
		);

	if (error) return 'An error has occurred: ' + error.message;

	return (
		<Container className={classes.mainWrapper} maxWidth="lg" padding="0">
			{data.map((repo, index) => <RepoRow key={index} repoData={repo} />)}
		</Container>
	);
};

export default RepoList;
