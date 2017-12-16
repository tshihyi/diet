import {StatusBar} from 'react-native'

export default {
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: StatusBar.currentHeight,
  },
  view: {
    flex: 1,
  },
  text: {
    flex: 1,
    fontSize: 40,
    color: '#aaa',
  },
  meal: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#222',
    height: 60,
  }
}
