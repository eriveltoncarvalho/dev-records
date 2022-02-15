import styled from 'styled-components';

export const Container =styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &:placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  select {
    width: 100%;
    padding: 0 1.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &:placeholder {
      color: var(--text-body);
    }
    margin-top: 1rem;
    margin-bottom: 1rem;
    
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 2.5rem;
    background: var(--green);
    color: #fff;
    border-radius: 0%.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const DevContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AgeContainer = styled.div`
  flex-direction: column;
  max-width: 45%;
`;

export const BirthDateContainer = styled.div`
  max-width: 45%;
  flex-direction: column;
`;

export const DevLevelContainer = styled.div`
  margin-top: 0px;
  padding-top: 0px;
  flex-direction: column;
`;



