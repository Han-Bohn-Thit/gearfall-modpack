const toRemove = 
[
    'molten_vents:dormant_molten_asurine_unlocked', 
    'molten_vents:dormant_molten_veridium_unlocked', 
    'molten_vents:dormant_molten_crimsite_unlocked', 
    'molten_vents:dormant_molten_ochrum_unlocked', 
    'molten_vents:dormant_molten_lignite_unlocked', 
    'molten_vents:dormant_molten_galena_unlocked', 
    'molten_vents:dormant_molten_bauxite_unlocked'
]

RecipeViewerEvents.removeEntriesCompletely('item', event => {
  toRemove.forEach(id => {
    event.remove(id)
  })
})