import { Fab } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Languages from '../../views/Languages';
import Footer from './components/Footer';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: 0,
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        paddingTop: 8
      }
    },
    content: {
      height: '100%'
    },
    fab: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: theme.zIndex.appBar + 2
    },
    menuItem: {
      justifyContent: 'space-between'
    },
    openInNewIcon: {
      marginLeft: theme.spacing(2)
    }
  }),
);

const Main: React.FC = () => {
  const classes = useStyles();

  const fabRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(true);
  };

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <main className={classes.content}>
        <HashRouter basename="/languages">
          <Fab
            color="primary"
            aria-label="add"
            className={classes.fab}
            onClick={handleMenuOpen}
            ref={fabRef}
          >
            <AddIcon />
          </Fab>
          <Switch>
            <Redirect
              exact
              from="/"
              to="/overview"
            />
            <Route
              component={Languages}
              exact
              path="/:tab"
            />
            <Route
              component={Languages}
              exact
              path="/:tab/:id"
            />
          </Switch>
          <Footer />
        </HashRouter>
      </main>
    </div >
  );
};

export default Main;
