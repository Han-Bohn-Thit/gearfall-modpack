ItemEvents.modifyTooltips(event => {
    // Han, you can copy the full line ["chemica:cyclohexane_bucket", "C₆H₁₂", "Cyclic hydrocarbon"], and add more chemicals to the list below. 
    // Just make sure to follow the same format: [item_id, chemical_formula, category]. Don't change anything else
    // I hope you have installed mods from Mods.md
    // In game, press F3+H to enable advanced tooltips.
    // There are creative tabs on top right of the inventory, select the chemica tab, it will help you find the buckets/tanks more easily.
    // The bucket id will be shown in grey colour when you hover over the item. 
    // REMEMBER - The display name and id are different. You need to use the id for the code, not the display name. 
    // For example, the display name of "chemica:cyclohexane_bucket" is "Cyclohexane Bucket". If you use the display name in the code, it won't work.
    const chemicals = [
        ["chemica:cyclohexane_bucket", "C₆H₁₂", "Cyclic hydrocarbon"],
        ["tfmg:ethylene_bucket", "C₂H₄", "Aliphatic Alkene"],
    ]
    chemicals.forEach(([id, formula, category]) => {
        event.modify(id, tooltip => {
            tooltip.insert(1, Text.gold(`${formula}`));
            tooltip.insert(2, Text.gray(`${category}`));
        });
    });
})