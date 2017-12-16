mock-event = target: value: \mock-value

function mock-bind create-action, state
  create-action? mock-event, state or create-action

export {mock-bind}
