import React from "react";
import { OpcionPreferido } from "../../../models/opciones-preferidas/OpcionPreferido";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PreferidoItem from "../preferido-item/item-preferido.comp";

type ListaPreferidosProps = {
  listaPreferidos: OpcionPreferido[] | undefined;
};

const ListaPreferidos: React.FC<ListaPreferidosProps> = (props) => {
  if (props.listaPreferidos === undefined) {
    return (
      <Typography variant="h5" color="initial">
        No hay opciones preferidas
      </Typography>
    );
  } else {
    return (
      <>
        <Typography variant="h5" color="textSecondary">
          Preferidos
        </Typography>
        <Grid container>
          {props.listaPreferidos.map((opcionPreferida) => {
              
            return (
              <PreferidoItem
                key={opcionPreferida.opc}
                preferido={opcionPreferida}
              ></PreferidoItem>
            );
          })}
        </Grid>
      </>
    );
  }
};
export default ListaPreferidos;
