default-options =
  babelrc: false
  plugins: [\@babel/transform-modules-commonjs]
  extensions: <[.ls .jsx .js]>

function register options={}
  require \livescript
  delete require.extensions\.ls
  rc = require \./.babelrc.js
  option-list = [default-options, rc, options]
  require \@babel/register <| Object.assign {} ...option-list,
    plugins: []concat ...option-list.map (.plugins || [])

module.exports = register
