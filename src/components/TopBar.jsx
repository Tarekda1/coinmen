import React, { useState } from 'react';
import { Box, Typography, ButtonGroup, Button, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import clsx from 'clsx';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	topNav: {
		display: 'flex',
		background: '#161b22',
		flexGrow: 1,
		flexDirection: 'row',
		paddingTop: '20px',
		paddingBottom: '20px',
		paddingLeft: '20px',
		borderTopLeftRadius: '8px',
		borderTopRightRadius: '8px',
		justifyContent: 'space-between'
	},
	menuText: {
		color: theme.palette.secondary.main,
		fontSize: '1.2rem'
	},
	dropText: {
		color: theme.palette.secondary.main,
		fontSize: '1rem'
	},
	transparenButon: {
		background: 'transparent',
		color: '#fff',
		borderRadius: '5px',
		border: '1px solid',
		borderColor: theme.palette.borderColor.main
	},
	primaryBgButton: {
		background: theme.palette.primary.main,
		color: '#fff',
		borderRadius: '5px',
		border: '1px solid #fff'
	},
	menuPadding: {
		paddingRight: '25px'
	}
}));

const TopBar = (activeBtnParam) => {
	const [ activeButton, setActiveButton ] = useState(activeBtnParam);
	const classes = useStyles(activeButton);
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const open = Boolean(anchorEl);
	const history = useHistory();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleSwitchClick = (activeBtn, path) => {
		history.replace(path);
		setActiveButton(activeBtn);
	};

	return (
		<Box className={classes.topNav}>
			<ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
				<Button
					onClick={() => handleSwitchClick(1, '/repositories')}
					className={clsx(activeButton == 1 ? classes.primaryBgButton : classes.transparenButon)}
				>
					Repositories
				</Button>
				<Button
					onClick={() => handleSwitchClick(2, '/developers')}
					className={clsx(activeButton == 2 ? classes.primaryBgButton : classes.transparenButon)}
				>
					Developers
				</Button>
			</ButtonGroup>
			<Box display="flex" flexDirection="row" pr="30px">
				<div className={classes.menuPadding}>
					<Typography component="span" variant="body2" className={classes.menuText}>
						Spoken Language:
					</Typography>
					<Button
						className={classes.dropText}
						aria-controls="fade-menu"
						aria-haspopup="true"
						onClick={handleClick}
					>
						Any <ArrowDropDownIcon />
					</Button>
					<Menu
						id="fade-menu"
						anchorEl={anchorEl}
						keepMounted
						open={open}
						onClose={handleClose}
						TransitionComponent={Fade}
					>
						<MenuItem onClick={handleClose}>English</MenuItem>
					</Menu>
				</div>
				<div className={classes.menuPadding}>
					<Typography component="span" className={classes.menuText}>
						Language:
					</Typography>
					<Button
						className={classes.dropText}
						aria-controls="fade-menu"
						aria-haspopup="true"
						onClick={handleClick}
					>
						Any <ArrowDropDownIcon />
					</Button>
					<Menu
						id="fade-menu"
						anchorEl={anchorEl}
						keepMounted
						open={open}
						onClose={handleClose}
						TransitionComponent={Fade}
					>
						<MenuItem onClick={handleClose}>English</MenuItem>
					</Menu>
				</div>
				<div>
					<Typography component="span" className={classes.menuText}>
						Date range:
					</Typography>
					<Button
						className={classes.dropText}
						aria-controls="fade-menu"
						aria-haspopup="true"
						onClick={handleClick}
					>
						Today <ArrowDropDownIcon />
					</Button>
					<Menu
						id="fade-menu"
						anchorEl={anchorEl}
						keepMounted
						open={open}
						onClose={handleClose}
						TransitionComponent={Fade}
					>
						<MenuItem onClick={handleClose}>Profile</MenuItem>
					</Menu>
				</div>
			</Box>
		</Box>
	);
};

export default TopBar;
