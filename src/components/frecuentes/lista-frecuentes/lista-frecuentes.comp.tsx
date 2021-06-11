import React from 'react';
import { OpcionFrecuente } from '../../../models/opciones-frecuentes/OpcionFrecuente';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FrecuenteItem from '../frecuente-item/item-frecuente.comp';



type ListaFrecuentesProps = {
    listaFrecuentes: OpcionFrecuente[] | undefined;
}

 const ListaFrecuentes: React.FC<ListaFrecuentesProps> = (props) => {
   
    if (props.listaFrecuentes === undefined) {
        return(
            <Typography variant="h5" color="initial">No hay opciones preferidas</Typography>
        )
    }else{

        return (
            <>

            <Typography variant="h5" color="textSecondary">Frecuentes</Typography>
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