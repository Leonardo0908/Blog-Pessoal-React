import { AppBar, Box, Toolbar,  Typography, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokensReducer';
import './Sobre4.css';
function Sobre4() {
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

                <Grid> 
                    <Grid>
                        
                    </Grid>
                    <Grid>
                        COMO CHEGUEI ATE AQUI
                    </Grid>
                </Grid>
            </AppBar>
            </>
      );
}

export default Sobre4;