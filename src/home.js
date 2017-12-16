import React from 'react'
import {Text, View} from './base'
import styles from './styles'
import {TouchableHighlight} from 'react-native'
import {mealState, mealProps} from './meal'

const Meal = ({name, energy, max, select}) =>
<TouchableHighlight onPress={select}>
  <View style={styles.meal}>
    <Text>{name}</Text>
    <Text>{energy || '~ ' + max}大卡</Text>
  </View>
</TouchableHighlight>

const mealList = ({items, total, daily}) =>
<View style={{flex: 1}}>
  {items.map(item =>
    <Meal key={item.name} {...item} />
  )}
  <Text>{total} / {daily}</Text>
</View>

const home = link(mealList, mealState, mealProps)

export default home
