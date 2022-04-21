import React, { useEffect, useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box, CardContent, Button, CardActions, Grid, Card } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';
import User from '../../../models/User';
import { UserState } from '../../../store/user/userReducer';
import { busca, buscaId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import Postagem from '../../../models/Postagem';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  const [posts, setPosts] = useState<Postagem[]>([])

  const id = useSelector<UserState, UserState["id"]>(
    (state) => state.id
  );

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
      <TabContext value={value}  >
        <AppBar position="static" className="back2">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab className="botao5" label="Todas as postagens" value="1" />
            <Tab className="botao5" label="Sobre-nós" value="2" />
            <Tab className="botao5" label="Minhas Postagens" value="3" />

          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ut eveniet natus totam et, voluptate dicta tempore alias, odio nobis non eius cupiditate minima inventore pariatur! Ipsum itaque consectetur voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit consequuntur suscipit fugiat, nam quis quod quaerat veritatis et, vel ratione beatae, facere neque! Quo animi porro voluptate saepe deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci, officia aut quidem dolorum deserunt iure dolorem doloribus velit nobis quas consequatur at ullam odit, nesciunt est nulla nihil excepturi!</Typography>
        </TabPanel>

        <TabPanel value="3">

          <>
                {
                  posts.map(post => (
                    <Box m={2} >
                      <Card variant="outlined" className='ca2'>
                        <CardContent>
                          <Typography variant="h6" component="h2" className='auto' >
                            autor: {post.usuario?.nome}
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
          </>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;