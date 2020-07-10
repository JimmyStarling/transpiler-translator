import React from 'react'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';
import MicIcon from '@material-ui/icons/Mic';
import CreateIcon from '@material-ui/icons/Create';
import KeyboardIcon from '@material-ui/icons/Keyboard';

import { useStyles } from '../styles/global';
import { Box, FormControl, Select, MenuItem, FormGroup } from '@material-ui/core';
import { BootstrapInput } from './../styles/global';
import Grid from '@material-ui/core/Grid';

export const TextFields = (props) => {
    /** 
     *   Values received from the root container
     *   Theses variables will receive the selected 
     *   language input/output.
     * 
     **/
    var items = props.items;
    var item_order = props.order;
    var language = String(items.lang);
    // Classes from global.js
    const classes = useStyles();
    // State hooks variable. 
    const [textFieldValue, setTextFieldValue] = React.useState('');
    const [icon, setIcon] = React.useState();
    // This func will clear the selected textfield strings from state.
    const _handleClearText = () => {
        setTextFieldValue(' ');
    };
    // This func return a icon component to ControlLabel according to the <Select/> into ControlLabel props(e.g 'control={here}').
    const _handleSelect = (e) => {
        var current_icon = e.target.value;
        setIcon(current_icon);
    };
    // This func set textField value 
    const _handleText = (e) => {
        var text = e.target.value;
        setTextFieldValue(text);
    };
    const CustomIcon = () => {
        var current_icon = icon;
        if(current_icon === 10){
            return  <IconButton 
                        color="primary" 
                        aria-label="Write" 
                        component="span"
                        onClick={() => {return alert('hello :)');}}>
                        <CreateIcon/>
                    </IconButton>;
        }else if(current_icon === 20){
            return  <IconButton color="primary" aria-label="Virtual Keyboard - DVORAK" component="span">
                        <KeyboardIcon/>
                    </IconButton>;
        }else if(current_icon === 30){
            return  <IconButton color="primary" aria-label="Virtual Keyboard" component="span">
                        <KeyboardIcon/>
                    </IconButton>;
        } else {
            return <IconButton color="primary" aria-label="upload picture" component="span">
                        <CreateIcon/>
                    </IconButton>;
        }
    };

    // Theses two functions will return the components
    // only when it's the first TextField.
    const BottomTools = () => { 
        if(item_order === 0){
            return  <Box className={classes.bottomTools} display="flex">
                        <Box className={classes.inputMicContainer} width="auto">
                            <IconButton aria-label="delete">
                                <MicIcon />
                            </IconButton >
                        </Box>
                        {/** 
                        *   This components bellow allow users 
                        *   to use virtual keyboards, handwriting and etc..  
                        */}
                        <Box width="auto" className={classes.inputConfigContainer}>
                            <label> {textFieldValue.length}/100 </label>
                            <FormControl component="fieldset">
                                <FormGroup>
                                    {/** 
                                    *     This component identify which value it's selected 
                                    *     from <Select/> component and return a Icon 
                                    */}
                                    <Box className={classes.inputSelect}>
                                    
                                    <Select
                                        labelId="demo-simple-select-label"
                                        onChange={_handleSelect}
                                        value={0}
                                        renderValue={() => {
                                            return <CustomIcon/>;
                                        }}
                                        input={<BootstrapInput />}
                                    >
                                        <MenuItem>
                                            <CustomIcon/>
                                        </MenuItem>
                                        <MenuItem value={10}>
                                            <CreateIcon/>
                                            <label>Inglês</label>
                                        </MenuItem>
                                        <MenuItem value={20}>
                                            <KeyboardIcon/>
                                            <label>Inglês DVORAK</label>
                                        </MenuItem>
                                        <MenuItem value={30}>
                                            <KeyboardIcon/>
                                            <label>Inglês - Pesquisa escrita</label>
                                        </MenuItem>
                                    </Select>
                                    </Box>
                                </FormGroup>
                            </FormControl>
                        </Box>
                    </Box>;
        } else {
            return  <Box display="none"></Box>;
        }
    }
    const TopTools = () => { 
        if(item_order === 0){
            return  <Box className={classes.inputCloseContainer}>
                        <IconButton aria-label="delete" onClick={_handleClearText}>
                            <CloseIcon />
                        </IconButton >
                    </Box>
        } else {
            return  <Box display="none"></Box>;
        }
    }

    return (
        <div className={`${classes.textFields} ${classes.sourceWrap}`}>
            <Grid className={classes.sourceInput}>
                <Grid className={classes.inputWrap}>
                    <TopTools/> 
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
                        defaultValue={items.text}
                        value={textFieldValue}
                        onChange={_handleText}
                        inputProps={{ maxLength: 100 }}
                        multiline
                    />
                </Grid>
                <BottomTools/>
            </Grid>
        </div>
    );
}
