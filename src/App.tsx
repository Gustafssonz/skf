import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import Sidemenu from './components/Sidemenu';
import { makeStyles } from '@material-ui/core/styles';
import { FC } from 'react';

const useStyles = makeStyles({
   root: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
   },
   body: {
      display: 'flex',
      height: '100%'
   }
});

const App: FC = () => {
   const [mainText, setmainText] = useState("No response")
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Header></Header>
         <div className={classes.body}>
            <Sidemenu setMainText={setmainText} currentMain={mainText}></Sidemenu>
            <Main text={mainText}></Main>
         </div>
      </div>
   );
}

export default App;
