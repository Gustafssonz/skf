import React, { FC } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { ISidemenuItem } from '../models/ISidemenuItem';
import SidemenuItem from './SidemenuItem';

export interface SidemenuProps {
    data: ISidemenuItem[];
};

const Sidemenu: FC<SidemenuProps> = ({data}) => {
    // const children = data;
    return (
        <div className="sidebar">
      <List disablePadding dense>
        {data.map((sidebarItem, index) => (
          <SidemenuItem
            key={`${sidebarItem.name}${index}`}
            {...sidebarItem}
          />
        ))}
      </List>
    </div>
    )
}

export default Sidemenu

