import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '100%'
  },
});

type ItemProps = {
  text: string
}

export const Main: FC<ItemProps> = ({ text }) => {
  const classes = useStyles();

  return <div className={classes.root}>{text}</div>;
};