import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
	},
	headbarContainer: {
		width: '100%',
		height: '50px',
	},
	flexContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 0,
	},
	divider: {
		position: 'absolute',
		right: '0px',
		height: 170,
	},
    paper: {
      marginTop: 60,
      height: 230,
	  width: 1000,
	  border: '1px solid rbga(0,0,0,0.6)',
	  borderRadius: '10px',
	},
	expandedPaper: {
		padding: 20,
		width: 500,
		height: 'auto',
		fontSize: 6
	},
	constrainedPaper: {
		padding: 20,
		width: 30,
		height: 'auto',
	},
	spacingPaper: {
		height: '100%',
		padding: 0,
		paddingTop: 0,
		paddingBottom: 0,
	},
	textFields:{
		flex: 1,
	},
	textField:{
		alignSelf: 'stretch',
	},
	textFieldResize: {
		fontSize: 25,
		fontWeight: 400,
	},
	textcontainer:{
		height: '350px',
	},
	bottomTools:{ 
		position: 'absolute',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent:'space-between',
		bottom: '0px',
		width: '100%',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	inputCloseContainer:{
		position: 'absolute',
		top: '0px',
		right: '0px',
		zIndex: 3
	},
	inputConfigContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		alignSelf: 'flex-end',
	},
	inputMicContainer: {
		alignSelf: 'flex-start',
	},
	inputSelect:{
		display: 'flex',
		flexDirection: 'row',
		wrap: 'nowrap',
	},
	tabs:{
		borderBottom: '1px solid rgba(0,0,0, 0.6)',
	},
    control: {
      padding: theme.spacing(2),
	},
	listContainer:{
		padding: 50,
		paddingTop: 0,
		paddingBottom: 0,
		height: 230,
	},
	listItem: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		height: 'auto',
		cursor: 'text',
		padding: 5,
	},
	spacing: {

	}
}));

export const flexContainer = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	padding: 0,
};

export const BootstrapInput = withStyles((theme) => ({
	root: {
	  'label + &': {
		marginTop: theme.spacing(3),
	  },
	},
	input: {
	  borderRadius: 4,
	  position: 'relative',
	  backgroundColor: theme.palette.background.paper,
	  border: 'none',
	  fontSize: 16,
	  padding: '10px 26px 10px 12px',
	  transition: theme.transitions.create(['border-color', 'box-shadow']),
	  // Use the system font instead of the default Roboto font.
	  fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	  ].join(','),
	  '&:focus': {
		background: 'transparent',		
		boxShadow: 'none',
	  },
	},
}))(InputBase);
//0 0 0 0.2rem rgba(0,123,255,.25)