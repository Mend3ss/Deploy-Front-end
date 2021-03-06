import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";

import './index.css';
import ListagemProjetos from './Pages/Projetos/ListagemProjetos';
import Login from './Pages/Login/Login';
import CadastroU from './Pages/CadastroUsuario/CadastroU';
import reportWebVitals from './reportWebVitals';
import CadastroProjetos from './Pages/Projetos/CadastroProjetos';


const routing = (
  <Router>
    <div>
      <Routes>
        <Route exact path='/ListaProjetos' element={<ListagemProjetos />} />
        <Route path = '/CadastroProjetos' element={<CadastroProjetos />}/>
        <Route exact path = '/' element = {<Login/>}/>
        <Route exact path = '/Login' element = {<Login/>}/>
        <Route exact path = '/CadastroUsuario' element = {<CadastroU/>}/>
      </Routes>
    </div>
  </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
