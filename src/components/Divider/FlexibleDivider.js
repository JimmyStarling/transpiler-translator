import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider';

import { useStyles } from './../../styles/global';

export const FlexibleDivider = (props) => {
    const classes = useStyles();

    const textboxIndex = props.index; 
    if (textboxIndex === 0){
        return (<Divider 
                    className={classes.divider}
                    style={{ height:'100%' }} 
                    orientation="vertical" 
                    flexItem 
                />);
    } else {
        return null;
    }
}
