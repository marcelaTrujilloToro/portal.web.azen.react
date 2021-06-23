import React from "react";
import { List, ListItem, ListItemIcon, makeStyles } from "@material-ui/core";
import { OpcionSoporte } from "../../../../models/opciones-soporte/OpcionSoporte";
import DescriptionIcon from '@material-ui/icons/Description';

type SoporteProps = {
    soporte: OpcionSoporte;
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
      },
      itemIcono:{
        minWidth: 40
      }
      
    }));
  
  const SoporteItem: React.FC<SoporteProps> = (props) => {
  
      const classes = useEstilos();
  
    return (
      <List component="ul" className={classes.list}>
        <ListItem button>
          <ListItemIcon className={classes.itemIcono} >
            <DescriptionIcon className={classes.color}/>
          </ListItemIcon>
          <ListItem className={classes.listaItem}>{props.soporte.opc}</ListItem>
        </ListItem>
      </List>
    );
  };
  
  export default SoporteItem;
