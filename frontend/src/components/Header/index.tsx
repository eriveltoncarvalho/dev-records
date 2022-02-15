import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;  
  onOpenNewDevModal: () => void; 
} 

export function Header({onOpenNewTransactionModal, onOpenNewDevModal}: HeaderProps) {
    
  return (
    <Container>
      <Content>
        <button type='button' onClick={onOpenNewTransactionModal}> 
            Novo desenvolvedor  
        </button>
        <button type='button' onClick={onOpenNewDevModal}> 
            Novo nível  
        </button>
      </Content>     
    </Container>   
  )  
}