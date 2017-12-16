import React, {createElement as h} from 'react'
import {navState} from './navigation'
import home from './home'
import select from './selection-view'

const screens = {home, select}

const selectScreen = ({screen}) =>
h(screens[screen], {})

const navigator = link(selectScreen, navState)

export default navigator
