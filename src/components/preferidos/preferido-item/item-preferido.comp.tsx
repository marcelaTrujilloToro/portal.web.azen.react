import React from "react";
import { OpcionPreferido } from "../../../models/opciones-preferidas/OpcionPreferido";
import { List, ListItem, ListItemIcon, makeStyles } from "@material-ui/core";
import StarRoundedIcon from '@material-ui/icons/StarRounded';

type PreferidoProps = {
  preferido: OpcionPreferido;
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

const PreferidoItem: React.FC<PreferidoProps> = (props) => {

    const classes = useEstilos();

  return (
    <List component="ul" className={classes.list}>
      <ListItem button>
        <ListItemIcon >
          <StarRoundedIcon className={classes.color}/>
        </ListItemIcon>
        <ListItem className={classes.listaItem}>{props.preferido.opc}</ListItem>
        <ListItem className={classes.listaItem} >{props.preferido.descrOpc}</ListItem>
      </ListItem>
    </List>
  );
};

export default PreferidoItem;
