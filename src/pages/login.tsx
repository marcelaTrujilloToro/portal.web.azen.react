import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import "./login.css";

import { useDatosIniciales } from "../hooks/datos-iniciales/useDatos.hook";
import { useHistory } from "react-router";



const useStyles = makeStyles((theme) => ({
  
  paper: {
    margin: theme.spacing(10, 5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#3cad06",
    width: 80,
    height: 80,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: "#3cad06",
    color: "white",
  },
  icono: {
    width: 50,
    height: 50,
  },
  bienvenida: {
    color: "white",
    fontWeight: 400,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  item:{
    padding: 30
  }
 
}));


const LoginScreen = () => {
  const classes = useStyles();

  const { data: respuesta} = useDatosIniciales();

  const history = useHistory();

  return (
    <Grid container className="image">
      <CssBaseline />
      <Grid item xs={1} sm={4} md={7} className={classes.bienvenida}>
      
        <Typography
          variant="h1"
          className={classes.item}
          >
          Bienvenido
        </Typography>
        <img
          src={respuesta?.logoAzen}
          alt="logo azen"
          className={classes.item}
        />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={9} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon className={classes.icono} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingreso
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Usuario"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Contraseña"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="default"
              className={classes.submit}
              onClick={() => {
                
                history.replace({
                  pathname: `/`,
                });

              }}
            >
              Ingresar
            </Button>
          </form>
        </div>
      </Grid>
     
      
    </Grid>
  );
};

export default LoginScreen;
