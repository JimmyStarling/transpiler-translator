import React from 'react'
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { useStyles } from '../styles/global';
import Box from '@material-ui/core/Box';

export const Headbar = (props) => {
    const [value, setValue] = React.useState(0);
    var itemsArray = props.items;
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.headbarContainer}>
            <Box
                className={classes.tabs}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    { itemsArray
                        .map((val, index) => {
                            while(index <= 3){
                                return (<Tab key={val.id} label={val.lang} />);
                            }
                        })
                    }
                </Tabs>
            </Box>
            <Box className={classes.headbarIcon}>
                <SyncAltIcon />
            </Box>
            <Box
                className={`${classes.tabs} ${classes.tabRight}` }>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    { itemsArray
                        .map((val, index) => {
                            if(index !== 0){
                                while(index <= 3){
                                    return (<Tab key={val.id} label={val.lang} />);
                                }
                            }
                        })
                    }
                </Tabs>
            </Box>
        </div>
    )
}
