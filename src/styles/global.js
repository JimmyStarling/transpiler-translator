import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
	},
	headbarContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
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
		top: '0px',
		right: '0px',
		height: '100%',
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
		width: `100%`,
		height: '100%',
		padding: 5,
	},
	/** Container wrap */
	sourceWrap: {
		
	},
	/** BottomTools & Grid wrap */
	sourceInput: {

	},
	/** TextField & TopTools wrap */
	inputWrap: {
		paddingTop: 20,
		paddingLeft: 30,
		paddingRight: 30,
	},
	textField:{
		height: 72,
		alignSelf: 'stretch',
	},
	textFieldResize: {
		fontSize: 25,
		fontWeight: 400,
	},
	textFieldContainer:{
		height: 'auto',//350px',
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
		top: '20px',
		right: '15px',
		zIndex: 3
	},
	inputConfigContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		alignSelf: 'flex-end',
		marginRight: '20px',
	},
	inputMicContainer: {
		alignSelf: 'flex-start',
	},
	inputSelect:{
		display: 'flex',
		flexDirection: 'row',
		wrap: 'nowrap',
	},
	iconButton:{
		flex: '1',
	},
	headbarIcon: {
		position: 'absolute',
		padding: '10px',
	},
	tabs:{
		flex: '1',
		borderBottom: '1px solid rgba(0,0,0, 0.2)',
	},
	tabRight:{
		paddingLeft: '50px',
	},
    control: {
      padding: theme.spacing(2),
	},
	listContainer:{
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
	  fontSize: 12,
	  padding: '5px 5px 5px 5px',
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

export const BootstrapSelect = withStyles((theme) => ({
	background: 'transparent',
	menuStyle:{
		border: "1px solid black",
		borderRadius: "5%",
		backgroundColor: 'lightgrey',
	},
}))(Select);