//Lava Key
StartupEvents.registry('item', event => {
  event.create('lava_key')
  .displayName('Lava Key')
  .maxStackSize(1)
  .glow(true)
  .tooltip("Right click on a vent to activate it!")
  .rarity('epic')
})

//Impure Blocks
StartupEvents.registry('block', event => {
  const fruits = new Map([
    ['impure_asurine', 'Impure Asurine'],
    ['impure_bauxite', 'Impure Bauxite'],
    ['impure_crimsite', 'Impure Crimsite'],
    ['impure_galena', 'Impure Galena'],
    ['impure_lignite', 'Impure Lignite'],
    ['impure_ochrum', 'Impure Ochrum'],
    ['impure_veridium', 'Impure Veridium']
  ]);
  fruits.forEach((name, id) => {
    event.create(id)
    .displayName(name)
    .stoneSoundType()
    .tagItem('gearfall:impure_blocks')
    .opaque(true)
    .fullBlock(true)
  })
})