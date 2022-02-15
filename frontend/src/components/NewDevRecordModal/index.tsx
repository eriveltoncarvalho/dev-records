import { FormEvent, useState, useEffect } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/api'

import closeImg from '../../assets/close.svg'

import { Container, DevContainer, AgeContainer, BirthDateContainer } from './styles';

interface NewDevLevelRecordModalProps {
  isOpen: boolean;
  onRequestClose: () => void;  
}

interface DevLevel {
  id: string;
  name: string;
}

export function NewDevModal({ isOpen, onRequestClose }:NewDevLevelRecordModalProps) {  
  const [name, setName] = useState('');
  const [sexo, setSexo] = useState('MASCULINO');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState(''); 
  const [birthDate, setBirthDate] = useState(Date); 
  const [devLevelAtual, setdevLevelAtual] = useState('');
  
  const [devLevel, setdevLevel] = useState<DevLevel[]>([]);


  async function handleCreateNewtransaction(event: FormEvent) {
    event.preventDefault();
    
    await api.post("dev", 
        {
          dev_level: devLevelAtual,
          name,
          sexo,
          email, 
          age, 
          hobby, 
          birth_date: birthDate
        }
      ).then(response => {
        return response.data
        })
      .catch((err) => {
        console.error("ocorreu um erro" + err);
      });
    
    onRequestClose();
  }

  const handleChange = (value: string) => {
    setSexo(value);
  }

  const handleChangeDate = (value: string) => {
    setBirthDate(value);
  }

  function handleChangeDevLevel(event: any){
    setdevLevelAtual(event.target.value);
    console.log(event.target.value)
  }

  useEffect(() => {
    async function loadDevsLevel() {   
      await api.get("devlevel").then(response => {
        setdevLevel(response.data) 
          })
        .catch((err) => {
          console.error("ocorreu um erro" + err);
        });    
    }
    
    loadDevsLevel();
  }, [devLevel]);

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
        <h2>Cadastrar Desenvolvedor</h2>   

        <input 
          required
          placeholder='Nome'
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input 
          type="email"
          required
          placeholder='E-mail'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <select  onChange={event => handleChange(event.target.value==='MASCULINO' ? 'FEMININO' : 'MASCULINO')} >
          <option value="MASCULINO">MASCULINO</option>
          <option value="FEMININO">FEMININO</option>
        </select>

        <input 
          required
          placeholder='Hobby'
          value={hobby}
          onChange={event => setHobby(event.target.value)}
        />

        <DevContainer>
          <AgeContainer>
            <label>Idade:</label>
            <input 
              required
              type='number'
              placeholder='Idade'
              value={age}
              onChange={event => setAge(Number(event.target.value))}
            />
          </AgeContainer>

          <BirthDateContainer>
            <label>Data de Nascimento:</label>
            <input type="date" data-date-format="DD MMMM YYYY" onChange={event => handleChangeDate(event.target.value)}/>
          </BirthDateContainer>
        </DevContainer> 
         
        <>
          <select value={devLevelAtual} onChange={handleChangeDevLevel} >
              {devLevel.map((dev) => (
                  <option key={dev.id} value={dev.name}>{dev.name}</option>
              ))}
          </select>
        </>  

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}