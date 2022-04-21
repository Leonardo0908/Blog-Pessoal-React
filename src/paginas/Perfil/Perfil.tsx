import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import User from '../../models/User'
import { buscaId } from '../../services/Service'

import './Perfil.css'

import { toast } from 'react-toastify'
import { Grid } from '@mui/material'
import { UserState } from '../../store/user/userReducer'

function Perfil() {

    let history = useHistory()

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
        foto: ''
    })

    useEffect(() => {
        if (token === "") {
            toast.error('Você precisa estar logado.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/logar")
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

    return (
        <Grid xs={12}  className='card-principal' container spacing={2}>
            <Box className='card-container-imagem'>
                <img className='card-imagem'
                    src={user.foto}
                    alt={user.nome} />
            </Box>
            <h1 className='h1-nome-perfil'> {user.nome} </h1> 
            
            <Grid item xs={12 }   >
                
            </Grid>
            
            <Grid className="card-container-info card-container-texto" item xs={12} spacing={0}>
          
                <Box className='boxText-PerFil'>
                
                <h2>Descrição: </h2>
                <p className='card-container-texto'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam accusantium totam incidunt architecto maiores, perferendis eius. Tempora ullam magni dolore voluptatibus, quidem sunt tempore distinctio ut aliquam modi aliquid officiis.
                    Assumenda voluptatibus, animi pariatur voluptatum magnam ullam aspernatur optio suscipit incidunt dolor modi quos aperiam. Quam possimus rerum iste nobis quas porro unde sequi, sed nisi labore est voluptas corrupti.
                    Deleniti officiis sint perspiciatis nisi iste, voluptate sunt asperiores dolor sapiente non corporis omnis voluptatem soluta. Nulla odio alias aperiam, magnam eaque assumenda tempora! Inventore odit iure unde placeat iste.
                </p>

                <p className='card-container-texto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consectetur tempore enim hic ad, optio ratione repellendus et. Nemo facilis laborum eum facere ipsam ab ad iusto eligendi deleniti qui?
                </p>
                    
                </Box>

            </Grid>



        </Grid>
        
    )
}

export default Perfil