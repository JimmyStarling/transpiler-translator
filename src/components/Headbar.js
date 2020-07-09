import React from 'react'
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { useStyles } from '../styles/global';

export const Headbar = (props) => {
    const [value, setValue] = React.useState(0);
    var itemsArray = props.items;
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.headbarContainer}>
        <Tabs
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
        {itemsArray
            .map((val, index) => {
                var count = 0;
                if(val.id !== 1 && val.id !== 2){
                    count++;
                    return (<Tab key={val.id} label={val.lang} />);
                } else if ( count > 3 ){
                    return (<Tab key={val.id} icon={<SyncAltIcon />} />);
                }
                return index;
            })
        }
        </Tabs>
        </div>
    )
}
