StartupEvents.registry('item', event => {
  event.create('lava_key')
  .displayName('Lava Key')
  .maxStackSize(1)
  .glow(true)
  .tooltip("Right click on a vent to activate it!")
  .rarity('epic')
})