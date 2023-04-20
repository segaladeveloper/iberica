import React,{useState} from 'react';
import './style.css';
import { TextField, Button } from '@mui/material';
import { createRecord } from 'thin-backend';

const Cad_Instituicao = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  function salvar () {
    createRecord('instituicao', { nome: nome, descricao: descricao });

  }

  function validaNome (nome) {
    if (nome.length > 100)
    {
      return;
    }
    setNome(nome)
  }

  function validaDescricao (descricao) {
    if (descricao.length > 100)
    {
      return;
    }
    setDescricao(descricao)
  }

  return (
    <div>
      <h1>Cadastro de Instituição</h1>
      <div>
        <TextField required id="nome" label="Nome Instituição" variant="outlined" value={nome} onChange={(e) => validaNome(e.target.value)}/>
      </div>
      <div>
        <TextField required id="descricao" label="Descrição" variant="outlined" value={descricao} onChange={(e) => validaDescricao(e.target.value)}/>
      </div>
      <Button variant="contained" onClick={salvar}>Salvar</Button> 
    </div>
  );

}

export default Cad_Instituicao