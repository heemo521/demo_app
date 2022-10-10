import CitySelector from 'pages/CitySelector'
import React, {FunctionComponent} from 'react'
import {Route} from 'react-router'
import {BrowserRouter, Routes} from 'react-router-dom'

import './assets/stylesheets/styles.scss'
// import '../src/assets/webfonts/Nunito/Nunito-Black.ttf'

export interface IAppProps {}

const App: FunctionComponent<IAppProps> = props => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CitySelector {...props} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
