import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
		min-height: 250px;
		width: 100%;
		padding: 10px 0;
		margin: 5px auto;
		background: rgb(249,249,249);
`
export const ImgWrapper = styled.div`
    position: relative;
    display: block;
    height: 0;
    width: 100%;
    overflow: hidden;
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
