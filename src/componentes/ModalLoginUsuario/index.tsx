import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks";
import { useState } from "react";
import http from "../../http";

import imagemPrincipal from "./assets/login.png";

interface IProps {
  aberta: boolean;
  aoFechar: () => void;
  aoEfetuarLogin: () => void;
}

const ModalLoginUsuario = ({ aberta, aoFechar,aoEfetuarLogin }: IProps) => {
  const [email, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const usuario = {
      email,
      senha,
    };
    http.post('public/login', usuario).then(
        (resposta) => {
            sessionStorage.setItem('token', resposta.data.access_token)
            setLogin('')
            setSenha('')
            aoEfetuarLogin()
        }
    ).catch(erro => {
        if(erro?.response?.data?.message) {
            alert(erro.response.data.message)
        }else {
            alert("Deu ruim menor, qualé")
        }
    })
  };
  return (
    <AbModal titulo="Login" aberta={aberta} aoFechar={aoFechar}>
      <section className="corpoModalCadastro">
        <figure>
          <img
            src={imagemPrincipal}
            alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura"
          />
        </figure>
        <form onSubmit={aoSubmeterFormular}>
          <AbCampoTexto label="E-mail" value={email} onChange={setLogin} />
          <AbCampoTexto
            label="Senha"
            value={senha}
            onChange={setSenha}
            type="password"
          />
          <div className="acoes">
            <AbBotao texto="Fazer Login" />
          </div>
        </form>
      </section>
    </AbModal>
  );
};

export default ModalLoginUsuario;
