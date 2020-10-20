import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { MovieFilter } from '@material-ui/icons';
import { CssBaseline, Grid } from '@material-ui/core';
import useWindowPosition from '../hook/useWindowPosition';
import teamMembers from "../static/teamMembers";
import TeamMemberCard from './TeamMemberCard';
import TagArray from './TagArray';
import teamMemberTags from "../static/teamMemberTags";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 15,
        width: 'fit-content',
        paddingTop: 11,
        fontFamily: 'Alef',
    },
    box: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 15,
        color: 'white',
        padding: 0,
        height: 300,
        width: 300,
        boxShadow: '0 3px 5px 2px rgba(255, 142, 164, 0.3)',
        textAlign: 'center',
    },
    imgBox: {
        // need to make responsive/ auto resizing
        height: '10rem',
        width: '10rem',
        top: -9,
        objectFit: 'cover',
        borderRadius: 1,
        position: 'relative',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 30,
    },

    name: {
        marginTop: '-.4rem',
        fontSize: '2rem',
    },
    desc: {
        marginTop: '-3rem',
        fontSize: '1.5rem',
        color: 'rgba(255, 255, 255, 0.7)',
    },
    bio: {
        marginTop: '-2rem',
        fontSize: '1rem',
        marginLeft: '2rem',
        marginRight: '2rem',
        color: 'rgba(255, 255, 255, 0.8)',
    }
}));

export default function ProfileCard({ member }) {
    const classes = useStyles(); 
    return (
        <div className={classes.container}>
            <div className={classes.box}>
                <img className={classes.imgBox} src={member.imageUrl} alt='profile-pic'/>
                <h4 className={classes.name}>{ member.name }</h4>
                <h5 className={classes.desc}>{ member.description }</h5>
                <p className={classes.bio}>Hi! This is a placeholder for a brief bio. Tags below.</p>
            </div>
        </div>
    )
}