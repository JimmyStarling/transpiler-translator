import React from 'react';
// Core components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
// Styles
import { useStyles } from '../styles/global'; 
// External components
import { TextFields } from './TextFields';
import { Headbar } from './Headbar';

export default function ContainerRoot() {
	// Languages dictionary
	const languages = [
		{
			id: 0,
			lang: 'Node.js', 
			text: '',
			output: false, // !IMPORTANT Utilizado with the translation logic.
			input: true
		}, 
		{
			id: 1,
			lang: 'PHP', 
			text: 'Tradução',
			output: true, // !IMPORTANT Utilized with the translation logic.
			input: false
		}
	];

	const [languageValue, setLanguageValue] = React.useState(languages);
	const classes = useStyles();

	const FlexibleDivider = (index) => {
		while(index === 0){
			return(
			<Divider 
				className={classes.divider} 
				orientation="vertical" 
				flexItem 
			/>);
		}
	};

	return (
		<div className={classes.root}>
		<Grid container direction="column" spacing={3}>
			<Grid container className={classes.textFieldTitleContainer}>
				<Typography variant="h3" gutterBottom>
					Translate Code
					<Typography variant="h6" gutterBottom>
						Easily
					</Typography>
				</Typography>
			</Grid>
			<Grid container className={classes.textFieldContainer} justify="center" spacing={0}>
				<Paper 
					className={`${classes.paper} ${classes.spacingPaper}`} 
					elevation={4}>

					<Headbar items={languageValue}/>
					<List className={`${classes.flexContainer} ${classes.listContainer}`}>
						{ 
							languageValue.map((value, index) => (
								<ListItem 
									key={value.id} 
									className={classes.listItem}>
									<TextFields 
										position={index}
										items={value}
										ids={value.id}/>
									{ FlexibleDivider(index) }
								</ListItem>
							)) 
						}
					</List>

				</Paper>
			</Grid>
		</Grid>
		</div>
	);
}
