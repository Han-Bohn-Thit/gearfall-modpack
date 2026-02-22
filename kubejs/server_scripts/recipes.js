ServerEvents.recipes((event) => {
  //Remove all default extruding recipes
  event.remove({ type: "create_mechanical_extruder:extruding" });

  const materials = [
    ["asurine", "create:asurine", "gearfall:biomes/cold"],
    ["bauxite", "tfmg:bauxite", "gearfall:biomes/mountain"],
    ["crimsite", "create:crimsite", "minecraft:is_nether"],
    ["lignite", "tfmg:lignite", "minecraft:is_overworld"],
    ["ochrum", "create:ochrum", "gearfall:biomes/hot"],
    ["veridium", "create:veridium", "gearfall:biomes/jungle"],
  ];
  materials.forEach(([name, block, biome]) => {
    //Impure blocks extraction from unlocked vents
    event.recipes.create_mechanical_extruder
      .extruding(Item.of(`kubejs:impure_${name}`), [
        BlockPredicate.of(block),
        BlockPredicate.of("minecraft:lava"),
      ])
      .catalyst(BlockPredicate.of(`kubejs:unlocked_${name}_vent`))
      .advanced(true)
      .consumeBlocks([false, true])
      .requirements([
        RecipeRequirement.minSpeed(128.0),
        RecipeRequirement.biomeTag(biome),
      ])
      .id(`gearfall:recipes/extruding_${name}_vent`);

    //Item application for unlocking vents
    event.recipes.create
      .item_application(
        [`kubejs:unlocked_${name}_vent`],
        [`kubejs:active_${name}_vent`, `kubejs:${name}_lava_key`],
      )
      .id(`gearfall:recipes/unlocking_${name}_vent_manual_only`);
  });

  //Replace amethyst shard with polished amethyst in certain recipes to make it more useful
  const requirePolishedAmethyst = [
    "northstar:crafting/telescope",
    "minecraft:spyglass",
    "create:crafting/logistics/pulse_timer",
  ];
  requirePolishedAmethyst.forEach((id) => {
    event.replaceInput(
      { id: id },
      "minecraft:amethyst_shard",
      "northstar:polished_amethyst",
    );
  });
});
