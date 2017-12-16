import \../src/navigation : {reduce, nav-state, nav-props}

function main t
  actual = reduce\open-selection {}
  expected = screen: \select
  t.same actual, expected, 'navigate to select screen'

  actual = reduce.back {}
  expected = screen: \home
  t.same actual, expected, 'back to home screen'

  actual = reduce.select {}
  expected = screen: \home
  t.same actual, expected, 'back to home screen after selecting'

  state = navigation: \navigation

  actual = nav-state state
  expected = \navigation
  t.is actual, expected, 'nav state'

  t.end!

export default: main
