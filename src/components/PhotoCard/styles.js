import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
		min-height: 200px;
		width: 98%;
		padding: 10px;
		margin: 5px auto;
		border-radius: 15px;
		background: rgb(249,249,249);
`
export const ImgWrapper = styled.div`
    position: relative;
    display: block;
    height: 0;
    width: 100%;
    overflow: hidden;
    border-radius: 15px;
		padding: 62.25% 0 0 0;
`
export const Img = styled.img`
    ${fadeIn()};
    position: absolute;
    height: 100%;
    object-fit: cover;
    top: 0;
    width: 100%;
`
