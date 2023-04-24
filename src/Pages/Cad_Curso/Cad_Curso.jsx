import { useEffect, useState } from 'react';
import * as React from 'react';
import './style.css';
import { query } from 'thin-backend';
import { TextField, Select, MenuItem, InputLabel, Button, Snackbar, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { createRecord } from 'thin-backend';

const Cad_Curso = () => {
    const [nome, setNome] = useState('');
    const [nivel, setNivel] = useState('');
    const [instituicao, setInstituicao] = useState('');
    const [descricao_curta, setDescricaoCurta] = useState('');
    const [descricao_longa, setDescricaoLonga] = useState('');
    const [preco, setPreco] = useState("0,00");
    const [preferido, setPreferido] = useState(false);

    const [niveis, setNiveis] = useState([]);
    const [instituicoes, setInstituicoes] = useState([]);

    const [openNivel, setOpenNivel] = useState(false);
    const [openInstituicao, setOpenInstituicao] = useState(false);

    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');

    const handleChangeNivel = (event) => {
      setNivel(event.target.value);
    };

    const handleChangeInstituicao = (event) => {
      setInstituicao(event.target.value);
    };
  
    const handleClose = () => {
      setOpenNivel(false);
      setOpenInstituicao(false);
    };
  
    const handleOpenNivel = () => {
      setOpenNivel(true);
    };

  
    const handleOpenInstituicao = () => {
      setOpenInstituicao(true);
    };
  
    useEffect(() => {
      query('nivel').fetch().then(results => {
        setNiveis(results)
      })
    }, []);

    useEffect(() => {
      query('instituicao').fetch().then(results => {
        setInstituicoes(results)
      })
    }, []);
  
    function salvar () {
      if (validadaCampos()){
        createRecord('curso', { nome: nome, nivel_id: nivel, instituicao_id: instituicao, descricao_curta: descricao_curta,
        descricao_detalhada: descricao_longa, preco: preco, imagem_url: null, imagem_thumnail_url: null, preferido:preferido}).then(
          function success(result) {
            setMessage('Curso criado com sucesso com ID:' + result.id);
            setShowMessage(true);
              //<Alert severity="success">This is a success alert — check it out!</Alert>
              // perform operations on record creation
          },
          function (error) {          
            setMessage('Erro ao cadastrar curso: ' + error);
            setShowMessage(true);
          });
      }
    }

    function validadaCampos(){
      if (nome.length === 0){
        setMessage('Campo Nome é obrigatório');
        setShowMessage(true);
        return false;
      }

      if (nivel.length === 0){
        setMessage('Campo Nível é obrigatório');
        setShowMessage(true);
        return false;
      }

      if (instituicao.length === 0){
        setMessage('Campo Instituição é obrigatório');
        setShowMessage(true);
        return false;
      }

      if (descricao_curta.length === 0){
        setMessage('Campo Descrição é obrigatório');
        setShowMessage(true);
        return false;
      }

      if (descricao_longa.length === 0){
        setMessage('Campo Descrição Longa é obrigatório');
        setShowMessage(true);
        return false;
      }

      if (preco.toString() === "0,00"){
        setMessage('Campo Valor é obrigatório');
        setShowMessage(true);
        return false;
      }

      return true;
    }
  
    function validaNome (nome) {
      if (nome.length > 100)
      {
        setMessage('Máximo de 100 caracteres para o campo nome');
        setShowMessage(true);
        return;
      }
      setNome(nome)
    }

    function validaDescricao (descricao_curta) {
      if (descricao_curta.length > 100)
      {
        setMessage('Máximo de 100 caracteres para o campo Descrição');
        setShowMessage(true);
        return;
      }
      setDescricaoCurta(descricao_curta)
    }

    function validaDescricaoLonga (descricao_longa) {
      if (descricao_longa.length > 500)
      {
        setMessage('Máximo de 100 caracteres para o campo Descrição Longa');
        setShowMessage(true);
        return;
      }
      setDescricaoLonga(descricao_longa);
    }

    function validaPreco (preco) {
      if (preco.length > 100)
      {
        setMessage('Máximo de 10 caracteres para o campo Valor');
        setShowMessage(true);
        return;
      }
      setPreco(preco);
    }

    return (

      <div>
        <h1>Cadastro de Curso</h1>
        <div>
        <Snackbar
          open={!!showMessage}
          autoHideDuration={3000}
          onClose={() => setShowMessage(false)}
          message={<>{showMessage}</>}
          action={<>{message}</>}
        />
        <TextField required id="nome" label="Nome Curso" variant="outlined" value={nome} onChange={(e) => validaNome(e.target.value)}/>
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="select-label-nivel">Nivel</InputLabel>
            <Select
              labelId="select-label-nivel"
              id="select-nivel"
              open={openNivel}
              onClose={handleClose}
              onOpen={handleOpenNivel}
              value={nivel}
              label="Nivel"
              onChange={handleChangeNivel}
            >
              {niveis.map((a, b) => ( 
                <MenuItem value={a.id}>{a.nome}</MenuItem>
                
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 0, minWidth: 200 }}>
          <InputLabel id="select-label-instituicao">Instituição</InputLabel>
            <Select
              labelId="select-label-instituicao"
              id="select-instituicao"
              open={openInstituicao}
              onClose={handleClose}
              onOpen={handleOpenInstituicao}
              value={instituicao}
              label="Instituição"
              onChange={handleChangeInstituicao}
            >
              {instituicoes.map((i, d) => ( 
                <MenuItem value={i.id}>{i.nome}</MenuItem>
                
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField required id="descricaoCurta" label="Descrição" variant="outlined" value={descricao_curta} onChange={(e) => validaDescricao(e.target.value)}/>
        </div>
        <div>
          <TextField required id="descricaoLonga" label="Descrição Longa" variant="outlined" value={descricao_longa} onChange={(e) => validaDescricaoLonga(e.target.value)}/>
        </div>
        <div>
          <TextField required id="preco" label="Valor" variant="outlined" value={preco} onChange={(e) => validaPreco(e.target.value)}/>
        </div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Preferido</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="false"
            name="radio-buttons-group"
          >
            <FormControlLabel value="true" control={<Radio />} label="Sim" />
            <FormControlLabel value="false" control={<Radio />} label="Não" />

          </RadioGroup>
        </FormControl>
        <Button variant="contained" onClick={salvar}>Salvar</Button> 
      </div>
    );


}

export default Cad_Curso