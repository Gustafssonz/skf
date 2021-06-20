import React, { FC } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { ISidemenuItem } from '../models/ISidemenuItem';
import SidemenuItem from './SidemenuItem';
import { useState } from 'react';
import { useEffect } from 'react';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export interface SidemenuProps {
    data?: ISidemenuItem[];
};

type ItemProps = {
  setMainText: Function
  currentMain?: string
}

const Sidemenu: React.FC<ItemProps> = ({setMainText, currentMain}) => {
    const classes = useStyles();
    const API_URL = "https://run.mocky.io/v3/624b1431-6ef2-4899-8597-a8036477da73"
    const [data, setdata] = useState<ISidemenuItem[]>()

    const loadData = async() => {
      const result: SidemenuProps = await (await fetch(API_URL)).json()
      setdata(result.data);
    }

    useEffect(() => {
      loadData();
    }, []);

    if (data){
      return (
        <div className={classes.root}>
        <List disablePadding dense>
          {data.map((sidebarItem, index) => (
            <SidemenuItem
              key={`${sidebarItem.name}${index}`}
              {...sidebarItem}
              setMainText={setMainText}
              currentMain={currentMain}
            />
          ))}
        </List>
        </div>
      )
    } else {
      return <div> No Data found </div>;
    }
}

export default Sidemenu

