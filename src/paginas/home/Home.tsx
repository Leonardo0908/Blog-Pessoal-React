import React from "react";
import {Grid, Box, Typography, Button} from "@material-ui/core";

//import {Box, Paper, Button} from "@material-ui/core";

import "./Home.css";


function Home(){
    return (
        <>
           <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3f5185 "}}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold "}} > Seja bem Vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold "}} >Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1} >
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3f51b5", color: "wite" }}>Ver Postagens </Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="Imagem Aula" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;