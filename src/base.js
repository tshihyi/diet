import React from 'react'
import {Text as TextRN, View as ViewRN} from 'react-native'
import styles from './styles'

export const Text = ({style={}, ...props}) =>
<TextRN
  style={{...styles.text, ...style}}
  {...props} />

const View = ViewRN

export const Container = props =>
<View style={styles.container} {...props} />

export {View}
