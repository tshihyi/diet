import
  \./mock : {mock-bind}
  \../src/selection : {selection-state, selection-props}

function main t
  state =
    selection: \selection
    data: food: \food-list

  actual = selection-state state
  expected = type: \selection items: \food-list
  t.same actual, expected, 'get food list from state'

  state = type: \type items:
    * name: \cake energy: 120
    * name: \pudding energy: 130
  props = selection-props state, mock-bind

  actual = props.back
  expected = type: \back
  t.same actual, expected, 'back action'

  {items} = props

  actual = items.0.name + ' ' + items.0.energy
  expected = 'cake 120'
  t.is actual, expected, 'pass selection item data'

  actual = items.0.select
  expected = type: \select payload: type: \type energy: 120
  t.same actual, expected, 'action to select'

  t.end!

export default: main
