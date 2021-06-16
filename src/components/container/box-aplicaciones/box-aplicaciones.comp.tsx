import { Box, Typography } from '@material-ui/core';
import React from 'react';
import {useGrupoAplicaciones} from '../../../hooks/grupos-aplicaciones/useGrupoAplicaciones.hook';
import ListaGrupoAplicaciones from '../lista-grupo-aplicaciones/lista-grupo-aplicaciones.comp';


const BoxAplicaciones = () => {

    const {data: respuesta} = useGrupoAplicaciones();
    
    if (respuesta === undefined) {
        return (
            <Typography variant="h5" >No hay aplicaciones disponibles</Typography>
        );
    }else{
        return(
            <Box>
                <ListaGrupoAplicaciones listaGrupoAplicaciones={respuesta}></ListaGrupoAplicaciones>
            </Box>
        )
    };
};
export default BoxAplicaciones;
