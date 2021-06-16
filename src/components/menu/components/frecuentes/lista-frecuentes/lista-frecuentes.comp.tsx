import React from 'react';
import { OpcionFrecuente } from '../../../../../models/opciones-frecuentes/OpcionFrecuente';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FrecuenteItem from '../frecuente-item/item-frecuente.comp';
import { makeStyles } from '@material-ui/core';



type ListaFrecuentesProps = {
    listaFrecuentes: OpcionFrecuente[] | undefined;
}

const useEstilos = makeStyles((theme) => ({
    fuenteTitulo: {
        color: "#1f5803",
    }
  }));

 const ListaFrecuentes: React.FC<ListaFrecuentesProps> = (props) => {

    const classes = useEstilos();
   
    if (props.listaFrecuentes === undefined) {
        return(
            <Typography variant="h5" className={classes.fuenteTitulo}>No hay opciones preferidas</Typography>
        )
    }else{

        return (
            <>

            <Typography variant="h5" className={classes.fuenteTitulo}>Frecuentes</Typography>
            <Grid container>
              {props.listaFrecuentes.map((opcionPreferida) => {
                  return <FrecuenteItem key={opcionPreferida.opc} frecuente={opcionPreferida}></FrecuenteItem>
              })}
            </Grid>

            </>
        )
    }
    
};
export default ListaFrecuentes;