//Materials to generate Lava Keys and Vent Blocks for
const materials = ['Asurine','Bauxite','Crimsite','Lignite','Ochrum','Veridium'];

//Lava Keys
StartupEvents.registry('item', event => {  
  materials.forEach(material => {
    event.create(`${material.toLowerCase()}_lava_key`)
    .displayName(`${material} Lava Key`)
    .unstackable()
    .glow(true)
    .fireResistant(true)
    .tooltip(`Right click on an Active ${material} vent to activate it!`)
    .rarity('epic')
    .tag('gearfall:lava_keys')
  });
})

//Vent Blocks
StartupEvents.registry('block', event => {
  materials.forEach(material => {
    event.create(`dormant_${material.toLowerCase()}_vent`)
      .displayName(`Dormant ${material} Vent`)
      .stoneSoundType()
      .opaque(true)
      .fullBlock(true)
      .tagItem('gearfall:dormant_vents');
    event.create(`active_${material.toLowerCase()}_vent`)
      .displayName(`Active ${material} Vent`)
      .stoneSoundType()
      .opaque(true)
      .fullBlock(true)
      .tagItem('gearfall:active_vents');
    event.create(`unlocked_${material.toLowerCase()}_vent`)
      .displayName(`Unlocked ${material} Vent`)
      .stoneSoundType()
      .opaque(true)
      .fullBlock(true)
      .tagItem('gearfall:unlocked_vents');
    event.create(`impure_${material.toLowerCase()}`)
      .displayName(`Impure ${material}`)
      .stoneSoundType()
      .opaque(true)
      .fullBlock(true)
      .tagItem('gearfall:impure_blocks');
  });
})