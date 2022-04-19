import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import {Provider} from 'react-redux';
import store from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sobre1 from './paginas/sobre/Sobre1';
import Sobre2 from './paginas/sobre/Sobre2';
import Sobre3 from './paginas/sobre/Sobre3';
import Sobre4 from './paginas/sobre/Sobre4';
import Sobre5 from './paginas/sobre/Sobre5';
import Perfil from './paginas/Perfil/Perfil';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh' }}>

          <Route exact path='/'>
            <Login />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>
          <Route path='/temas'>
            <ListaTema />
          </Route>
          <Route path='/posts'>
            <ListaPostagem />
          </Route>

          <Route path='/sobre1'>
            <Sobre1 />
          </Route>

          <Route path='/sobre2'>
            <Sobre2 />
          </Route>

          <Route path='/sobre3'>
            <Sobre3 />
          </Route>

          <Route path='/sobre4'>
            <Sobre4 />
          </Route>

          <Route path='/sobre5'>
            <Sobre5 />
          </Route>

          <Route exact path='/formularioPostagem'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioPostagem/:id'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>
          <Route exact path='/formularioTema/:id'>
            <CadastroTema />
          </Route>
          <Route path='/deletarPostagem/:id'>
            <DeletarPostagem />
          </Route>
          <Route path='/deletarTema/:id'>
            <DeletarTema />
          </Route>

          <Route path='/perfil'>
              <Perfil />
          </Route>

        </div>
      </Switch>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
