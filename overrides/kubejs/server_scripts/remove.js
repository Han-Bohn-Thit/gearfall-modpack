const toRemove = 
[
  'molten_vents:dormant_molten_asurine_unlocked', 
  'molten_vents:dormant_molten_veridium_unlocked', 
  'molten_vents:dormant_molten_crimsite_unlocked', 
  'molten_vents:dormant_molten_ochrum_unlocked', 
  'molten_vents:dormant_molten_lignite_unlocked', 
  'molten_vents:dormant_molten_galena_unlocked', 
  'molten_vents:dormant_molten_bauxite_unlocked',
  'molten_vents:dormant_molten_scorchia',
  'molten_vents:active_molten_scorchia',
  'molten_vents:dormant_molten_scoria',
  'molten_vents:active_molten_scoria'
]

ServerEvents.tags('item', event => {
  toRemove.forEach(id => {
    event.removeAllTagsFrom(id)
  })
});

ItemEvents.canPickUp(event => {
  if (toRemove.includes(event.item.item.id)) {
    event.cancel()
  }
})

BlockEvents.drops(event => {
  if (toRemove.includes(event.block.id)) {
    event.cancel()
  }
})