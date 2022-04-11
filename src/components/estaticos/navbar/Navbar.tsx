import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useHistory } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';
import LR from "../../../assets/img/LR.jpg";

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let history = useHistory();
    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

    if(token !== ""){
        navbarComponent = <AppBar position="static" className="back">
        <Toolbar variant="dense">
            <Box className='cursor'>
                <Typography variant="h5" color="inherit">
                    <img src={LR} alt="Leo" width="120px" />
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to="/home" className="cursor">
                    <Box mx={1} >
                        <Typography variant="h6" color="inherit">
                            home
                        </Typography>
                    </Box>
                </Link>
                <Link to="/posts" className="cursor">
                    <Box mx={1} >
                        <Typography variant="h6" color="inherit">
                            postagens
                        </Typography>
                    </Box>
                </Link>
                <Link to="/temas" className="cursor">
                <Box mx={1} >
                    <Typography variant="h6" color="inherit">
                        temas
                    </Typography>
                </Box>
                </Link>
                <Link to="/formularioTema" className="cursor">
                <Box mx={1} >
                    <Typography variant="h6" color="inherit">
                        cadastrar tema
                    </Typography>
                </Box>
                </Link>
                
                <Link to="/sobre1" className="cursor">
                    <Box mx={1} >
                        <Typography variant="h6" color="inherit">
                            Sobre
                        </Typography>
                    </Box>
                </Link>

                <Link to="" className="cursor">
                    <Box mx={1} onClick={goLogout}>
                        <Typography variant="h6" className="btSair">
                            Sair
                        </Typography>
                    </Box>
                 </Link>
                
            </Box>

        </Toolbar>
    </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;