import React from 'react'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';
import MicIcon from '@material-ui/icons/Mic';
import CreateIcon from '@material-ui/icons/Create';

import { useStyles } from '../styles/global';
import { Box } from '@material-ui/core';

export const TextFields = (props) => {
    var items = props.items;
    var index = props.order;
    const classes = useStyles();

    return (
        <div className={classes.textFields} >
            <Box>
                <IconButton aria-label="delete">
                    <CloseIcon />
                </IconButton >
            </Box>
            <TextField
                fullWidth
                id={`text-${items.lang}`} 
                className={classes.textField}
                placeholder={items.text}
                InputProps={{ 
                    classes: {
                        input: classes.textFieldResize
                    }, 
                    disableUnderline: true, 
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.textFieldResize
                    }
                }}
                multiline
            />
            <Box display="flex">
                <Box width="50%">
                    <IconButton aria-label="delete">
                        <MicIcon />
                    </IconButton >
                </Box>
                <Box width="50%">
                    <label> 0/100 </label>
                    <IconButton aria-label="delete">
                        <CreateIcon />
                    </IconButton >
                </Box>
            </Box>
        </div>
    )
}
