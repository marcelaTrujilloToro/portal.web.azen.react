import React from "react";
import { OpcionPreferido } from "../../../../../models/opciones-preferidas/OpcionPreferido";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PreferidoItem from "../preferido-item/item-preferido.comp";
import { Divider, makeStyles } from "@material-ui/core";

type ListaPreferidosProps = {
  listaPreferidos: OpcionPreferido[] | undefined;
};

const useEstilos = makeStyles((theme) => ({
  fuenteTitulo: {
      color: "#1f5803",
  }
}));


const ListaPreferidos: React.FC<ListaPreferidosProps> = (props) => {

  const classes = useEstilos();

  if (props.listaPreferidos === undefined) {
    return (
      <Typography variant="h5" className={classes.fuenteTitulo}>
        No hay opciones preferidas
      </Typography>
    );
  } else {
    return (
      <>
        <Typography variant="h5" className={classes.fuenteTitulo}>
          Preferidos
        </Typography>
        <Grid container>
          {props.listaPreferidos.map((opcionPreferida) => {
              

              
            return (
              <>
              <PreferidoItem
                key={opcionPreferida.opc}
                preferido={opcionPreferida}
              ></PreferidoItem>
               <Divider orientation="horizontal" flexItem />
              </>
              
            );
          })}
        </Grid>
      </>
    );
  }
};
export default ListaPreferidos;
