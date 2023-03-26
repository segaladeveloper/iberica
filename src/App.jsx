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
import Constants from './Constants';
import PurchaseModal from './PurchaseModal/PurchaseModal';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [open, setOpen] = useState(false);
  const [feature, setFeature] = useState(false);
  const [page, setPage] = useState(Constants.PAGES.FEATURES);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const user = useCurrentUser();
  const features = useQuery(query('curso').orderByDesc('id'));
  const handleClose = () => setOpen(false);

  const handleSelectCatagory = (event, newAlignment) => {
    setSelectedCategory(newAlignment);
  };

  const handleOpenPurchase = (feature) => {
    setOpen(true);
    setFeature(feature);
  };

  const handleCloseBuyConfirmation = () => {
    setOpen(false);
  };

  const handleBuy = (reason) => {
    const newBalance = user.balance - feature.price;
    if (newBalance < 0) {
      setShowMessage('Saldo insuficiente');
      return;
    }
    createRecord('deals', { userId: user.id, productsId: feature.id, reason: reason });
    updateRecord('users', user.id, { balance: newBalance });
    features.find(f => f.id === feature.id).isBought = true
    handleCloseBuyConfirmation();
    setShowMessage('Compra efetuada');
  }

  return (
    <div className="App">
      <Header user={user} page={page} setPage={setPage} />

      {page === Constants.PAGES.FEATURES ?
        <Features 
          features={features?.filter(f => !selectedCategory || f.category === selectedCategory).sort((f1, f2) => f1.price - f2.price)} 
          categories={[...new Set(features?.map(f => f.category))]}
          selectedCategory={selectedCategory} 
          handleSelectCatagory={handleSelectCatagory}
          handleOpenPurchase={handleOpenPurchase} />
      : <></>}
      {page === Constants.PAGES.DEAL_HISTORY ?
        <Dealhistory 
          features={features}
          user={user} />
      : <></>}
      
      <PurchaseModal 
        open={open}
        handleClose={handleClose}
        handleBuy={handleBuy}
        feature={feature}
      />
      <Snackbar
        open={!!showMessage}
        autoHideDuration={3000}
        onClose={() => setShowMessage(false)}
        message={<>{showMessage}</>}
        action={<></>}
      />
    </div>
  );
}

export default App;
