import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  button {
    width: 180px;
    height: 60px;
    margin: 0 15px;
    color: white;
    font-weight: bold;
    border-radius: 5px;
  }
`
export const ButtonsContainer = styled.div`
  display:flex;
  justify-content: center;
  width: 100%;
`
export const ButtonLogin = styled.button`
  background: #fc5185;
`
export const ButtonRegister = styled.button`
  background: #46c3db;
`
