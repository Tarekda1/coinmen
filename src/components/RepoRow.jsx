import { Typography, Box, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BookmarkBorderOutlined, FourKOutlined, StarBorder, Restaurant } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	listTitle: {
		color: theme.palette.primary.main,
		paddingLeft: '5px',
		textTransform: 'capitalize',
		fontSize: '1.6rem'
	},
	repoIcon: {
		color: theme.palette.iconColor.main,
		position: 'relative',
		top: '10px'
	},
	listName: {
		listStyleType: 'none',
		borderBottom: '1px solid',
		borderBottomColor: theme.palette.borderColor.main
	},
	repoDesc: {
		color: theme.palette.secondary.main,
		paddingTop: '5px',
		paddingBottom: '10px'
	},
	info: {
		color: theme.palette.secondary.main
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
		marginLeft: '5px',
		marginRight: '5px'
	}
}));

const RepoRow = ({ repoData }) => {
	const classes = useStyles();
	return (
		<li className={classes.listName}>
			<Box display="flex" flexDirection="column" padding="20px">
				<Box display="flex" flexDirection="row" justifyContent="space-between">
					<Box display="flex" flexDirection="row">
						<BookmarkBorderOutlined className={classes.repoIcon} />
						<Typography component="h2" varitant="title" className={classes.listTitle}>
							{repoData.username}/{repoData.repositoryName}
						</Typography>
					</Box>
					<Button variant="outlined" color="secondary" className={classes.button} startIcon={<StarBorder />}>
						Star
					</Button>
				</Box>
				<Typography className={classes.repoDesc} component="p" variant="body1">
					{repoData.description}
				</Typography>
				<Box
					className={classes.info}
					display="flex"
					flexDirection="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" flex="2">
						<Typography component="span">{repoData.language}</Typography>
						<Box display="flex" flexDirection="row" alignItems="center" pl="10px">
							<StarBorder /> {repoData.totalStars}
						</Box>
						<Box display="flex" flexDirection="row" alignItems="center" pl="10px">
							<Restaurant /> {repoData.forks}
						</Box>
						<Box display="flex" flexDirection="row" alignItems="center" pl="10px">
							Built by
							{repoData.builtBy.map((built, index) => {
								return (
									<Avatar
										key={index}
										className={classes.small}
										src={built.avatar}
										alt={built.username}
									/>
								);
							})}
						</Box>
					</Box>
					<Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end" flex="1">
						<StarBorder /> {Number(repoData.totalStars) - Number(repoData.starsSince)} stars today
					</Box>
				</Box>
			</Box>
		</li>
	);
};

export default RepoRow;
