import Explore from './pages/Explore'

import NotFoundPage from './pages/NotFoundPage'

import React, {FunctionComponent} from 'react'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import './assets/stylesheets/styles.scss'
import '../src/assets/webfonts/Nunito/Nunito-Black.ttf'

const App: FunctionComponent = props => (
  <Routes>
    <Route path='/explore/*' element={<Explore />} />
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
)

export default App
