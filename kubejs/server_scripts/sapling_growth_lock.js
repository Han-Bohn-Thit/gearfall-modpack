// 1. Handle Natural Growth
BlockEvents.randomTick('minecraft:spruce_sapling', event => {
  if (!event.level.getBiome(event.block.getPos()).isTag('gearfall:biomes/cold')) event.cancel()
})
BlockEvents.randomTick('minecraft:birch_sapling', event => {
  if (!event.level.getBiome(event.block.getPos()).isTag('gearfall:biomes/brich')) event.cancel()
})
BlockEvents.randomTick('minecraft:jungle_sapling', event => {
  if (!event.level.getBiome(event.block.getPos()).isTag('gearfall:biomes/jungle')) event.cancel()
})
BlockEvents.randomTick('minecraft:acacia_sapling', event => {
  if (!event.level.getBiome(event.block.getPos()).isTag('gearfall:biomes/savanna')) event.cancel()
})
BlockEvents.randomTick('minecraft:dark_oak_sapling', event => {
  if (!event.level.getBiome(event.block.getPos()).isTag('gearfall:biomes/dark_forest')) event.cancel()
})
BlockEvents.randomTick('minecraft:cherry_sapling', event => {
  if (!event.level.getBiome(event.block.getPos()).isTag('gearfall:biomes/cherry')) event.cancel()
})
BlockEvents.randomTick('minecraft:mangrove_propagule', event => {
  if (!event.level.getBiome(event.block.getPos()).isTag('gearfall:biomes/swamp')) event.cancel()
})
BlockEvents.randomTick('minecraft:bamboo', event => {
  if (!event.level.getBiome(event.block.getPos()).isTag('gearfall:biomes/jungle')) event.cancel()
})
BlockEvents.randomTick('minecraft:cactus', event => {
  if (!event.level.getBiome(event.block.getPos()).isTag('gearfall:biomes/hot')) event.cancel()
})

// 2. Handle Bonemeal (Player Interaction)
BlockEvents.rightClicked('minecraft:spruce_sapling', event => {
  bonemealHandle(event, 'gearfall:biomes/cold');
});
BlockEvents.rightClicked('minecraft:birch_sapling', event => {
  bonemealHandle(event, 'gearfall:biomes/birch');
});
BlockEvents.rightClicked('minecraft:jungle_sapling', event => {
  bonemealHandle(event, 'gearfall:biomes/jungle');
});
BlockEvents.rightClicked('minecraft:acacia_sapling', event => {
  bonemealHandle(event, 'gearfall:biomes/savanna');
});
BlockEvents.rightClicked('minecraft:dark_oak_sapling', event => {
  bonemealHandle(event, 'gearfall:biomes/dark_oak');
});
BlockEvents.rightClicked('minecraft:cherry_sapling', event => {
  bonemealHandle(event, 'gearfall:biomes/cherry');
});
BlockEvents.rightClicked('minecraft:mangrove_propagule', event => {
  bonemealHandle(event, 'gearfall:biomes/swamp');
});
BlockEvents.rightClicked('minecraft:bamboo', event => {
  bonemealHandle(event, 'gearfall:biomes/jungle');
});
BlockEvents.rightClicked('minecraft:cactus', event => {
  bonemealHandle(event, 'gearfall:biomes/hot');
});

function bonemealHandle(event, biomeTag) {
  const { item, block, level, player, server } = event;

  // a. Guard clauses for early exit
  if (item.id !== 'minecraft:bone_meal') return;
  if (level.getBiome(block.getPos()).isTag(biomeTag)) return;

  // b. Logic for when it CANNOT grow
  level.spawnParticles('minecraft:smoke', true, block.x + 0.5, block.y + 0.8, block.z + 0.5, 2, 0.05, 0.05, 0.05, 0.01);
  server.runCommandSilent(`advancement grant ${player.username} only gearfall:it_doesnt_want_to_grow`);
  
  event.cancel();
}