import {h, Component} from 'composi'
import {title} from './components/title'
import Calculator from './components/calculator/calculator'

// Set state on component.
// Will cause component to render.
title.state = 'Calculator'

new Calculator({
  container: 'section'
})
