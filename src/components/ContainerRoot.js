import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { useStyles } from '../styles/global'; 

import { TextFields } from './TextFields';
import { Headbar } from './Headbar';

export default function ContainerRoot() {
	/*const languages = [
		{
		id: 0,
		lang: 'english', 
		}, 
		{
		id: 1,
		lang: 'portuguese', 
		},
		{
		id: 2,
		lang: 'spanish', 
		}, 
		{
		id: 3,
		lang: 'japanese', 
		}, 
	];*/

	const selected_languages = [
		{
			id: 0,
			lang: 'Node.js', 
			text: '',
			output: false, // !IMPORTANT Utilizado na logica de tradução.
			input: true
		}, 
		{
			id: 1,
			lang: 'PHP', 
			text: 'Tradução',
			output: true, // !IMPORTANT Utilizado na logica de tradução.
			input: false
		}
	];

	const [itemsValue, setItemsValue] = React.useState(selected_languages);
	const classes = useStyles();

	const SpaceDynamic = (index, space) => {
		if(index !== 0) {
			return <Box px={space}></Box>;
		}
	};
	
	const ListDynamic = (index) => {
		if (index === 0) {
		  	return <Divider 
						className={classes.divider} 
						orientation="vertical" 
						flexItem 
					/>;
		}
	}

	return (
		<div className={classes.root}>
		<Grid container direction="column" spacing={3}>
			<Grid container className={classes.textFieldContainer} justify="center" spacing={0}>
				<Paper 
					className={`${classes.paper} ${classes.spacingPaper}`} 
					elevation={4}>

					<Headbar items={itemsValue}/>
					<List className={`${classes.flexContainer} ${classes.listContainer}`}>
						{itemsValue.map((value, index) => (
							<ListItem 
								key={value.id} 
								className={classes.listItem}>
								<TextFields 
									order={index}
									items={value}
									ids={value.id}/>
								{ ListDynamic(index) }
							</ListItem>
						))}
					</List>

				</Paper>
			</Grid>
		</Grid>
		</div>
	);
}
