import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { UserState } from '../../store/user/userReducer'

import Postagem from '../../models/Postagem';

import User from '../../models/User'
import { busca, buscaId } from '../../services/Service'

import './Perfil.css'

function Perfil() {

    let history = useHistory()

    const [posts, setPosts] = useState<Postagem[]>([])

    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        
    })

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: "",
        texto: "",
        tema: null,
        usuario: user
      })

    

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history.push("/login")
        }
    }, [token])

    // Métedo para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function getUser() {
        await busca("/postagens/all", setPosts, {
          headers: {
            'Authorization': token
          }
        })
      }
    

    useEffect(() => {

        getUser()
    
      }, [posts.length])

    return (
        <>
       
        <Box className='card-principal'>
            <Box className='card-container-imagem'>
                <img className='card-imagem'
                    src={ user.foto }
                    alt={ user.nome} />
            </Box>

            <Box className='card-container-info'>
                <Box>
                    <h1>{ user.nome }</h1>
                    <hr />
                </Box>
                {
        posts.map(post => (    
            
                <Box m={2} >
            <Card variant="outlined"  className='ca2'>
              <CardContent>
              <Typography variant="body2" component="p">
                 Autor: {post.usuario?.nome}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Postagem
                </Typography>
                <Typography variant="h5" component="h2">
                  {post.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.tema?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
             ))
            }
            </Box>
                
        </Box>
        
        </>
    )
}

export default Perfil