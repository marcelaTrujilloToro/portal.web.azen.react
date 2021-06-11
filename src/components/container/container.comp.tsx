import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../nav-bar/nav-bar.comp";
import { Hidden } from "@material-ui/core";
import MenuComp from "../menu/menu.comp";


const useEstilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const ContainerComp = () => {
    
  const classes = useEstilos();

  const [abrirMenu, setAbrirMenu] = useState<boolean>(false);

  const accionAbrir = () => {
    setAbrirMenu(!abrirMenu);
  };

  return (
    <div className={classes.root}>
      <NavBar accionAbrir={accionAbrir} />
      <Hidden xsDown>
        <MenuComp variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <MenuComp variant="temporary" open={abrirMenu} onClose={accionAbrir} />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        contenido
        
      </div>
    </div>
  );
};

export default ContainerComp;