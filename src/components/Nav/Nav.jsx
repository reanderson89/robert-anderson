import React from 'react';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Robert Anderson
          </Typography>
          <Button color="inherit">
            <NavLink to="/portfolio" style={{ textDecoration: 'none', color: "white" }}>
                Portfolio
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/about" style={{ textDecoration: 'none', color: "white" }}>
                About
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/contact" style={{ textDecoration: 'none', color: "white" }}>
                Contact
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
