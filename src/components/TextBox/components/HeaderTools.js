import React, { Component } from 'react'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import { useStyles } from '../../../styles/global'

export const HeaderTools = (props) => {
    // Classes from global styles
    const classes = useStyles();
    const _index = props.textboxIndex;
    const _clearTextBox = props.eventListener;
    // If is the first textbox then
    while(_index === 0){
        return (
            <Box className={classes.inputCloseContainer}>
                <IconButton aria-label="delete" onClick={_clearTextBox}>
                    <CloseIcon />
                </IconButton >
            </Box>
        )
    }
    // Default return
    return null;
}
