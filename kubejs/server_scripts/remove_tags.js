ServerEvents.tags("item", (event) => {
  global.itemsToRemove.forEach(id => {
    event.removeAllTagsFrom(id)
  });
});