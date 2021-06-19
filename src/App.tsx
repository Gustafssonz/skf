import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Sidemenu, { SidemenuProps } from './components/Sidemenu';
import { SidemenuItem } from './models/SidemenuItem';

export const dataObjects = [
  {
     "data":[
        {
           "name":"Some node 1",
           "children":[
              {
                 "name":"Some node 1.1",
                 "children":[
                    {
                       "name":"Some node 1.1.1"
                    }
                 ]
              },
              {
                 "name":"Some node 1.2"
              },
              {
                 "name":"Some node 1.3",
                 "children":[
                    {
                       "name":"Some node 1.3.1"
                    }
                 ]
              },
              {
                 "name":"Some node 1.4"
              }
           ]
        },
        {
           "name":"Some node 2"
        }
     ]
  }
  ]


function App() {

  const API_URL = "https://run.mocky.io/v3/624b1431-6ef2-4899-8597-a8036477da73"
  const [data, setdata] = useState("")
  const loadData = async() => {
    const result = await (await fetch(API_URL)).json()
    setdata(result);
    console.log(result)
  }
  // Försökte separera "data" ifrån arrayen med objekten.
  useEffect(() => {

  });

  // Här gör jag en fullösning, eftersom Rad 9 har en wrapper object "data" så vet jag inte
  // hur interfacet ska hantera strukturen.
  const items: SidemenuItem[] = dataObjects[0].data;

  return (
    <>
    <Sidemenu data={items}></Sidemenu>
    </>
  );
}

export default App;
