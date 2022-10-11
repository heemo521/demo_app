import Explore from './pages/Explore'

import React, {FunctionComponent} from 'react'

import {Routes, Route} from 'react-router-dom'

import './assets/stylesheets/styles.scss'
import '../src/assets/webfonts/Nunito/Nunito-Black.ttf'

import NotFoundPage from 'pages/NotFoundPage'

const App: FunctionComponent = props => {
  return (
    <Routes>
      <Route path='/explore/*' element={<Explore />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
