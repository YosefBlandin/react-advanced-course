import styled from 'styled-components'

export const Section = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: center;
	grid-auto-rows: 120px;
	padding: 5px;
	justify-items: center;
	min-height: 30vh;
`

export const Img = styled.img`
	width: 100%;
	height: 100%;
	padding: 5px;
	margin: 3px;
	object-fit: cover;
	border-radius: 15px;
	background: rgb(249,249,249);
`
