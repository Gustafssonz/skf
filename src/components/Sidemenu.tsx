import React, { FC } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';

interface Sidemenu {
    items: []
}

const Sidemenu: FC<Sidemenu> = ({items}) => {
    return (
        <>
    <List disablePadding dense>
    {items.map(({ name, children}) => (
        <ListItem key={name}>
          <ListItemText>{name}</ListItemText>
        </ListItem>
      ))}
    </List>
    </>
    )
}

export default Sidemenu

