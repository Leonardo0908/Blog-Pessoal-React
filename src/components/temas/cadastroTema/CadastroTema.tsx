import React, {useState, useEffect, ChangeEvent} from 'react'
import {Typography, TextField, Button, Grid, Box } from "@material-ui/core"
import {useHistory, useParams } from 'react-router-dom'
import './CadastroTema.css';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import { toast } from 'react-toastify';



function CadastroTema() {
    let history = useHistory();
    const { id } = useParams<{id: string}>();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      );
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: '',
        
    })



    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
                });
            history.push("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }

        function updatedTema(e: ChangeEvent<HTMLInputElement>) {

            setTema({
                ...tema,
                [e.target.name]: e.target.value,
               
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("tema " + JSON.stringify(tema))
    
            if (id !== undefined) {
                // TRY: Tenta executar a atualização 
            try {
                await put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })

                toast.success('Tema atualizado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });

                // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error('Dados inconsistentes.', {
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

            // Se o ID for indefinido, tente Cadastrar
        } else {

            // TRY: Tenta executar o cadastro
            try {
                await post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })

                toast.success('Tema cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
                // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error('Dados inconsistentes.', {
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

        back()
    
        }
    
        function back() {
            history.push('/temas')
        }
  
    return (
        <>
        <Grid container direction='row' justifyContent='center' alignItems='center' className="topo">
        <Grid >
            <Box >
            <form onSubmit={onSubmit} className="caixa2" >
                <Typography 
                    className="tituloTema"
                    variant="h3" 
                    color="textSecondary"
                    component="h1" 
                    align="center" >Digite um Tema de Livro...
                </Typography>

                <TextField 
                    className="textfield1"
                    value={tema.descricao} 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} 
                    id="descricao" 
                    label="descricao" 
                    variant="outlined" 
                    name="descricao" 
                    margin="normal" fullWidth />
                <Button type="submit" variant="contained" className='btfinalizar' >
                    Finalizar
                </Button>

            </form>
            </Box>
            </Grid>
        </Grid>
        </>
    )
}

export default CadastroTema;