import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Aplicacion } from '../../../../models/grupo-aplicaciones/Aplicacion';
import ItemAplicacion from '../item-aplicacion/item-aplicacion.comp';

type ListaAplicacionesProps = {
    listaAplicaciones: Aplicacion[] | undefined;
};

const useEstilos = makeStyles((theme) => ({
    fuenteTitulo: {
        color: "#337303",
    }
}));

const ListaAplicaciones: React.FC <ListaAplicacionesProps> = (props) => {
    const classes = useEstilos();
   
    if (props.listaAplicaciones === undefined) {
        return(
            <Typography variant="h5" className={classes.fuenteTitulo}>No hay aplicaciones disponibles</Typography>
        )
    }else{

        return (
            <>

            <Typography variant="h5" className={classes.fuenteTitulo}></Typography>
            <Grid container>
              {props.listaAplicaciones.map((aplicacion) => {
                  return <ItemAplicacion key={aplicacion.apl} aplicacion={aplicacion}></ItemAplicacion>
              })}
            </Grid>

            </>
        )
    };
};
export default ListaAplicaciones;
