import { useEffect, useState } from 'react';
import './style.css';
import { query } from 'thin-backend';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    query('curso').fetch().then(results => {
      setCursos(results)
    })
  }, []);

   return (
    <div>
      <h1>Meus cursos</h1>
      {cursos?.map(curso => {
        return <h2>{curso.nome}</h2>
      })}
    </div>
  );

}

export default Cursos