import React from "react";
import { List, ListItem, ListItemIcon, makeStyles } from "@material-ui/core";
import BarChartIcon from '@material-ui/icons/BarChart';
import { Aplicacion } from "../../../models/grupo-aplicaciones/Aplicacion";

type AplicacionProps = {
  aplicacion: Aplicacion;
};

const useEstilos = makeStyles((theme) => ({
    list:{
        padding: 0,
    },
    listaItem: {
        padding: 5,
        color: "#061101"
    },
    color:{
        color: "#3cad06"
    }

}));

const AplicacionItem: React.FC<AplicacionProps> = (props) => {

    const classes = useEstilos();

  return (
    <List component="ul" className={classes.list}>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon className={classes.color}/>
        </ListItemIcon>
        <ListItem>
        <ListItem className={classes.listaItem}>{props.aplicacion.apl}</ListItem>
        <ListItem className={classes.listaItem}>{props.aplicacion.descr}</ListItem>
        </ListItem>
      </ListItem>
    </List>
  );
};

export default AplicacionItem;
