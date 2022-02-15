import { useState } from "react";
import { GlobalStyle } from "./styles/global";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewDevModal } from "./components/NewDevRecordModal";
import { NewDevLevelModal } from "./components/NewDevLevelRecordModal";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);
  const [isNewDevLevelModalOpen, setIsNewDevLevelModalOpen ] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  function handleOpenDevLevelModal(){
    setIsNewDevLevelModalOpen(true);
  }

  function handleCloseDevLevelModal(){
    setIsNewDevLevelModalOpen(false);
  }

  return (
    <> 
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
        onOpenNewDevModal={handleOpenDevLevelModal}
      />
      
      <Dashboard />
      
      <NewDevModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

     <NewDevLevelModal 
        isOpen={isNewDevLevelModalOpen}
        onRequestClose={handleCloseDevLevelModal}
      />
      
      <GlobalStyle />
    </>
  );
}

