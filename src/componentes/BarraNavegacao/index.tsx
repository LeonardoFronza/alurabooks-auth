import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BotaoNavegacao from "../BotaoNavegacao";
import ModalCadastroUsuario from "../ModalCadastroUsuario";
import ModalLoginUsuario from "../ModalLoginUsuario";
import logo from "./assets/logo.png";
import usuario from "./assets/usuario.svg";
import "./BarraNavegacao.css";

const BarraNavegacao = () => {
  const [modalAberta, setModalAberta] = useState(false);
  const [modalAbertaLogin, setModalAbertaLogin] = useState(false);

  let navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  const [usuarioLogado, setUsuarioLogado] = useState<boolean>(token != null);

  const aoEfetuarLogin = () => {
    setModalAberta(false)
    setUsuarioLogado(true)
  }

  const efetuarLogaout = () => {
    setUsuarioLogado(false);
    sessionStorage.removeItem('token');
    navigate('/');
  }

  return (
    <nav className="ab-navbar">
      <h1 className="logo">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo da AluraBooks" />
        </Link>
      </h1>
      <ul className="navegacao">
        <li>
          <a href="#!">Categorias</a>
          <ul className="submenu">
            <li>
              <Link to="/">Frontend</Link>
            </li>
            <li>
              <Link to="/">Programação</Link>
            </li>
            <li>
              <Link to="/">Infraestrutura</Link>
            </li>
            <li>
              <Link to="/">Business</Link>
            </li>
            <li>
              <Link to="/">Design e UX</Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="acoes">
        {!usuarioLogado && (
          <>
            <li>
              <BotaoNavegacao
                texto="Login"
                textoAltSrc="Icone representando um usuário"
                imagemSrc={usuario}
                onClick={() => setModalAbertaLogin(true)}
              />
            </li>
            <li>
              <BotaoNavegacao
                texto="Cadastrar-se"
                textoAltSrc="Icone representando um usuário"
                imagemSrc={usuario}
                onClick={() => setModalAberta(true)}
              />
              <ModalCadastroUsuario
                aberta={modalAberta}
                aoFechar={() => setModalAberta(false)}
              />
              <ModalLoginUsuario
                aberta={modalAbertaLogin}
                aoFechar={() => setModalAbertaLogin(false)}
                aoEfetuarLogin={aoEfetuarLogin}
              />
            </li>
          </>
        )}

        {usuarioLogado && (
            <>
            <li>
              <Link to="/minha-conta/pedidos"> Minha Conta </Link>
            </li>
            <li>
              <BotaoNavegacao 
              texto="Logout"
              textoAltSrc="Icone representando um usuário"
              imagemSrc={usuario}
              onClick={efetuarLogaout}
              ></BotaoNavegacao>
            </li>
            </>
        )}
      </ul>
    </nav>
  );
};

export default BarraNavegacao;
