import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import {OpcionSoporte} from '../../../../models/opciones-soporte/OpcionSoporte';
import SoporteItem from '../soporte-item/item-soporte.comp';

type ListaSoportesProps = {
    listaSoportes: OpcionSoporte[] | undefined;
}

const useEstilos = makeStyles((theme) => ({
    fuenteTitulo: {
        color: "#1f5803",
    }
  }));

 const ListaSoporte: React.FC<ListaSoportesProps> = (props) => {

    const classes = useEstilos();
   
    if (props.listaSoportes === undefined) {
        return(
            <Typography variant="h5" className={classes.fuenteTitulo}>No hay opciones de soporte</Typography>
        )
    }else{

        return (
            <Grid container>
              {props.listaSoportes.map((opcionSoporte) => {
                  return <SoporteItem key={opcionSoporte.opc} frecuente={opcionSoporte}></SoporteItem>
              })}
            </Grid>

        )
    }
    
};
export default ListaSoporte;