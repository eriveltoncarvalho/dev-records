import { FormEvent, useState, useEffect } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/api'

import closeImg from '../../assets/close.svg'

import { Container} from './styles';

interface NewDevRecordModalProps {
  isOpen: boolean;
  onRequestClose: () => void;  
}

export function NewDevLevelModal({ isOpen, onRequestClose }:NewDevRecordModalProps) {  
  const [name, setName] = useState('');

  async function handleCreateNewtransaction(event: FormEvent) {
    event.preventDefault();
    
    await api.post("devlevel", 
        { 
          name
        }
      ).then(response => {
        return response.data
        })
      .catch((err) => {
        console.error("ocorreu um erro" + err);
      });
    
    onRequestClose();
  }

  return (
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className='react-modal-close'
      > 
        <img src={closeImg} alt='Fechar modal' />
      </button> 

      <Container onSubmit={handleCreateNewtransaction}>
        <h2>Cadastrar Nível</h2>   

        <input 
          required
          placeholder='Nome'
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}