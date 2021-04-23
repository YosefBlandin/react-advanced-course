import React from 'react'
import { Div, Title, Subtitle } from './styles'
import { Logo } from '../Logo'
import { NavBar } from '../NavBar'
import { Helmet } from 'react-helmet'

export const Layout = ({ children, title, subtitle, navLogo }) => (
  <>
    <Helmet>
      {title && <title>{title} | Petgram</title>}
      {subtitle && <meta name='description' content={subtitle} />}
    </Helmet>
    {navLogo && <Logo />}
    <Div>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Div>
    {children}
    {navLogo && <NavBar />}
  </>
)
