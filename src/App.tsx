import React from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu';

const items = [
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
  return (
    <>
    <Sidemenu items={items[0]}></Sidemenu>
    </>
  );
}

export default App;
