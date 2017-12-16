const mealState = ({energy, data: {types, settings: {daily}}}) => ({
  energy, items: types, daily
})

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const expectedEnergy = (items, energy) =>
items.map(it => energy[it.id] || it.min)

const mealProps = ({energy, items, daily}, bindAction) => ({
  items: items.map((item, index) => Object.assign({
    energy: energy[item.id],
    max: expectedEnergy(items.slice(0, index), energy)
    .reduce(subtract, daily),
    select: bindAction({type: 'open-selection', payload: item.id})
  }, item)),
  total: items.map(item => energy[item.id] || 0).reduce(add),
  daily,
})

export {mealState, mealProps}
