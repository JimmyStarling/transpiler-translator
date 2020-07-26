import React from 'react'
import { Grid,
         Box, 
         FormControl,
         TextField,
         IconButton, 
         Select, 
         MenuItem, 
         FormGroup } from '@material-ui/core';
// Icons
import CloseIcon from '@material-ui/icons/Close';
import MicIcon from '@material-ui/icons/Mic';
import CreateIcon from '@material-ui/icons/Create';
import KeyboardIcon from '@material-ui/icons/Keyboard';
// Styles
import { useStyles } from '../../styles/global';
import { BootstrapInput } from '../../styles/global';
// Custom components
import { HeaderTools } from './components/HeaderTools';
import { FooterTools } from './components/FooterTools';
// Store for global reducers
import {Context} from '../../store/Store';

export const TextBox = React.memo((props) => {
    /** 
     *   Values received from the root container
     *   Theses variables will receive the selected 
     *   language input/output.
     * 
     **/
    var items = props.items;
    var textbox_index = props.position;
    var language = String(items.lang);
    // Classes from global.js
    const classes = useStyles();
    // State hooks variable. 
    const [textFieldValue, setTextFieldValue] = React.useState('');
    // Global reducer state
    const [textValue, setTextValue] = React.useContext(Context);
    
    // This will clear the selected textfield.
    const _setTextClear = () => {
        setTextFieldValue('');
        // Setting dispatch output value; dispatch = setTextValue
        setTextValue({type: 'REMOVE_OUTPUT'});
    };
    const _setTextValue = (e) => {
        var text = e.target.value;
        setTextFieldValue(text);
        // Setting dispatch output value; dispatch = setTextValue
        setTextValue({type: 'SET_OUTPUT', payload: textFieldValue});
    };

    return (
        <div className={`${classes.textFields} ${classes.sourceWrap}`}>
            <Grid className={classes.sourceInput}>
                <Grid className={classes.inputWrap}>
                    <HeaderTools eventListener={_setTextClear} textboxIndex={textbox_index} />
                    <TextField
                        fullWidth
                        id={`text-${language}`} 
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
                        onChange={_setTextValue}
                        inputProps={{ maxLength: 100 }}
                        multiline
                    />
                </Grid>
                <FooterTools textboxValue={textFieldValue} textboxIndex={textbox_index}/>
            </Grid>
        </div>
    );
});
