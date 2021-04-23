import styled from 'styled-components'
import { scaleIn } from '../../styles/animation'

export const Button = styled.button`
  display: flex;
  align-items: center;
	padding-top: 8px;
	font-weight: bold;
	margin-left: 15px;
	color: #f72585;

  & svg {
			margin-right: 4px;
			${scaleIn()}
  }
`
