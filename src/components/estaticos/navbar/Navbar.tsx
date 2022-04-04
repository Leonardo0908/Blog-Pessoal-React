import React from "react";
import {AppBar, Toolbar, Typography, Box} from "@material-ui/core"; 
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";

import "./Navbar.css";



function Navbar(){
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout(){
        dispatch(addToken(""));
        alert("Usuário deslogado")
        history.push('/login')
    }

    var navbarComponent;

    if(token != ""){
        navbarComponent = <AppBar position="static" className="back" >
             <Toolbar variant="dense"  >
                 <Box className="cursor"   >
                     <Typography variant="h5"  >
                    BlogPessoal
                     </Typography>
                 </Box>

                 <Box display="flex" justifyContent="start" id="home">

                    <Link to="/home" className="cursor">
                        <Box mx={1} >
                            <Typography variant="h6">
                                Home
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/posts" className="cursor">
                        <Box mx={1} >
                            <Typography variant="h6" >
                                Postagens
                            </Typography>
                        </Box>
                     </Link>

                     <Link to="/temas" className="cursor">
                        <Box mx={1} >
                            <Typography variant="h6" >
                                Temas
                            </Typography>
                        </Box>
                     </Link>

                    <Link to="/formularioTema" className="cursor">
                        <Box mx={1} >
                            <Typography variant="h6"  >
                                Cadastrar Temas
                            </Typography>
                        </Box>
                     </Link>
                    
                    <Link to="" className="cursor">
                        <Box mx={1} onClick={goLogout} >
                            <Typography variant="h6" >
                                Logout
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