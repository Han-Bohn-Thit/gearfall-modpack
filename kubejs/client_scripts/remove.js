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

RecipeViewerEvents.removeEntriesCompletely('item', event => {
  toRemove.forEach(id => {
    event.remove(id)
  })
})