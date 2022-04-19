import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import { addId, addToken } from "../../store/user/action";
import { toast } from 'react-toastify';
import './Login.css';

function Login() {
    let history = useHistory()

    const dispatch = useDispatch()

    const [token, setToken] = useState('')

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        token: "",
        foto: ""
    })

    // Crie mais um State para pegar os dados retornados a API
    const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
        id: 0,
        nome:'',
        usuario: '',
        senha: '',
        token: '',
        foto: ""
    })

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token))
            history.push('/home')
        }
    }, [token])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value           
        })
    }

    useEffect(() => {
        if(respUserLogin.token !== ""){

            // Verifica os dados pelo console (Opcional)
            console.log("Token: " + respUserLogin.token)
            console.log("ID: " + respUserLogin.id)

            // Guarda as informações dentro do Redux (Store)
            dispatch(addToken(respUserLogin.token)) 
            dispatch(addId(respUserLogin.id.toString()))    // Faz uma conversão de Number para String
            history.push('/home')
        }
    }, [respUserLogin.token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault()
            try{
                await login(`/usuarios/logar`, userLogin, setRespUserLogin)
                toast.success('Usuário logado com sucesso!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
            }catch(error){
                toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
            }
        }

    return (
        <>
       
        <Grid container direction='row' justifyContent='center' alignItems='center' className="fundo">
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit} className="caixa" >
                        <Typography
                            variant='h3' 
                            gutterBottom 
                            color='textPrimary' 
                            component='h3' 
                            align='center' 
                            className='textos1'> Entrar </Typography>
                        
                        <TextField 
                            value={userLogin.usuario} 
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                            id='usuario' 
                            label='usuário' 
                            variant='outlined' 
                            name='usuario' 
                            margin='normal'
                            type="email" 
                            style={{backgroundColor: "#FFEFD5"}}
                            fullWidth />
                        
                        <TextField 
                            value={userLogin.senha} 
                            onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                            id='senha' 
                            label='senha' 
                            variant='outlined' 
                            name='senha' 
                            margin='normal' 
                            type='password'
                            style={{backgroundColor: "#FFEFD5"}}
                            fullWidth />

                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' className='btlogar'>
                                    Logar
                                </Button>
                        </Box>

                        <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos2'>Cadastre-se</Typography>
                        </Link>
                            
                    </Box>
                    </form>
                    
                </Box>
            </Grid>
           
        </Grid>
        </>
    );
}

export default Login;