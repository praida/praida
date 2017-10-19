const pkg = require('./package.json')
const edits = require('./edits.js')

const initialState = {
  // Edit
  ...edits,
}

Object.keys(edits).forEach((itemName) => {
  const item = localStorage.getItem(itemName)
  if (item) {
    initialState[itemName] = JSON.parse(item)
  }
})

module.exports = exports = initialState