import React from "react";
import { List, ListItem, ListItemIcon, makeStyles } from "@material-ui/core";
import RepeatRoundedIcon from "@material-ui/icons/RepeatRounded";
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
        color: "#cae1c4"
    },
    color:{
        color: "white"
    }

}));

const AplicacionItem: React.FC<AplicacionProps> = (props) => {

    const classes = useEstilos();

  return (
    <List component="ul" className={classes.list}>
      <ListItem button>
        <ListItemIcon>
          <RepeatRoundedIcon className={classes.color}/>
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
