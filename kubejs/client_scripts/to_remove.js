//Removed items and fluids from the recipe viewer. This does not remove them from the game, just hides them from the recipe viewer.
RecipeViewerEvents.removeEntriesCompletely('fluid', event => {
  global.fluidsToRemove.forEach(id => {
    event.remove(id)
  })
})
RecipeViewerEvents.removeEntriesCompletely('item', event => {
  global.itemsToRemove.forEach(id => {
    event.remove(id)
  })
  global.itemsToReplace.forEach(item => {
    event.remove(item.old)
  })
})