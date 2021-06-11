import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    IconButton,
    Icon, Grid,
} from "@material-ui/core";

import { useDatosIniciales } from "../../hooks/datos-iniciales/useDatos.hook";
import './nav-bar.style.css';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  title: {
    flexGrow: 3,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
      
    },
    backgroundColor: "#4e9c3a"
  },
}));

const NavBar = (props: any) => {

    const {data: respuesta} = useDatosIniciales();

    const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="menu"
        className={classes.menuButton}
        onClick={() => props.accionAbrir()}
      >
         <Icon color="inherit">menu</Icon>
      </IconButton>

      <Grid container spacing={1}>
        {/* <Grid item>
          <img className="pa-logo-azen" src={respuesta?.logoAzen} alt="" />
        </Grid> */}
        <Grid>
          <img  className="pa-logo-cliente" src={respuesta?.logoCliente} alt="" />
        </Grid>
        <Grid>
          <Typography variant="h6">{respuesta?.cliente}</Typography>
        </Grid>
      </Grid>
      
    </Toolbar>
  </AppBar>
  );
};
export default NavBar;