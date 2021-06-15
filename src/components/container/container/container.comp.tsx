import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";
import NavBar from "../../nav-bar/nav-bar.comp";
import MenuComp from "../../menu/menu/menu.comp";
import DrawerDerecho from "../../drawer-derecho/drawer/drawer.comp";
import BoxAplicaciones from "../../container/box-aplicaciones/box-aplicaciones.comp";

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
  const [abrirSoporte, setAbrirSoporte] = useState<boolean>(false);

  const accionAbrir = () => {
    setAbrirMenu(!abrirMenu);
  };

  const accionAbrirSoporte = () => {
    setAbrirSoporte(!abrirSoporte);
  };

  return (
    <div className={classes.root}>
      <NavBar accionAbrir={accionAbrir} accionAbrirSoporte={accionAbrirSoporte}/>
      <Hidden xsDown>
        <MenuComp variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <MenuComp variant="temporary" open={abrirMenu} onClose={accionAbrir} />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <BoxAplicaciones/>
      </div>
      <Hidden smDown>
        <DrawerDerecho variant="permanent" open={true} />
      </Hidden>
      <Hidden mdUp>
        <DrawerDerecho
          variant="temporary"
          open={abrirSoporte}
          onClose={accionAbrirSoporte}
        />
      </Hidden>
    </div>
  );
};

export default ContainerComp;
