import React from "react";
import { Drawer, makeStyles } from "@material-ui/core";
import { useDatosIniciales } from "../../../hooks/datos-iniciales/useDatos.hook";
import { useOpcionesPreferidas } from "../../../hooks/opciones-preferidas/useOpcionesPreferidas.hook";
import { useOpcionesFrecuentes } from "../../../hooks/opciones-frecuentes/useOpcionesFrecuentes.hook";
import ListaPreferidos from "../components/preferidos/lista-preferidos/lista-preferidos.comp";
import ListaFrecuentes from "../components/frecuentes/lista-frecuentes/lista-frecuentes.comp";
import './menu.style.css';

const useEstilos = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
},
drawerPaper: {
    width: 240,
    backgroundColor: '#3cad06',
    alignItems: 'center'
},
toolbar: theme.mixins.toolbar,
}));

const MenuComp = (props: any) => {

  const classes = useEstilos();

  const {data: respuesta} = useDatosIniciales();
  const {data: respuestaOpcionesPreferidas} = useOpcionesPreferidas();
  const {data: respuestaOpcionesFrecuentes} = useOpcionesFrecuentes();


  return (
    <Drawer

      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <img className="pa-logo-azen" src={respuesta?.logoAzen} alt="logo azen" />
      <hr className="pa-division-menu"/>
      {/* <div className={classes.toolbar}></div> */}
      <ListaPreferidos listaPreferidos={respuestaOpcionesPreferidas}/>
      {/* <div className={classes.toolbar}></div> */}
      <hr className="pa-division-menu"/>
      <ListaFrecuentes listaFrecuentes= {respuestaOpcionesFrecuentes}/>
    </Drawer>
  );
};

export default MenuComp;