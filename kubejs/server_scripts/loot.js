LootJS.modifiers((event) => {

// Remove loot from chest
    event.addLootTypeModifier(LootType.CHEST)
        //End Remastered items
        .removeLoot("endrem:black_eye") // Buried treasure
        .removeLoot("endrem:cold_eye") // Igloos
        .removeLoot("endrem:corrupted_eye") // Pillager outposts
        .removeLoot("endrem:lost_eye") // Mineshafts
        .removeLoot("endrem:nether_eye") // Nether fortress
        //.removeLoot("endrem:old_eye") // Desert pyramids
        //.removeLoot("endrem:rogue_eye") // Jungle temples
        //.removeLoot("endrem:cursed_eye") // Bastion
        .removeLoot("endrem:evil_eye") //Buy from master cleric
        .removeLoot("endrem:guardian_eye") //Dropped by elder guardian
        .removeLoot("endrem:magical_eye") // Dropped by evokers
        .removeLoot("endrem:wither_eye") // Dropped by Wither
        .removeLoot("endrem:witch_eye") // Crafted 
        .removeLoot("endrem:undead_eye") // Crafted
        .removeLoot("endrem:exotic_eye") // Crafted
        // Scaling Health items
        .removeLoot("scalinghealth:heart_crystal")
        .removeLoot("scalinghealth:power_crystal")
        .removeLoot("scalinghealth:cursed_heart")
        .removeLoot("scalinghealth:chance_heart")
        .removeLoot("scalinghealth:enchanted_heart")
        .removeLoot("scalinghealth:bandages")
        .removeLoot("scalinghealth:medkit");

// Remove from blocks
    event.addBlockLootModifier("minecraft:spawner")
        .removeLoot("knight_quest:kq_great_essence");

// --------------------- SCALING HEALTH ------------------------
event.addLootTableModifier("scalinghealth:bonus_drops/hostile", "scalinghealth:bonus_drops/peaceful")
.removeLoot("scalinghealth:heart_crystal")
.removeLoot("scalinghealth:power_crystal")
.removeLoot("scalinghealth:cursed_heart")
.removeLoot("scalinghealth:chance_heart")
.removeLoot("scalinghealth:enchanted_heart")
.removeLoot("scalinghealth:bandages")
.removeLoot("scalinghealth:medkit");

// ------------------ SILVERLIGHT MOB DROPS ----------------
// May drop silverlight when killed by a player in low light levels
    event.addEntityLootModifier("born_in_chaos_v1:supreme_bonecaller")
        .killedByPlayer()
        .timeCheck(13000, 23000)
        .randomChance(0.4)
        .addLoot(Item.of('silverlight:silverlightraw', 3));

    event.addEntityLootModifier("born_in_chaos_v1:bonecaller")
        .killedByPlayer()
        .timeCheck(13000, 23000)
        .randomChance(0.33)
        .addLoot(Item.of('silverlight:silverlightraw', 1));

    event.addEntityLootModifier("born_in_chaos_v1:fallen_chaos_knight")
        .killedByPlayer()
        .timeCheck(13000, 23000)
        .randomChance(0.25)
        .addLoot(Item.of('silverlight:silverlightraw', 1));

    event.addEntityLootModifier("born_in_chaos_v1:skeleton_thrasher")
        .killedByPlayer()
        .timeCheck(13000, 23000)
        .randomChance(0.3)
        .addLoot(Item.of('silverlight:silverlightraw', 2));

        event.addEntityLootModifier("born_in_chaos_v1:nightmare_stalker")
        .killedByPlayer()
        .timeCheck(13000, 23000)
        .randomChance(0.75)
        .addLoot(Item.of('silverlight:silverlightraw', 2));


// ------------------ BOSSES ----------------

    event.addEntityLootModifier("cataclysm:netherite_monstrosity")
        .addLoot('silverlight:silverlightraw_refined')
        .addLoot("endrem:lost_eye");

    event.addEntityLootModifier("cataclysm:ignis")
        .addLoot('silverlight:silverlightraw_refined')
        .addLoot("endrem:nether_eye");

    event.addEntityLootModifier("ob_aquamirae:captain_cornelia")
        .addLoot('silverlight:silverlightraw_refined')
        .addLoot("endrem:nether_eye");
    
    event.addEntityLootModifier("born_in_chaos_v1:felsteed")
        .addLoot('silverlight:silverlightraw_refined')
        .addLoot("endrem:undead_eye");

    event.addEntityLootModifier("knight_quest:kq_netherman")
        .addLoot('silverlight:silverlightraw_refined')
        .addLoot("endrem:corrupted_eye");

});