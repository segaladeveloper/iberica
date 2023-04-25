import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';
import { query } from 'thin-backend';

const Nivel = () => {

  const [niveis, setNiveis] = useState([]);

  useEffect(() => {
    query('nivel').fetch().then(results => {
      setNiveis(results)
    })
  }, []);
 
  return (
    <div>
      <h1>Níveis</h1>
      {niveis?.map(nivel => {
        return <h2>{nivel.nome}</h2>
      })}
    </div>
  );

}

export default Nivel