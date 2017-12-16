export default () => ({
  navigation: {
    screen: 'home'
  },
  data: {
    settings: {
      daily: 1500
    },
    types: [{
      id: 'breakfast', name: '早餐', min: 400
    }, {
      id: 'lunch', name: '午餐', min: 700
    }, {
      id: 'dinner', name: '晚餐', min: 400
    }],
    food: [{
      name: '巧克力厚片', energy: 380
    }, {
      name: '花生厚片', energy: 370
    }, {
      name: '草莓厚片', energy: 360
    }, {
      name: '奶酥厚片', energy: 400
    }]
  }
})
