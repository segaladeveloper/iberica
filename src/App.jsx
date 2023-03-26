import './App.css';
import Features from './Features/Features';
import { useCurrentUser } from 'thin-backend-react';
import { updateRecord, createRecord } from 'thin-backend';
import { useState } from 'react';
import Header from './Header/Header';
import { query } from 'thin-backend';
import { useQuery } from 'thin-backend-react';
import { Snackbar } from '@mui/material';
import Dealhistory from './DealHistory/DealHistory';
import Constantes from './Constantes';
import PurchaseModal from './PurchaseModal/PurchaseModal';

function App() {
  const [pagina, setPagina] = useState(Constantes.PAGINAS.HOME);
  const cursos = useQuery(query('curso').orderByDesc('id'));

  return (
    <div className="App">
    
      {page === Constantes.PAGINAS.HOME ?
        <Home />
      : <></>}
      {page === Constantes.PAGINAS.CURSOS ?
        <Cursos />
      : <></>}

    </div>
  );
}

export default App;
