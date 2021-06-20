import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemText, List } from '@material-ui/core'
import { ISidemenuItem } from '../models/ISidemenuItem'

const SidemenuItem: FC<ISidemenuItem> = ({ name, children} : ISidemenuItem) => {
    return (
      <>
        <ListItem button dense >
          <ListItemText>
            <span>{name}</span>
          </ListItemText>
        </ListItem>
        {Array.isArray(children) ? (
          <List disablePadding dense>
            {children.map((child) => (
              <SidemenuItem
                key={child.name}
                {...child}
              />
            ))}
          </List>
        ) : null}
      </>
    )
  }


export default SidemenuItem

