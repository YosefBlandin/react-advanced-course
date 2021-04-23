import { keyframes, css } from 'styled-components'
const fadeInKeyFrames = keyframes`
from {
    filter: blur(5px);
    opacity: 0;
}
to {
    filter: blur(0);
    opacity:1
}
`
const scaleInFrames = keyframes`
	from {
		transform: scale(1);
	}
	50% {
		transform: scale(1.12)
	}
	to {
		transform: scale(1);
	}
`

export const fadeIn = ({ time = '1s', type = 'ease ' } = {}) => css`animation: ${time} ${fadeInKeyFrames} ${type}`

export const scaleIn = ({ time = '1s', type = 'ease' } = {}) => css`animation: ${time} ${scaleInFrames} ${type}`
