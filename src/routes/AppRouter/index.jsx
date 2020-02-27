import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import HomePage from '../../components/pages/Home/index'

const AppRouter = withRouter(({ location }) => {
    // const noNavBarPaths = []
    return (
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
    )
})

export default AppRouter
