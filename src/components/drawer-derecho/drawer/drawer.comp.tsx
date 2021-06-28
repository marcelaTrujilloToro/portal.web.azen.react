import React from "react";
import { Drawer, makeStyles, Typography } from "@material-ui/core";
import {useOpcionesSoporte} from '../../../hooks/opciones-soporte/useOpcionesSoporte.hook';
import ListaSoporte from '../components/lista-soporte/lista-soporte.comp';
import { BorderRight } from "@material-ui/icons";

const useEstilos = makeStyles((theme) => ({
  drawer: {
    width: 200,
    flexShrink: 0,
  },
  drawerPaper: {
      width: 180,
      backgroundColor: '#3cad06',
      alignItems: 'center',
      color: "white",
      
  },
  toolbar: theme.mixins.toolbar,
}));

const DrawerDerecho = (props: any) => {

  const classes = useEstilos();

  const { data: respuesta} = useOpcionesSoporte();

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
      <div className={classes.toolbar}></div>
    <Typography variant="h5" color="initial" >Soporte</Typography>
    <ListaSoporte listaSoportes={respuesta}></ListaSoporte>
    </Drawer>
  );
};

export default DrawerDerecho;