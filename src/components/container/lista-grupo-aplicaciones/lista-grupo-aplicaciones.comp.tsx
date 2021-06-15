import { Typography } from '@material-ui/core';
import React from 'react';
import { GrupoAplicaciones } from '../../../models/grupo-aplicaciones/GrupoAplicaciones';
import ListaAplicaciones from '../lista-aplicaciones/lista-aplicaciones.comp';

type ListaGrupoAplicacionesProps = {
    grupoAplicaciones: GrupoAplicaciones[] | undefined;
};

const ListaGrupoAplicaciones: React.FC<ListaGrupoAplicacionesProps> = (props) => {
   
    if (props.grupoAplicaciones === undefined) {
        <Typography variant="h5">No hay aplicaciones disponibles</Typography>
    }
    else {
        return (
            <>
              { props.grupoAplicaciones.map((grupoAplicaciones) => {
                 return(
                     <>
                     <Typography variant="h5" >{grupoAplicaciones.area}</Typography>
                     <ListaAplicaciones listaAplicaciones={grupoAplicaciones.aplicaciones}></ListaAplicaciones>

                     </>
                 ) 
              })}  
            </>
        )

    }
    
}; 

export default ListaGrupoAplicaciones;
