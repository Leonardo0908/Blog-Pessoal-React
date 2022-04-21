import React , {useState, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import { toast } from 'react-toastify';

function CadastroUsuario() {

    let history = useHistory();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ""
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ""
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha && user.senha.length >= 8) {

            //Tenta executar o cadastro
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success("Usuário cadastrado com sucesso", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });

                //Se houver erro, pegue o Erro e retorna uma msg
            } catch (error) {
                console.log(`Error: ${error}`)

                //Pode modificar a msg de acordo com o erro 
                toast.error("Erro ao realizar o cadastro. Tente novamente", {
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

        } else {
            toast.error("Dados inconsistentes", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

            setUser({ ...user, senha: "" }) // Reinicia o campo de Senha
            setConfirmarSenha("")           // Reinicia o campo de Confirmar Senha
        }
    }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='imagem2'>
            <Grid item xs={12} ></Grid>
            
                <Box paddingX={10} >
                    <form onSubmit={onSubmit} className="caixa3" >
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                       
                        <TextField
                            value={user.nome} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                            id='nome' 
                            label='nome' 
                            variant='outlined' 
                            name='nome' 
                            margin='normal' 
                            style={{backgroundColor: "#A9A9A9" }}
                            fullWidth />
                      
                        <TextField
                            value={user.usuario} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='usuario' 
                            label='usuario' 
                            variant='outlined' 
                            name='usuario' 
                            margin='normal'
                            style={{backgroundColor: "#A9A9A9" }}
                            fullWidth />

                        <TextField
                            value={user.foto} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='foto' 
                            label='foto' 
                            variant='outlined' 
                            name='foto' 
                            margin='normal'
                            style={{backgroundColor: "#A9A9A9" }}
                            fullWidth />
                        
                        <TextField 
                            value={user.senha} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id='senha' 
                            label='senha' 
                            variant='outlined' 
                            name='senha' 
                            margin='normal' 
                            type='password' 
                            style={{backgroundColor: "#A9A9A9"}}
                            fullWidth />

                        <TextField 
                            value={confirmarSenha} 
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id='confirmarSenha' 
                            label='confirmarSenha' 
                            variant='outlined' 
                            name='confirmarSenha' 
                            margin='normal' 
                            type='password' 
                            style={{backgroundColor: "#A9A9A9" }}
                            fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar2'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' className="btcadastrar" >
                                    Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
           



        </Grid>
    );
}

export default CadastroUsuario;