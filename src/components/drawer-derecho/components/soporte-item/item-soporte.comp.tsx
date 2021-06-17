import React from "react";
import { List, ListItem, ListItemIcon, makeStyles } from "@material-ui/core";
import { OpcionSoporte } from "../../../../models/opciones-soporte/OpcionSoporte";
import DescriptionIcon from '@material-ui/icons/Description';

type SoporteProps = {
    frecuente: OpcionSoporte;
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
  
  const SoporteItem: React.FC<SoporteProps> = (props) => {
  
      const classes = useEstilos();
  
    return (
      <List component="ul" className={classes.list}>
        <ListItem button>
          <ListItemIcon >
            <DescriptionIcon className={classes.color}/>
          </ListItemIcon>
          <ListItem className={classes.listaItem}>{props.frecuente.opc}</ListItem>
          <ListItem className={classes.listaItem} >{props.frecuente.descr}</ListItem>
        </ListItem>
      </List>
    );
  };
  
  export default SoporteItem;
