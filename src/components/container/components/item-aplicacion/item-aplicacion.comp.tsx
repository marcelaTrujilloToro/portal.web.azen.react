import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import BarChartIcon from '@material-ui/icons/BarChart';
import { Aplicacion } from "../../../../models/grupo-aplicaciones/Aplicacion";

type AplicacionProps = {
  aplicacion: Aplicacion;
};

const useEstilos = makeStyles((theme) => ({
    list:{
        padding: 0,
    },
    listaItem: {
        padding: 5,
        color: "#061101",
        margin: 0
    },
    color:{
        color: "#3cad06"
    },
    itemIcono:{
      minWidth: 30
    },
    contenedorItem: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom:7,
      paddingTop:7
    },

}));

const AplicacionItem: React.FC<AplicacionProps> = (props) => {

    const classes = useEstilos();

  return (
    <List component="ul" className={classes.list}>
      <ListItem button className={classes.contenedorItem}>
        <ListItemIcon className={classes.itemIcono}>
          <BarChartIcon className={classes.color}/>
        </ListItemIcon>
        <ListItemText className={classes.listaItem} primary={props.aplicacion.apl} secondary={props.aplicacion.descr}></ListItemText>
      </ListItem>
    </List>
  );
};

export default AplicacionItem;
