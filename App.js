import React from 'react'
import {createStore} from 'redux'
import { Text, View, Container } from './src/base'
import link from './src/link'
import reduce from './src/reduce'
import preload from './src/preload'
import Navigator from './src/navigator'

const dump = props =>
<Text>{props.navigation.screen}</Text>

const Test = link(dump, it => it, it => it)

const app = () =>
<Container>
  <Navigator />
</Container>

export default () => {
  const store = createStore(reduce, preload())
  starter = link(app)
  return React.createElement(starter, {store})
}
