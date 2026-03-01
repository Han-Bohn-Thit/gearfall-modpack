//Remove all tags from removed items
ServerEvents.tags("item", (event) => {
  global.itemsToRemove.forEach(id => {
    event.removeAllTagsFrom(id)
  });
  global.itemsToReplace.forEach(item => {
    event.removeAllTagsFrom(item.old);
  });
});

ServerEvents.recipes((event) => {
  //Remove recipes
  global.recipesToRemove.forEach((recipe) => {
    event.remove({ id: recipe });
  });

  //Replace items (both input and output) in recipes
  //Works for all vanilla and create mod recipes, except sequenced assembly, which have to be replaced manually due to their unique structure
  global.itemsToReplace.forEach((item) => {
    event.replaceInput({}, item.old, item.new);
    event.replaceOutput({}, item.old, item.new);
  });
});