// or, use google-map-react??
import { makeStyles } from '@material-ui/core/styles'; 
import React from 'react';

//  image: `{process.env.PUBLIC_URL + 'assets/map.png'}`,
const useStyles = makeStyles((theme) => ({
    container: {
    },
    map: {
        display: 'block',
        width: '100%',
        height: 'auto',
    },
    pin: {
        padding: '4rem 3rem',
        position: 'absolute',
        width: '10rem'
    },
    // pin:hover _what's the react version of this?

}))

// not sure how to overlay images..
export default function() {
    const classes = useStyles();  
    return (
        <div className={classes.container}>
            <img src={process.env.PUBLIC_URL + 'assets/map.png'} alt='map of US'></img>
            <img className={classes.pin} src={process.env.PUBLIC_URL + 'assets/pin.png'}></img>
        </div>
)
}