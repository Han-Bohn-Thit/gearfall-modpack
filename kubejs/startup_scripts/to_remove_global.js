Platform.mods.kubejs.name = 'Gearfall';

global.itemsToRemove = [
  //TFMG: Items
  "tfmg:unfinished_circuit_board",
  "tfmg:unfinished_capacitor",
  "tfmg:unfinished_electric_motor",
  "tfmg:unfinished_potentiometer",
  "tfmg:unfinished_generator",
  "tfmg:unfinished_transistor",

  //Northstar: Items
  "northstar:rutile_concentrate",
  "northstar:sodium_catalyst",
  "northstar:salt",
  
  //Northstar: Buckets of Fluids
  "northstar:methane_bucket",
  "northstar:sulfuric_acid_bucket",
  "northstar:brine_bucket",
  "northstar:liquid_hydrogen_bucket",
  "northstar:hydrocarbon_bucket",
  "northstar:titanium_tetrachloride_bucket"
];

global.fluidsToRemove = [
  //Northstar: Fluids
  "northstar:methane",
  "northstar:sulfuric_acid",
  "northstar:brine",
  "northstar:liquid_hydrogen",
  "northstar:hydrocarbon",
  "northstar:titanium_tetrachloride",

  //Northstar: Fluids without buckets
  "northstar:carbon",
  "northstar:chlorine",
  "northstar:oxygen",
  "northstar:hydrogen",
];

StartupEvents.modifyCreativeTab('northstar:items', event => {
  global.itemsToRemove.forEach(id => {
    event.remove(id)
  })
})

StartupEvents.modifyCreativeTab('minecraft:search', event => {
  global.itemsToRemove.toRemove.forEach(id => {
    event.remove(id)
  })
})
