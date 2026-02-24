RecipeViewerEvents.removeEntriesCompletely('fluid', event => {
  global.fluidsToRemove.forEach(id => {
    event.remove(id)
  })
})

RecipeViewerEvents.removeEntriesCompletely('item', event => {
  global.itemsToRemove.forEach(id => {
    event.remove(id)
  })
})

//Change display name
ClientEvents.lang('en_us', event => {
    event.renameItem('northstar:circuit', 'Pulse Circuit');
    event.renameItem('northstar:advanced_circuit', 'Advanced Pulse Circuit');
})
