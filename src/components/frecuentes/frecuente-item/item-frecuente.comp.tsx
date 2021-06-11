import React from "react";
import { OpcionFrecuente } from "../../../models/opciones-frecuentes/OpcionFrecuente";
import { List, ListItem, ListItemIcon, makeStyles } from "@material-ui/core";
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';

type FrecuenteProps = {
  frecuente: OpcionFrecuente;
};

const useEstilos = makeStyles((theme) => ({
    list:{
        padding: 0,
    },
    listaItem: {
        padding: 5,
        color: "white"
    },
    color:{
        color: "white"
    }
    
  }));

const FrecuenteItem: React.FC<FrecuenteProps> = (props) => {

    const classes = useEstilos();

  return (
    <List component="ul" className={classes.list}>
      <ListItem button>
        <ListItemIcon >
          <RepeatRoundedIcon className={classes.color}/>
        </ListItemIcon>
        <ListItem className={classes.listaItem}>{props.frecuente.opc}</ListItem>
        <ListItem className={classes.listaItem} >{props.frecuente.descrOpc}</ListItem>
      </ListItem>
    </List>
  );
};

export default FrecuenteItem;