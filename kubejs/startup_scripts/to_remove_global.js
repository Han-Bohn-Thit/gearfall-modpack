Platform.mods.kubejs.name = "Gearfall";

global.itemsToRemove = [
  //Northstar: Items
  "northstar:rutile_concentrate",
  "northstar:sodium_catalyst",

  //Northstar: Buckets of Fluids
  "northstar:methane_bucket",
  "northstar:sulfuric_acid_bucket",
  "northstar:brine_bucket",
  "northstar:liquid_hydrogen_bucket",
  "northstar:hydrocarbon_bucket",
  "northstar:titanium_tetrachloride_bucket",
];

global.itemsToReplace = [
  //Northstar: Items
  { old: "northstar:salt", new: "chemica:salt" },
  { old: "northstar:iron_cogwheel", new: "tfmg:steel_cogwheel" },
  { old: "northstar:iron_large_cogwheel", new: "tfmg:large_steel_cogwheel" },
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

global.recipesToRemove = [
  //Northstar: Recipes
  "northstar:electrolysis/brine",
  "northstar:crushing/sand",
  "northstar:mixing/titanium1",
  "northstar:mixing/titanium2",
  "northstar:mixing/brine",
  "northstar:mixing/hydrocarbon_from_sodium",
  "northstar:mixing/hydrocarbon_from_carbon",
  "northstar:sequenced_assembly/titanium",
  "northstar:filling/sodium_catalyst",
  "northstar:compacting/brine_to_salt",
  `northstar:compacting/carbon_from_biofuel`,
  `northstar:compacting/carbon_from_coal`,
  "create:crushing/basalt",
  "northstar:crafting/iron_large_cogwheel",
  "northstar:crafting/iron_large_cogwheel_from_small",
  "northstar:crafting/iron_cogwheel",
];

//Remove items from creative tabs, including search tab (this is brute force approach, every item is checked for every tab, but it works :)
StartupEvents.modifyCreativeTab("northstar:items", (event) => {
  global.itemsToRemove.forEach((id) => {
    event.remove(id);
  });
});
StartupEvents.modifyCreativeTab("northstar:tech", (event) => {
  global.itemsToRemove.forEach((id) => {
    event.remove(id);
  });
});
StartupEvents.modifyCreativeTab("minecraft:search", (event) => {
  global.itemsToRemove.forEach((id) => {
    event.remove(id);
  });
});
