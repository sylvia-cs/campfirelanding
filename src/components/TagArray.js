import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    fontFamily: 'Alef',
  },
  chip: {
    backgroundColor: '#ffffff',
    
  },
  icon: {
    borderRadius: '50%', 
  }, 
}));

export default function Chips({tags}) {
  const classes = useStyles();

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  
  return (
    <div className={classes.root}>
      
      {tags.map(tag => {
          return (
            <Chip 
                id="chip"
                className={classes.chip}
                icon={<Icon className={classes.icon} style={{backgroundColor: tag.color}}/>}
                label={tag.title}
                onClick={handleClick}
            />     
           )
            
      })}
      </div>
        
  );
}
