import React from 'react'

import { Box, FormControl, Select, MenuItem, FormGroup } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton'
import MicIcon from '@material-ui/icons/Mic';
import CreateIcon from '@material-ui/icons/Create';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import { CustomIcon } from './CustomIcon';

import { useStyles, BootstrapSelect } from '../../../styles/global';
import { BootstrapInput } from '../../../styles/global';

export const FooterTools = (props) => {
    // Classes from global
    const classes = useStyles();
    const [icon, setIcon] = React.useState();
    // This returns a state of state.
    const _handleSelect = (e) => {
        var current_icon = e.target.value;
        setIcon(current_icon);
    };
    // Props
    const textbox_value = props.textboxValue;
    const is_first_textbox = Boolean(props.textboxIndex === 0);
    if(is_first_textbox){
        return (
            <Box className={classes.bottomTools} display="flex">
                <Box className={classes.inputMicContainer} width="auto">
                    <IconButton aria-label="delete">
                        <MicIcon />
                    </IconButton >
                </Box>
                { 
                // This components bellow allow users 
                // to use virtual keyboards, handwriting and etc..  
                }
                <Box width="auto" className={classes.inputConfigContainer}>
                    <label> { textbox_value.length }/100 </label>
                    <FormControl component="fieldset">
                        <FormGroup>
                            { 
                            // This component identify which value it's selected 
                            // from <Select/> component and return a Icon 
                            }
                            <Box className={classes.inputSelect}>
                            
                            <CustomIcon icon={icon}/>
                            <Select
                                dropDownMenuProps={<BootstrapSelect />}
                                onChange={_handleSelect}
                                input={<BootstrapInput />}
                                value={null}
                                boxShadow={0}
                            >
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
            </Box>
        );
    } else {
        return null;
    }
} 
