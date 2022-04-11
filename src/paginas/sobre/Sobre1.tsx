import { AppBar, Box, Toolbar,  Typography, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

import img from "../../assets/img/img.jpeg";
import { Link } from 'react-router-dom';
import './Sobre1.css';
import { TokenState } from '../../store/tokens/tokensReducer';

function Sobre1() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
      return (
            <>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Box className='cursor'>
                            <Typography variant="h5" color="inherit">
                                
                            </Typography>
                        </Box>

                        <Box display="flex" justifyContent="start">
                            <Link to="/sobre1" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        Leonardo
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to="/sobre2" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        Curriculo
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to="/sobre3" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        Meus Conhecimentos 
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to="/sobre4" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        Como cheguei até aqui 
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to="/sobre5" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        Meu Pitch 
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Toolbar>

                <h1 className='p10'>Leonardo Rodrigues</h1>

                <Grid className='p10'> 
                    <img src={img} width="500px" />
            </Grid>
            </AppBar>
            </>
      );
}

export default Sobre1;