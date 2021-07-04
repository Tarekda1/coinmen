import React from 'react';
import { Typography, Box, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { WhatshotOutlined, BookmarkBorderOutlined, FavoriteBorderOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	listName: {
		listStyleType: 'none',
		borderBottom: '1px solid',
		borderBottomColor: theme.palette.borderColor.main,
		color: theme.palette.secondary.main
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
		marginLeft: '20px'
	},
	listTitle: {
		color: theme.palette.primary.main,
		textTransform: 'capitalize',
		fontSize: '1.3rem'
	},
	popularRepoText: {
		textTransform: 'uppercase'
	},
	popularRepoTextPrimary: {
		color: theme.palette.primary.main
	},
	repoIcon: {
		color: theme.palette.secondary.main
	},
	repoIconRed: {
		color: '#cf7737'
	},
	fixTop: {
		position: 'relative',
		top: '5px'
	},
	marginLeft5: {
		marginLeft: '5px'
	},
	iconPink: {
		color: '#db61a2'
	},
	graybutton: {
		background: '#21262e'
	},
	paddingLeft10: {
		paddingLeft: '10px'
	},
	marginLeft10: {
		marginLeft: '10px'
	},
	paddingRight5: {
		paddingRight: '5px'
	}
}));

const DeveloperRow = ({ devData }) => {
	const classes = useStyles();
	return (
		<li className={classes.listName}>
			<Box display="flex" flexDirection="row" padding="20px">
				<Box display="flex" flexDirection="row" flex="1">
					{devData.rank}
					<Avatar className={classes.large} src={devData.avatar} />
					<Box display="flex" flexDirection="column" pl="20px">
						<Typography component="h2" variant="title" className={classes.listTitle}>
							{devData.name}
						</Typography>
						<Typography component="h5" variant="subtitle2">
							{devData.username}
						</Typography>
					</Box>
				</Box>
				<Box display="flex" flexDirection="column" justifyContent="center" width="300px">
					<Typography component="h5" variant="subtitle2" className={classes.popularRepoText}>
						<WhatshotOutlined className={`${classes.repoIconRed} ${classes.fixTop}`} /> popular repo
					</Typography>
					<Typography component="h5" variant="subtitle2" className={classes.popularRepoTextPrimary}>
						<BookmarkBorderOutlined
							className={`${classes.repoIcon} ${classes.fixTop} ${classes.paddingRight5}`}
						/>
						{devData.popularRepository.repositoryName}
					</Typography>
					<Typography component="p" variant="body1" className={classes.marginLeft5}>
						{devData.popularRepository.description}
					</Typography>
				</Box>
				<Box display="flex" flexDirection="row" alignItems="flex-start" justifyContent="flex-end" flex="1">
					<Button
						variant="outlined"
						color="secondary"
						className={`${classes.graybutton}`}
						startIcon={<FavoriteBorderOutlined className={classes.iconPink} />}
					>
						Sponsor
					</Button>
					<Button
						variant="outlined"
						color="secondary"
						className={`${classes.graybutton} ${classes.marginLeft10}`}
					>
						Follow
					</Button>
				</Box>
			</Box>
		</li>
	);
};

export default DeveloperRow;
