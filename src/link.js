import createClass from 'create-react-class'
import propTypes from 'prop-types'
import composeLink, {handleActions} from 'linking'

link = composeLink({createClass, propTypes})

export default link
export {link, handleActions}
