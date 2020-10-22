import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { MovieFilter } from '@material-ui/icons';
import { CssBaseline, Grid } from '@material-ui/core';
import useWindowPosition from '../hook/useWindowPosition';
import teamMembers from "../static/teamMembers";
import TagArray from './TagArray';
import teamMemberTags from "../static/teamMemberTags";
import ProfileCard from './ProfileCard';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh', 
        display: 'flex', 
        // justifyContent: 'center', 
        // alignItems: 'center', 
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column', 
        },
    },
    titleWrapper: {
        margin: '3rem',
    },

    title: {
        fontFamily: 'Alef',
        fontSize: '6rem',
        margin: '-1rem',
        color: 'white',
    },
}))

export default function() {
    const classes = useStyles(); 
    return (
        <div className={classes.root} id="ourTeam">
            <Grid>
                container
                spacing={6}
                justify="center"
                alignItems="center"
            </Grid>
            <Grid item xs={12}>
                <div className={classes.titleWrapper}>
                    <h1 className={classes.title}>our team</h1>
                </div>
            </Grid>
            <Grid>
                <div> {
                    teamMembers.map(member => <ProfileCard member={member} />)
                    }
                </div>
            </Grid>

            
        </div>
    )
}