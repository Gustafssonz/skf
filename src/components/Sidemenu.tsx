import React, { FC } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { SidemenuItem } from '../models/SidemenuItem';

export interface SidemenuProps {
    data: SidemenuItem[];
};

const Sidemenu: FC<SidemenuProps> = ({data}) => {
    // const children = data;
    return (
        <>
    <List disablePadding dense>
    {data.map(({ name, children}) => (
        <ListItem key={name}>
          <ListItemText>{name}</ListItemText>
        </ListItem>
      ))}
    </List>
    </>
    )
}

export default Sidemenu

