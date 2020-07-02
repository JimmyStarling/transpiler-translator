import { makeStyles } from '@material-ui/core/styles';

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
		padding: 0,
		paddingTop: 0,
		paddingBottom: 0,
	},
	textFields:{
		flex: 1,
	},
	textField:{
	},
	textFieldResize: {
		fontSize: 62,
		fontWeight: 700,
	},
	textcontainer:{
		height: '350px',
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
		height: 'auto',
	},
	listItem: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		height: '100%',
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