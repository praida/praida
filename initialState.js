const pkg = require('./package.json')
const edits = require('./edits.js')

const initialState = {
  // Control
  ts: 0,

  // Menu
  appVersion: pkg.version,
  menuHidden: true,

  // Authorization
  loggedIn: true,

  // Fields
  fields: [],

  // Edit
  ...edits,

  saveError: null
}

Object.keys(edits).forEach((itemName) => {
  const item = localStorage.getItem(itemName)
  if (item) {
    initialState[itemName] = JSON.parse(item)
  }
})

module.exports = exports = initialState