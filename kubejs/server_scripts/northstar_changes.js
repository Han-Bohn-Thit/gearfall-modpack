ServerEvents.recipes((event) => {
  //Replaced north:circuit recipe
  event.recipes.create
    .sequenced_assembly(
      [
        CreateItem.of("northstar:circuit", 0.95),
        CreateItem.of("tfmg:circuit_board", 0.03),
        CreateItem.of("tfmg:transistor_item", 0.02),
      ],
      "tfmg:circuit_board",
      [
        event.recipes.create.deploying("northstar:unfinished_circuit", [
          "northstar:unfinished_circuit",
          "northstar:polished_amethyst",
        ]),
        event.recipes.create.deploying("northstar:unfinished_circuit", [
          "northstar:unfinished_circuit",
          "create:copper_sheet",
        ]),
        event.recipes.northstar.engraving(
          "northstar:unfinished_circuit",
          "northstar:unfinished_circuit",
          200,
        ),
      ],
    )
    .transitionalItem("northstar:unfinished_circuit")
    .loops(5)
    .id("northstar:sequenced_assembly/circuit");

  //Replaced northstar:electrolysis recipes with tfmg:vat_machine_recipe
  const electrolysisToVatRecipes = [
    ["minecraft:water", "chemica:hydrogen", "chemica:oxygen"],
    ["chemica:brine", "chemica:chlorine", "chemica:sodium"],
  ];
  electrolysisToVatRecipes.forEach(([reactant, product1, product2]) => {
    event
      .custom({
        type: "tfmg:vat_machine_recipe",
        allowed_vat_types: [
          "tfmg:cast_iron_vat",
          "tfmg:steel_vat",
          "tfmg:firebrick_lined_vat",
        ],
        ingredients: [
          {
            type: "neoforge:single",
            amount: 100,
            fluid: reactant,
          },
        ],
        machines: ["tfmg:electrode", "tfmg:electrode"],
        min_size: 1,
        processing_time: 100,
        results: [
          {
            amount: 45,
            id: product1,
          },
          {
            amount: 45,
            id: product2,
          },
        ],
      })
      .id(`northstar:electrolysis/${reactant.split(":")[1]}`);
  });

  //Remove recipes that produce northstar:carbon
  const carbonFrom = ["moon_sand", "venus_gravel", "coal", "biofuel"];
  carbonFrom.forEach((type) => {
    event.remove({ id: `northstar:compacting/carbon_from_${type}` });
  });
  //Remove other recipes
  const recipesToRemove = [
    "northstar:crushing/sand",
    "northstar:mixing/titanium1",
    "northstar:mixing/titanium2",
    "northstar:mixing/brine",
    "northstar:mixing/hydrocarbon_from_sodium",
    "northstar:mixing/hydrocarbon_from_carbon",
    "northstar:sequenced_assembly/titanium",
    "northstar:filling/sodium_catalyst",
    "northstar:compacting/brine_to_salt",
    "create:crushing/basalt"
  ];
  recipesToRemove.forEach((recipe) => {
    event.remove({ id: recipe });
  });
  //Replace recipes
  event.recipes.create
    .crushing(
      [
        "chemica:rutile_crystal",
        CreateItem.of("chemica:medium_grade_rutile_crystal", 0.35),
        CreateItem.of("chemica:high_grade_rutile_crystal", 0.1),
      ],
      "northstar:venus_gravel",
    )
    .id("create:crushing/venus_gravel");
  event.recipes.create
  .crushing(
    [
      "northstar:mars_sand",
      CreateItem.of("4x chemica:salt", 0.65),
      CreateItem.of("2x chemica:salt", 0.15),
    ],
    "northstar:mars_gravel",
  )
  .id("create:crushing/mars_gravel");
  
  //Replace northstar:freezing recipes for hydrogen and oxygen with tfmg and chemica elements
  const freezingRecipes = [
    ["tfmg:hydrogen", "chemica:liquid_hydrogen", -253],
    ["chemica:oxygen", "northstar:liquid_oxygen", -185],
  ];
  freezingRecipes.forEach(([gas, liquid, temperature]) => {
    event.recipes.northstar.freezing(Fluid.of(gas, 100), Fluid.of(liquid, 100), 20).hotterThan(temperature).id(`northstar:freezing/${gas.split(":")[1]}_evaporation`);
    event.recipes.northstar.freezing(Fluid.of(liquid, 100), Fluid.of(gas, 100), 20).colderThan(temperature).id(`northstar:freezing/${gas.split(":")[1]}_condensation`);
  });
  event.recipes.northstar.freezing(Fluid.of("chemica:methane", 100), "northstar:methane_ice", 20).hotterThan(-182).id(`northstar:freezing/methane_ice_melting`);
  event.recipes.northstar.freezing(Fluid.of("northstar:sodium", 100), "chemica:sodium_ingot", 20).hotterThan(98).id(`northstar:freezing/sodium_melting`);
  event.recipes.northstar.freezing("chemica:sodium_ingot", Fluid.of("northstar:sodium", 100), 20).colderThan(98).id(`northstar:freezing/sodium_freezing`);
});