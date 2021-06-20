import React, { FC } from 'react'
import { ListItem, ListItemText, List } from '@material-ui/core'
import { ISidemenuItem } from '../models/ISidemenuItem'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles({
  active: {
    borderLeft: '3px solid',
  },
  text: {
    '& >span': {
      display: 'flex',
      alignItems: 'center',
    }
  },
});

const SidemenuItem: FC<ISidemenuItem> = ({ name, children, setMainText, currentMain} : ISidemenuItem) => {
  const [isActive, setisActive] = useState(true);
  const classes = useStyles();

    const handleClick = () => {
        setisActive(!isActive)
        if(setMainText){
          setMainText(name)
        }
    }

    return (
      <>
        <ListItem className={currentMain === name ? classes.active : ''} button dense >
          <ListItemText className={classes.text} onClick={handleClick}>
          { children ?  !isActive ? <ExpandLessIcon /> : <ExpandMoreIcon /> : null}

          <span >{name}</span>
          </ListItemText>
        </ListItem>

        {Array.isArray(children) && !isActive ? (
          <List disablePadding dense>
            {children.map((child) => (
              <SidemenuItem
                key={child.name}
                {...child}
                setMainText={setMainText}
                currentMain={currentMain}
              />
            ))}
          </List>
        ) : null}
      </>
    )
  }


export default SidemenuItem

