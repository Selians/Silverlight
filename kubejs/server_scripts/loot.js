LootJS.modifiers((event) => {

    /* Remove loot from chest */
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("endrem:black_eye") // Buried treasure
        .removeLoot("endrem:cold_eye") // Igloos
        .removeLoot("endrem:corrupted_eye") // Pillager outposts
        .removeLoot("endrem:lost_eye") // Mineshafts
        .removeLoot("endrem:nether_eye") // Nether fortress
        .removeLoot("endrem:old_eye") // Desert pyramids
        .removeLoot("endrem:rogue_eye") // Jungle temples
        .removeLoot("endrem:cursed_eye") // Bastion
        .removeLoot("endrem:evil_eye") //Buy from master cleric
        .removeLoot("endrem:guardian_eye") //Dropped by elder guardian
        .removeLoot("endrem:magical_eye") // Dropped by evokers
        .removeLoot("endrem:wither_eye") // Dropped by Wither
        .removeLoot("endrem:witch_eye") // Crafted 
        .removeLoot("endrem:undead_eye") // Crafted
        .removeLoot("endrem:exotic_eye"); // Crafted

// ------------------ SILVERLIGHT MOB DROPS ----------------
    event
        .addEntityLootModifier("born_in_chaos_v1:supreme_bonecaller")
        .killedByPlayer()
        .lightLevel(0.6)
        .randomChange(0.25)
        .addLoot(Item.of('kubejs:silverlight', 3));

    event
        .addEntityLootModifier("born_in_chaos_v1:fallen_chaos_knight")
        .killedByPlayer()
        .lightLevel(0.6)
        .randomChange(0.25)
        .addLoot(Item.of('kubejs:silverlight', 1));

// ------------------ BOSSES ----------------

    event
        .addEntityLootModifier("cataclysm:netherite_monstrosity")
        .addLoot('kubejs:silverlight_refined')
        .addLoot("endrem:lost_eye");

    event
        .addEntityLootModifier("cataclysm:ignis")
        .addLoot('kubejs:silverlight_refined')
        .addLoot("endrem:nether_eye");

    event
        .addEntityLootModifier("ob_aquamirae:captain_cornelia")
        .addLoot('kubejs:silverlight_refined')
        .addLoot("endrem:nether_eye");
    
    event
        .addEntityLootModifier("born_in_chaos_v1:felsteed")
        .addLoot('kubejs:silverlight_refined')
        .addLoot("endrem:undead_eye");

});