//Lava Keys
StartupEvents.registry('item', event => {
  const keys = [
    ['asurine_lava_key', 'Asurine Lava Key', "Right click on an Active Asurine vent to activate it!"],
    ['bauxite_lava_key', 'Bauxite Lava Key', "Right click on an Active Bauxite vent to activate it!"],
    ['crimsite_lava_key', 'Crimsite Lava Key', "Right click on an Active Crimsite vent to activate it!"],
    ['galena_lava_key', 'Galena Lava Key', "Right click on an Active Galena vent to activate it!"],
    ['lignite_lava_key', 'Lignite Lava Key', "Right click on an Active Lignite vent to activate it!"],
    ['ochrum_lava_key', 'Ochrum Lava Key', "Right click on an Active Ochrum vent to activate it!"],
    ['veridium_lava_key', 'Veridium Lava Key', "Right click on an Active Veridium vent to activate it!"]
  ];
  for(let i=0; i<keys.length; i++)
  {
    event.create(keys[i][0])
      .displayName(keys[i][1])
      .maxStackSize(1)
      .glow(true)
      .tooltip(keys[i][2])
      .rarity('epic')
  }
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