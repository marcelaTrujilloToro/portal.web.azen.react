import React from "react";
import { OpcionPreferido } from "../../../../../models/opciones-preferidas/OpcionPreferido";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

type PreferidoProps = {
  preferido: OpcionPreferido;
};

const useEstilos = makeStyles((theme) => ({
  list: {
    padding: 0,
  },
  listaItem: {
    padding: 3,
    color: "#ecf7e6",
    margin: 0,
    maxWidth:165
  },
  icono: {
    color: "white",
  },
  itemIcono: {
    minWidth: 30,
  },
  contenedorItem: {
    paddingLeft: 8,
    paddingRight: 8,
  },
}));

const PreferidoItem: React.FC<PreferidoProps> = (props) => {
  const classes = useEstilos();

  return (
    <List component="ul" className={classes.list}>
      <ListItem button className={classes.contenedorItem}>
        <ListItemIcon className={classes.itemIcono}>
          <StarRoundedIcon className={classes.icono} />
        </ListItemIcon>
        <ListItem
          className={classes.listaItem}
        >{props.preferido.descrOpc}</ListItem>
      </ListItem>
    </List>
  );
};

export default PreferidoItem;
