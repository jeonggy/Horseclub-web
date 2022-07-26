import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'
import { BrowserView, MobileView, isBrowser } from 'react-device-detect'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const MobileDefaultLayout = React.lazy(() => import('./layout/MobileDefaultLayout'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          {isBrowser ? (
            <BrowserView>
              <Switch>
                <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
              </Switch>
            </BrowserView>
          ) : (
            <MobileView>
              <Switch>
                <Route
                  path="/"
                  name="Home"
                  render={(props) => <MobileDefaultLayout {...props} />}
                />
              </Switch>
            </MobileView>
          )}
        </React.Suspense>
      </HashRouter>
    )
  }
}

export default App
