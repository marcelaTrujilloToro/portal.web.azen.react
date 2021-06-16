import { Divider, Grid, ListItemIcon, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { GrupoAplicaciones } from "../../../models/grupo-aplicaciones/GrupoAplicaciones";
import ListaAplicaciones from "../lista-aplicaciones/lista-aplicaciones.comp";
import BusinessIcon from '@material-ui/icons/Business';
import './lista-grupo-aplicaciones.style.css';

type ListaGrupoAplicacionesProps = {
  listaGrupoAplicaciones: GrupoAplicaciones[] | undefined;
};

const useEstilos = makeStyles((theme) => ({
  
  icono: {
      color: "#068fad"
  },
  color:{
      color: "#184502"
  }

}));

const ListaGrupoAplicaciones: React.FC<ListaGrupoAplicacionesProps> = (props) => {

  const classes = useEstilos();
  
  if (props.listaGrupoAplicaciones === undefined) {
    return <Typography>No hay secos</Typography>;
  } else {
    return (
      <Grid container>
        {props.listaGrupoAplicaciones.map((grupoAplicaciones) => {
          return (
            <>
              <ListItemIcon>
                <BusinessIcon className={classes.icono}/>
              </ListItemIcon>
              <Typography variant="h6" className={classes.color}>{grupoAplicaciones.area}</Typography>
              <ListaAplicaciones
                listaAplicaciones={grupoAplicaciones.aplicaciones}
              ></ListaAplicaciones>
              <hr className="pa-division-aplicaciones"/>
            </>
          );
        })}
      </Grid>
    );
  }
};
export default ListaGrupoAplicaciones;
