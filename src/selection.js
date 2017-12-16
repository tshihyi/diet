const selectionState = ({selection, data: {food}}) =>
({type: selection, items: food})

const selectionProps = ({type, items}, bindAction) => ({
  items: items.map(item => Object.assign({
    select: bindAction({
      type: 'select',
      payload: {type, energy: item.energy},
    })
  }, item)),
  back: bindAction({type: 'back'})
})

export {selectionState, selectionProps}
