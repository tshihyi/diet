import
  \./mock : {mock-bind}
  \../src/meal : {meal-state, meal-props}

cases =
  (t) ->
    state =
      energy: \energy
      data:
        settings: daily: \daily
        types: \types

    actual = meal-state state
    expected = daily: \daily energy: \energy items: \types
    t.same actual, expected, 'meal list state'

  (t) ->
    state =
      daily: 1800
      energy: breakfast: 100 lunch: 250
      items:
        * id: \breakfast name: \breakfast min: 400
        * id: \lunch name: \lunch min: 700
        * id: \dinner min: 400

    {items} = props = meal-props state, mock-bind

    actual = items.0.name
    expected = \breakfast
    t.is actual, expected, 'meal component props'

    actual = items.0.energy
    expected = 100
    t.is actual, expected, 'bind meal type energy'

    actual = items.2.max
    expected = 1800 - 250 - 100
    t.is actual, expected, 'calculate maximum energy'

    actual = items.0.select
    expected = type: \open-selection payload: \breakfast
    t.same actual, expected, 'action to open selection'

    actual = props.total
    expected = 350
    t.is actual, expected, 'calculate total energy'

    actual = props.daily
    expected = 1800
    t.is actual, expected, 'pass daily maximum energy'

function main t
  cases.for-each (run) -> run t
  t.end!

export default: main
