units =
  navigation: \Navigation
  selection: \Selection
  meal: \Meal

list = if process.argv.length > 2 then process.argv.slice 2
else Object.keys units
plugins = if process.argv.length > 2 then [] else <[istanbul]>

require \../register <| {plugins}
require! tape: test

list.for-each (name) ->
  test units[name] || name, (require "./#name" .default)
