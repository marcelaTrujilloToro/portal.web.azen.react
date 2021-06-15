import {
    useQuery,
} from 'react-query';

import useAzenApi from '../../api/useAzenApi';
import { GrupoAplicaciones } from '../../models/grupo-aplicaciones/GrupoAplicaciones';

export const useGrupoAplicaciones = () => {
    
    const azenApi = useAzenApi();

    return useQuery<GrupoAplicaciones[]>(['grupoAplicaciones'], async () => {
        const { data } = await azenApi.get(`grupoAplicaciones`);
        return data;
    }, {
        retry: 1,
    });
};