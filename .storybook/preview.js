import { addDecorator, addParameters, configure } from '@storybook/react'
import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import GlobalStyles from '../src/GlobalStyles'
import { withInfo } from '@storybook/addon-info'

addDecorator(withInfo)

addDecorator((storyFn) => (
  <Router>
    <GlobalStyles />
    {storyFn()}
  </Router>
))

function loadStories() {
  require('../src/index.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
