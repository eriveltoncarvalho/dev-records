import React, { useEffect, useState } from 'react';

import { Container } from "./styles";

import { api } from '../../services/api'

interface Dev {
  id: string;
  dev_level_id: string;
  name: string;
  sexo: string;
  email: string;
  age: number;
  hobby: string;
  birth_date: Date,
}

export function ListDev() {
  const [devs, setDevs] = useState<Dev[]>([]);

  useEffect(() => {
    async function loadDevs() {   
      await api.get("dev").then(response => {
            setDevs(response.data) 
          })
        .catch((err) => {
          console.error("ocorreu um erro" + err);
        });
    }
    
    loadDevs();
  }, []);

  async function handleRemoveDev(id: any) {
    await api.delete("dev", {
        params:{id} 
       }).then()
    .catch((err) => {
      console.error("ocorreu um erro" + err);
    });
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Data Nascimento</th>
          </tr> 
        </thead>

        <tbody>
          {devs.map(dev => (
            <tr key={dev.id}>
              <td>{dev.name}</td>
              
              <td>{dev.email}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(dev.birth_date)
                )} 
              </td>    

              <td>
               <button onClick={() => handleRemoveDev(dev.id)} >Excluir</button>
              </td>       
           </tr>
           ))} 
          
        </tbody>
      </table> 
    </Container>
  )  
}