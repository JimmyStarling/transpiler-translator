import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import CreateIcon from '@material-ui/icons/Create'
import KeyboardIcon from '@material-ui/icons/Keyboard'

import { useStyles } from '../../../styles/global';

export const CustomIcon = (props) => {
    // Classes from global
    const classes = useStyles();
    // Props
    var icon_index = props.icon; 
    if(icon_index === 10){
        return  <IconButton 
                    className={classes.iconButton} 
                    aria-label="Write" 
                    component="span"
                    onClick={() => {return alert('Testing :)');}}>
                    <CreateIcon/>
                </IconButton>;
    }else if(icon_index === 20){
        return  <IconButton className={classes.iconButton} aria-label="Virtual Keyboard - DVORAK" component="span">
                    <KeyboardIcon/>
                </IconButton>;
    }else if(icon_index === 30){
        return  <IconButton className={classes.iconButton} aria-label="Virtual Keyboard" component="span">
                    <KeyboardIcon/>
                </IconButton>;
    } else {
        return <IconButton className={classes.iconButton} aria-label="upload picture" component="span" onClick={() => {return alert('hello :)');}}>
                    <CreateIcon/>
                </IconButton>;
    }
};