import React from "react";
import { OpcionFrecuente } from "../../../../../models/opciones-frecuentes/OpcionFrecuente";
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import './item.frecuentes.style.css';

type FrecuenteProps = {
  frecuente: OpcionFrecuente;
};

const useEstilos = makeStyles((theme) => ({
    list:{
        padding: 0,
    },
    listaItem: {
        padding: 3,
        color: "#ecf7e6",
        margin: 0,
        maxWidth:165
    },
    icono:{
        color: "white"
    },
    itemIcono:{
      minWidth: 30
    },
    contenedorItem: {
        paddingLeft: 8,
        paddingRight: 8
    }
    
}));

const FrecuenteItem: React.FC<FrecuenteProps> = (props) => {

    const classes = useEstilos();

  return (
    <List component="ul" className={classes.list} >
      <ListItem button className={classes.contenedorItem}>
        <ListItemIcon className={classes.itemIcono}>
          <RepeatRoundedIcon className={classes.icono}/>
        </ListItemIcon>
        <ListItem className={classes.listaItem} >
        {props.frecuente
        .descrOpc}
        </ListItem>
      </ListItem>
    </List>
  );
};

export default FrecuenteItem;