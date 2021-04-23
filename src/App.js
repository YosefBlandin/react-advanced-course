import React, { useContext, Suspense } from 'react'
import { Context } from './context/Context'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NavBar } from './components/NavBar'
import { NotFound } from './pages/NotFound'
import { Detail } from './pages/Detail'
import { Logo } from './components/Logo'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
	return (
		<Suspense fallback={<div>we</div>}>
    <BrowserRouter>
      <Layout navLogo>
        <Switch>
          <Route component={Home} exact path={['/', '/pet/:id']} />
          <Route component={Detail} exact path='/detail/:detailId' />
          <Route component={NotRegisteredUser} exact path='/login' />
          {!isAuth && <Redirect from='/favs' to='/login' />}
          <Route component={Favs} exact path='/favs' />
          {!isAuth && <Redirect from='/user' to='/login' />}
          <Route component={User} exact path='/user' />
          <Route component={NotFound} />
        </Switch>
      </Layout>
		</BrowserRouter>
		</Suspense>
  )
}
