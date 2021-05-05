import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { scaleIn } from '../../styles/animation'

export const ErrorContainer = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  height: 230px;
  width: 320px;
  left: calc(50% - 160px);
  top: calc(50% - 115px);
  border-radius: 15px;
  color: white;
  box-shadow: 0 0 2px 0 #999;
  background: #000;
  ${scaleIn()};
  p {
    letter-spacing: 1px;
    font-weight: 500;
    padding: 0 20px;
  }
`
export const ErrorTitle = styled.h3`
  font-size: 1.3rem;
  text-align: center;
  margin: 20px 0;
  padding: 0 20px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%; 
  margin-top: 20px ;
  button {
    height: 50px;
    width: 50%;
    font-weight: bold;
    color: white;
  }
  a {
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50%;
    font-weight: bold;
    text-decoration: none;
  }
`
export const ButtonLogin = styled(Link)`
  background: #43dde6;
  border-bottom-right-radius: 15px;
`

export const ButtonClose = styled.button`
 background: #fc5185;
 border-bottom-left-radius: 15px;
`
