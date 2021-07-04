import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#58a6ff'
		},
		secondary: {
			main: '#8b939e'
		},
		error: {
			main: red.A400
		},
		background: {
			default: '#000'
		},
		borderColor: {
			main: '#30363d'
		},
		iconColor: {
			main: '#868e98'
		}
	}
});

export default theme;
