PlayerEvents.advancement((event) => {

    event.checkTimer = 20;
    event.check = (advancement, player);

    if(event.advancement.type == "minecraft:story/obtain_armor") {
        event.server.runCommandSilent('sh_difficulty add @p 10')
    }

});