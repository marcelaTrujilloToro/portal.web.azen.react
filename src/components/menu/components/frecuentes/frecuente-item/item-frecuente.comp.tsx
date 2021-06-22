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
        padding: 5,
        color: "#ecf7e6",
    },
    icono:{
        color: "white"
    }
    
}));

const FrecuenteItem: React.FC<FrecuenteProps> = (props) => {

    const classes = useEstilos();

  return (
    <List component="ul" className={classes.list}>
      <ListItem button>
        <ListItemIcon >
          <RepeatRoundedIcon className={classes.icono}/>
        </ListItemIcon>
        <ListItemText className={classes.listaItem} primary={props.frecuente.opc} secondary={props.frecuente.descrOpc}></ListItemText>
      </ListItem>
    </List>
  );
};

export default FrecuenteItem;