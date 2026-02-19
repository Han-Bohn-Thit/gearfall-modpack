ServerEvents.generateData("after_mods", (event) => {
  const materials = [
    ["asurine", "gearfall:biomes/cold", "create:cut_asurine", "create"],
    ["crimsite", "minecraft:is_nether", "create:cut_crimsite", "create"],
    ["ochrum", "gearfall:biomes/hot", "create:cut_ochrum", "create"],
    ["veridium", "gearfall:biomes/jungle", "create:cut_veridium", "create"],
    ["bauxite", "gearfall:biomes/mountain", "tfmg:cut_bauxite", "tfmg"],
    ["lignite","minecraft:is_overworld","minecraft:polished_blackstone","tfmg"]
  ];

  //Surface vents (and biome, placed feature for resource veins)
  materials.forEach(([name, biome, block, mod]) => {
    generateVentFeature(name, biome, block, mod, event, 80, 100, false, 1000);
  });

  //Aquatic vents
  materials.slice(0, 4).forEach(([name, biome, block, mod]) => {
    generateVentFeature(name, biome, block, mod, event, 20, 35, true, 690);
  });
});

function generateVentFeature(name, biome, block, mod, event, min, max, underwater, rarity)
{
  //Configured feature
  event.json(
    `gearfall:worldgen/configured_feature/${name}_${underwater ? "underwater" : "surface"}_vent`,
    {
      type: "molten_vents:molten_vent",
      config: {
        decorativeBlock: {
          type: "minecraft:weighted_state_provider",
          entries: [
            {
              weight: 3,
              data: {
                Name: `${block}_wall`,
              },
            },
            {
              weight: 7,
              data: {
                Name: `${block}_slab`,
              },
            },
          ],
        },
        outerBlock: {
          type: "minecraft:weighted_state_provider",
          entries: [
            {
              weight: 2,
              data: {
                Name: block,
              },
            },
            {
              weight: 8,
              data: {
                Name: `${mod}:${name}`,
              },
            },
          ],
        },
        innerBlock: {
          type: "minecraft:simple_state_provider",
          state: {
            Name: `kubejs:dormant_${name}_vent`,
          },
        },
        liquidBlock: {
          type: "minecraft:simple_state_provider",
          state: {
            Name: "minecraft:lava",
          },
        },
        depth: {
          type: "minecraft:uniform",
          min_inclusive: min,
          max_inclusive: max,
        },
        underwater: underwater,
      },
    }
  );

  //Placed feature
  event.json(
    `gearfall:worldgen/placed_feature/${name}_${underwater ? "underwater" : "surface"}_vent`,
    {
      feature: `gearfall:${name}_${underwater ? "underwater" : "surface"}_vent`,
      placement: [
        {
          type: "minecraft:rarity_filter",
          chance: rarity,
        },
        {
          type: "minecraft:in_square",
        },
        {
          type: "minecraft:heightmap",
          heightmap: "WORLD_SURFACE_WG",
        },
        {
          type: "minecraft:biome",
        },
      ],
    }
  );
  event.json(`gearfall:worldgen/placed_feature/${name}`, {
    feature: `gearfall:${name}`,
    placement: [
      {
        type: "minecraft:rarity_filter",
        chance: 18,
      },
      {
        type: "minecraft:in_square",
      },
      {
        type: "minecraft:height_range",
        height: {
          type: "minecraft:uniform",
          max_inclusive: {
            absolute: 70,
          },
          min_inclusive: {
            absolute: -30,
          },
        },
      },
      {
        type: "create:config_filter",
      }
    ],
  });

  //Biome modifier
  if (underwater) {
    event.json(`gearfall:neoforge/biome_modifier/${name}_underwater_vent`, {
      type: "neoforge:add_features",
      biomes: `#gearfall:biomes/ocean`,
      features: [`gearfall:${name}_underwater_vent`],
      step: "underground_ores"
    });
  } else {
    event.json(`gearfall:neoforge/biome_modifier/${name}`, {
      type: "neoforge:add_features",
      biomes: `#${biome}`,
      features: [`gearfall:${name}`, `gearfall:${name}_surface_vent`],
      step: "underground_ores"
    });
  }
}
