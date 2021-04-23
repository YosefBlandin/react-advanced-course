import styled from 'styled-components'

export const Button = styled.button`
	display: block;
	width: 200px;
	height: 45px;
	margin: 20px 0;
	color: white;
	font-weight: bold;
	text-align: center;
	border-radius: 5px;
	background-color: #f72585;
	&[disabled] {
		opacity: 0.6;
	}
`
