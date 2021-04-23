import styled from 'styled-components'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 480px;
	max-width: 400px;
	padding: 16px 0;
	margin:0 auto;
`

export const Input = styled.input`
	border: none;
	border-bottom: 1px solid black;
	border-radius: 3px;
	padding: 8px 4px;
	display: block;
	width: 75%;
	margin: 10px 0;
	background: transparent;
	&[disabled] {
		opacity: 0.6;
	}
`

export const Title = styled.h2`
	font-size: 1.7rem;
	font-weight: 500;
	padding: 15px 0;
	text-align: center;
`
export const Img = styled.img`
	width: 160px;
	display: block;
	height: 160px;
	margin: 0 auto;
`

export const Error = styled.span`
	color: red;
	font-size: 1.2rem;
	text-align: center;
`
