import React, { Components } from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { MovieFilter } from '@material-ui/icons';
import { CssBaseline } from '@material-ui/core';
import useWindowPosition from '../hook/useWindowPosition';
import Map from './Map.js'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh', 
        display: 'flex', 
        // justifyContent: 'center', 
        // alignItems: 'center', 
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column', 
        },
        textAlign: 'center',
    },
    titleWrapper: {
        margin: '3rem',
    },

    title: {
        fontFamily: 'Alef',
        fontSize: '4.5rem',
        margin: '-1rem',
        color: 'white',
    },
}))

export default function() {
    const classes = useStyles();  
    return (
        <div className={classes.root}>
            <div className={classes.titleWrapper}>
                <h1 className={classes.title}>map:</h1>
                <Map />
            </div>
        </div>
    )
}