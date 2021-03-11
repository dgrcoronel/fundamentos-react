import React from "react";

import "./App.css";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAluno from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaFilho";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Contador2 from "./components/contador/Contador2";

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">

      <Card titulo="#13 - Contador com componentes" color="#424242">
          <Contador2 numeroInicial={10}></Contador2>
        </Card>

        <Card titulo="#12 - Contador" color="#424242">
          <Contador numeroInicial={10}></Contador>
        </Card>

        <Card titulo="#11 - Componente Controlado" color="#E45F56">
          <Input></Input>
        </Card>

        <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
          <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="#09 - Comunicação Direta" color="#59323C">
          <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="#08 - ParOuImpar" color="#982395">
          <ParOuImpar>{21}</ParOuImpar>
          <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
          <UsuarioInfo usuario={{}}></UsuarioInfo>
        </Card>

        <Card titulo="#07 - Lista Produtos" color="#3A9AD9">
          <ListaProdutos></ListaProdutos>
        </Card>

        <Card titulo="#06 - Repetição" color="#FF4C65">
          <ListaAluno></ListaAluno>
        </Card>

        <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
          <Aleatorio min={1} max={10} />
        </Card>
        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>
        <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3}
          />
        </Card>
        <Card titulo="#01 - Primeiro Componente" color="#588C73">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
}
