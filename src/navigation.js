const reduce = {
  'open-selection': () => ({screen: 'select'}),
  back: () => ({screen: 'home'}),
  select: () => ({screen: 'home'}),
}

const navState = ({navigation}) => navigation

export {reduce, navState}
