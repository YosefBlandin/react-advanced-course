import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
	align-items: center;
  background: #111;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`

export const Link = styled(LinkRouter)`
	align-items: center;
	color: #888;
	display: inline-flex;
	height: 100%;
	justify-content: center;
	width: 100%;
	-webkit-tap-highlight-color: transparent;
	
	&[aria-current] {
		color: #fff;
		
		&:after {
			content: '·';
			bottom: 0;
			color: #f72585;
			position: absolute;
			font-size: 34px;
			line-height: 8px;
			${fadeIn({ time: '0.5s' })};
		}
	}

`
