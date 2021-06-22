import React from "react";
import { OpcionPreferido } from "../../../../../models/opciones-preferidas/OpcionPreferido";
import { Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
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
        color: "#ecf7e6"
    },
    color:{
        color: "white"
    }
    
  }));

const PreferidoItem: React.FC<PreferidoProps> = (props) => {

    const classes = useEstilos();

  return (
    <List component="ul" className={classes.list}>
      <ListItem button alignItems="flex-start">
        <ListItemIcon >
          <StarRoundedIcon className={classes.color}/>
        </ListItemIcon>
        <ListItemText className={classes.listaItem} primary={props.preferido.opc} secondary={props.preferido.descrOpc}></ListItemText>
      </ListItem>
    </List>
  );
};

export default PreferidoItem;
