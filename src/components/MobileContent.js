import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer } from '@coreui/react'

// routes config
import routesmobile from '../routesmobile'

const MobileContent = () => {
  return (
    <CContainer lg style={{ margin: 0, padding: 0, height: '100%', maxWidth: 'none' }}>
      <Suspense>
        <Switch>
          {routesmobile.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            )
          })}
          <Redirect from="/" to="/home" />
        </Switch>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(MobileContent)
