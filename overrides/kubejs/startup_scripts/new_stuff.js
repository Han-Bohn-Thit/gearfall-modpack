//Materials to generate Lava Keys and Impure Blocks for
const materials = ['Asurine','Bauxite','Crimsite','Lignite','Ochrum','Veridium','Galena'];

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

//Impure Blocks
StartupEvents.registry('block', event => {
  materials.forEach(material => {
    event.create(`impure_${material.toLowerCase()}`)
      .displayName(`Impure ${material}`)
      .stoneSoundType()
      .opaque(true)
      .fullBlock(true)
      .tagItem('gearfall:impure_blocks');
  });
})