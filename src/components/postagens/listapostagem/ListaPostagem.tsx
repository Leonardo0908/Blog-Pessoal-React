import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca, buscaId } from '../../../services/Service'
import { Box, Card, CardActions, CardContent, Button, Typography, Avatar } from '@material-ui/core';
import './ListaPostagem.css';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import { toast } from 'react-toastify';
import User from '../../../models/User';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  let history = useHistory();
  /*const { id } = useParams<{ id: string }>();*/

  const id = useSelector<UserState, UserState["id"]>(
    (state) => state.id
  );

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
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.info("Você precisa estar logado", {
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

  async function findByIdPostagem(id: string) {
    await buscaId(`postagens/${id}`, setPostagem, {
      headers: {
        'Authorization': token
      }
    })
  }


  async function getPost() {
    await busca("/postagens/all", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
      {
        posts.map(post => (
          <Box m={2} >
            <Card variant="outlined"  className='ca2'>
              <CardContent>
                <Typography variant="h4" color="textSecondary" gutterBottom>
                  Postagem
                </Typography>

                <div className="avatar" >
                  <Avatar alt="Perfil" src={post.usuario?.foto} />
                </div>

                <Typography variant="h6" component="h2" className='auto' >
                  Autor: {post.usuario?.nome}
                </Typography>

                <Typography variant="h6" component="h3" className='auto' >
                  Tema: {post.tema?.descricao}
                </Typography>
                
                <Typography variant="h6" component="h2" className='auto' >
                  Nome: {post.titulo}
                </Typography>

                <Typography variant="body1" component="p">
                  {post.texto}
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
    </>
  )
}

export default ListaPostagem;