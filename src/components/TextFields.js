import React from 'react'
import TextField from '@material-ui/core/TextField';

import { useStyles } from '../styles/global';

export const TextFields = (props) => {
    var items = props.items;
    var index = props.order;
    const classes = useStyles();

    return (
        <div className={classes.textFields} >
            <TextField
                fullWidth
                id={`text-${items.lang}`} 
                className={classes.textField}
                placeholder={items.text}
                InputProps={{ disableUnderline: true }}
                multiline
            />
        </div>
    )
}
