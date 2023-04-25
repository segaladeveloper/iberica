import React from 'react';
import './style.css';
import { useEffect, useState } from 'react';
import { query } from 'thin-backend';

const Instituicoes = () => {
  const [instituicoes, setInstituicoes] = useState([]);

  useEffect(() => {
    query('instituicao').fetch().then(results => {
      setInstituicoes(results)
    })
  }, []);
 
  return (
    <div>

      <h1>Instituicoes</h1>
      {instituicoes?.map(instituicao => {
        return <h2>{instituicao.nome}</h2>
      })}
    </div>
  );

}

export default Instituicoes