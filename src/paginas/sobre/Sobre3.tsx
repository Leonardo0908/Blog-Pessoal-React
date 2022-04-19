import { AppBar, Box, Toolbar,  Typography, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import './Sobre3.css';
import { UserState } from '../../store/user/userReducer';

function Sobre3() {
    const token = useSelector<UserState, UserState["tokens"]>(
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
                        Sempre pensando em melhorar e estar sempre pronto para os desafios e estar apto a tudo que possa enfrentar, sempre uma pessoa muito curiosa e em busca de mais conhecimento e estar sempre me perguntando como posso melhorar minha perguntas e minhas 
                    </Grid>
                </Grid>
            </AppBar>
            </>
      );
}

export default Sobre3;