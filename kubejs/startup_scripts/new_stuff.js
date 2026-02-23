//Materials to generate Lava Keys and Vent Blocks for
const materials = ['Asurine','Bauxite','Crimsite','Lignite','Ochrum','Veridium'];

const ventStates = [
  ['dormant','Dormant',0.1,0.8,'gearfall:dormant_vents'],
  ['active','Active',0.5,0.7,'gearfall:active_vents'],
  ['unlocked','Unlocked',1.0,0.6,'gearfall:unlocked_vents']
];

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
    ventStates.forEach(([state, displayState, lightLevel, slipperiness, tag]) => {
      event.create(`${state}_${material.toLowerCase()}_vent`)
        .displayName(`${displayState} ${material} Vent`)
        .stoneSoundType()
        .opaque(true)
        .fullBlock(true)
        .lightLevel(lightLevel)
        .slipperiness(slipperiness)
        .noValidSpawns(true)
        .tagItem(tag)
        .hardness(45)
        .noDrops();
    });
    event.create(`impure_${material.toLowerCase()}`)
      .displayName(`Impure ${material}`)
      .stoneSoundType()
      .opaque(true)
      .fullBlock(true)
      .tagItem('gearfall:impure_blocks');
  });
})