import React from 'react'
import {Text, View} from './base'
import {Button} from 'react-native'
import {selectionState, selectionProps} from './selection'

const selectionView = ({back, items}) =>
<View style={{flex: 1}}>
  <Button title="Back" onPress={back} />
  {items.map(({name, energy, select}) =>
    <Text key={name} onPress={select}>{name} - {energy}</Text>
  )}
</View>

const selection = link(selectionView, selectionState, selectionProps)

export default selection
