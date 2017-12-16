import {combineReducers} from 'redux'
import {handleActions} from './link'
import {reduce as navigation} from './navigation'
import {reduce as data} from './data'

const mergeEnergy = (state, {type, energy}) =>
Object.assign({}, state, {[type]: energy})

const reduceEnergy = (state, {type, payload}) =>
type == 'select'? mergeEnergy(state, payload):
state || {}

const reduceSelection = (state, {type, payload}) =>
type == 'open-selection'? payload:
state || ''

const reducers = {
  navigation: handleActions(navigation),
  selection: reduceSelection,
  energy: reduceEnergy,
  data: handleActions(data),
}

export default combineReducers(reducers)
