import React from 'react';
// Core components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
// Models
import { languages, translate } from '../models/constant';
// Styles
import { useStyles } from '../styles/global'; 
// External components
import { TextBox } from './TextBox';
import { Headbar } from './Headbar';
import { FlexibleDivider } from './Divider/FlexibleDivider';
// Store for global reducers
import { Context } from '../store/Store';

export default function AppLayout() {
	const classes = useStyles();
	const [languageValue, setLanguageValue] = React.useState(languages);
	// Global reducer state
    const [textValue, setTextValue] = React.useContext(Context);

	const getOutputValue = () => {
		if(!textValue){
			return translate[0].text;
		} else {
			return textValue.output;
		}
	}

	return (
		<div className={classes.root}>
		<Grid container direction="column" spacing={3}>
			<Grid container className={classes.textFieldContainer} justify="center" spacing={0}>
				<Paper 
					className={`${classes.paper} ${classes.spacingPaper}`} 
					elevation={4}>

					<Headbar items={languageValue}/>
					<List className={`${classes.flexContainer} ${classes.listContainer}`}>
						{ 
							languageValue.map((value, index) => {
								if(index === 0){
									return <ListItem 
												key={value.id} 
												className={classes.listItem}>
												<TextBox 
													position={index}
													items={value}
													ids={value.id}/>
												<FlexibleDivider index={index}/>
											</ListItem>;
								} else {
									return <ListItem 
												key={value.id} 
												className={classes.listItem}>
												<div className={`${classes.textFields} ${classes.sourceWrap}`}>
													<Grid className={classes.sourceInput}>
														<Grid className={classes.inputWrap}>
															<div className={`${classes.textField} ${classes.textFieldResize} ${classes.outputField}` }>
																{ getOutputValue() }
															</div>
														</Grid>
													</Grid>
												</div>
										  </ListItem>;
								}
							}) 
						}
					</List>

				</Paper>
			</Grid>
		</Grid>
		</div>
	);
}
