import React from 'react';
import {useGrupoAplicaciones} from '../../../hooks/grupos-aplicaciones/useGrupoAplicaciones.hook';
import ListaGrupoAplicaciones from '../lista-grupo-aplicaciones/lista-grupo-aplicaciones.comp';


const BoxAplicaciones = () => {

    const {data: respuesta} = useGrupoAplicaciones();
    
    console.log(JSON.stringify("respuesta "+ respuesta));

    return (
        <div>
            <ListaGrupoAplicaciones grupoAplicaciones={respuesta}></ListaGrupoAplicaciones>
        </div>
    )
};
export default BoxAplicaciones;
