import React from "react";
import { Drawer, makeStyles, Typography } from "@material-ui/core";


const useEstilos = makeStyles((theme) => ({
  drawer: {
    width: 200,
    flexShrink: 0,
},
drawerPaper: {
    width: 200,
    backgroundColor: '#3cad06',
    alignItems: 'center',
    justifyContent: 'center',
    color: "white"
},
toolbar: theme.mixins.toolbar,
}));

const DrawerDerecho = (props: any) => {

  const classes = useEstilos();

  return (
    <Drawer

      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="right"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
    <Typography variant="h5" color="initial" >Soporte</Typography>
    <Typography variant="h6" color="initial" >Documentación</Typography>
    </Drawer>
  );
};

export default DrawerDerecho;