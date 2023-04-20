import { useEffect, useState } from 'react';
import * as React from 'react';
import './style.css';
import { query } from 'thin-backend';
import { TextField, Select, MenuItem, InputLabel, Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { createRecord } from 'thin-backend';

const Cad_Curso = () => {
    const [nome, setNome] = useState('');
    const [nivel, setNivel] = useState('');
    const [niveis, setNiveis] = useState([]);

    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
      setNivel(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    useEffect(() => {
      query('nivel').fetch().then(results => {
        setNiveis(results)
      })
    }, []);
  
    function salvar () {
      createRecord('curso', { nome: nome, nivel: nivel});
    }
  
    function validaNome (nome) {
      if (nome.length > 100)
      {
        return;
      }
      setNome(nome)
    }

    

    return (

      <div>
        <h1>Cadastro de Curso</h1>
        <div>
          <TextField required id="nome" label="Nome Curso" variant="outlined" value={nome} onChange={(e) => validaNome(e.target.value)}/>
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-controlled-open-select-label">Nivel</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={nivel}
              label="Nivel"
              onChange={handleChange}
            >
              {niveis.map((a, b) => ( 
                <MenuItem value={a.id}>{a.nome}</MenuItem>
                
              ))}
              {/* <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
        </div>
        
        <Button variant="contained" onClick={salvar}>Salvar</Button> 
      </div>
    );

}

export default Cad_Curso