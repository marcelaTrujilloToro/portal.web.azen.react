import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import {useGrupoAplicaciones} from '../../../../hooks/grupos-aplicaciones/useGrupoAplicaciones.hook';
import ListaGrupoAplicaciones from '../lista-grupo-aplicaciones/lista-grupo-aplicaciones.comp';


const useEstilos = makeStyles((theme) => ({
  
    fuente:{
        color: "#1f5803",
        padding: 30,
        fontWeight:500,
        fontFamily: 'Roboto'
    }
  
}));

const BoxAplicaciones = () => {


    const {data: respuesta} = useGrupoAplicaciones();
    
    const classes = useEstilos();

    if (respuesta === undefined) {
        return (
            <Typography variant="h4">No hay aplicaciones disponibles</Typography>
        );
    }else{
        return(

            <Box>
                <Typography variant="h4" align="center" className={classes.fuente}>APLICACIONES</Typography>
                <ListaGrupoAplicaciones listaGrupoAplicaciones={respuesta}></ListaGrupoAplicaciones>
            </Box>
        )
    };
};
export default BoxAplicaciones;
