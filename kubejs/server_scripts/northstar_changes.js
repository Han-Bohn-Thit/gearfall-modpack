ServerEvents.recipes((event) => {
  //Replace northstar:circuit recipe
  event.recipes.create
    .sequenced_assembly(
      [
        CreateItem.of("northstar:circuit", 0.95),
        CreateItem.of("chemica:electronic_circuit", 0.03),
        CreateItem.of("chemica:tantalum_capacitor_item", 0.02),
      ],
      "chemica:electronic_circuit",
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

  //Replace northstar:electrolysis recipes with tfmg:vat_machine_recipe for water hydrolysis
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
          fluid: "minecraft:water",
        },
      ],
      machines: ["tfmg:electrode", "tfmg:electrode"],
      min_size: 1,
      processing_time: 100,
      results: [
        {
          amount: 45,
          id: "tfmg:hydrogen",
        },
        {
          amount: 45,
          id: "chemica:oxygen",
        },
      ],
    })
    .id(`northstar:electrolysis/water`);

  //Replace northstar:rutile_concentrate recipe
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

  //Replace northstar:freezing recipes for hydrogen and oxygen with tfmg and chemica elements
  const freezingRecipes = [
    ["tfmg:hydrogen", "chemica:liquid_hydrogen", -253],
    ["chemica:oxygen", "northstar:liquid_oxygen", -185],
  ];
  freezingRecipes.forEach(([gas, liquid, temperature]) => {
    event.recipes.northstar
      .freezing(Fluid.of(gas, 100), Fluid.of(liquid, 100), 20)
      .hotterThan(temperature)
      .id(`northstar:freezing/${gas.split(":")[1]}_evaporation`);
    event.recipes.northstar
      .freezing(Fluid.of(liquid, 100), Fluid.of(gas, 100), 20)
      .colderThan(temperature)
      .id(`northstar:freezing/${gas.split(":")[1]}_condensation`);
  });
  event.recipes.northstar
    .freezing(Fluid.of("chemica:methane", 100), "northstar:methane_ice", 20)
    .hotterThan(-182)
    .id(`northstar:freezing/methane_ice_melting`);
  event.recipes.northstar
    .freezing(Fluid.of("northstar:sodium", 100), "chemica:sodium_ingot", 20)
    .hotterThan(98)
    .id(`northstar:freezing/sodium_melting`);
  event.recipes.northstar
    .freezing("chemica:sodium_ingot", Fluid.of("northstar:sodium", 100), 20)
    .colderThan(98)
    .id(`northstar:freezing/sodium_freezing`);
    
  event.replaceOutput(
    { output: Fluid.of("northstar:carbon", 100) },
    Fluid.of("northstar:carbon", 100),
    Fluid.of("tfmg:carbon_dioxide", 100),
  );

  //Replace northstar:hardened_precision_mechanism recipe
  event.recipes.create
    .sequenced_assembly(
      [
        CreateItem.of("northstar:hardened_precision_mechanism", 0.85),
        CreateItem.of("tfmg:steel_nugget", 0.05),
        CreateItem.of("tfmg:steel_cogwheel", 0.10),
      ],
      "create:precision_mechanism",
      [
        event.recipes.create.deploying("northstar:incomplete_hardened_precision_mechanism", [
          "northstar:incomplete_hardened_precision_mechanism",
          "chemica:titanium_nugget",
        ]),
        event.recipes.create.deploying("northstar:incomplete_hardened_precision_mechanism", [
          "northstar:incomplete_hardened_precision_mechanism",
          "tfmg:steel_cogwheel",
        ]),
        event.recipes.create.deploying("northstar:incomplete_hardened_precision_mechanism", [
          "northstar:incomplete_hardened_precision_mechanism",
          "tfmg:large_steel_cogwheel",
        ]),
      ],
    )
    .transitionalItem("northstar:incomplete_hardened_precision_mechanism")
    .loops(5)
    .id("northstar:sequenced_assembly/hardened_precision_mechanism");
});
