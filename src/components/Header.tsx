import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
        padding: '2rem',
        fontWeight: 800,
        borderBottom: 'inset',
        marginBottom: 20,
    },
  });


export const Header: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            SKF
        </div>
    )
}
