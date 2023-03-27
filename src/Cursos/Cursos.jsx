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
      <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
         <div class="service-item text-center pt-3">
           <div class="p-4">
             <i class="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
             <h5 class="mb-3">Instrutores Qualificados</h5>
             <p>Descrever</p>
           </div>
         </div>
       </div>
      <h1>Meus cursos</h1>
      {cursos?.map(curso => {
        return <h2>{curso.nome}</h2>
      })}
    </div>
  );

}

export default Cursos