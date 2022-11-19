// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

	/* REMOVE BY RECIPE ID */
	event.remove({id:'projectvibrantjourneys:groundcover_cobblestone'});

	/* REMOVE BY OUTPUT ITEM ID */
	event.remove({output:'endrem:exotic_eye'});
	event.remove({output:'endrem:undead_eye'});
	event.remove({output:'endrem:witch_eye'});

	event.remove({output:'blocky_siege:ballista_stand'});
	event.remove({output:'blocky_siege:cannon_stand'});

	event.remove({output:'miningmaster:gem_forge'});

	/* REMOVE BY MODID */
	event.remove({mod:'knight_quest'});

	/* RECIPES */

	event.shaped('blocky_siege:ballista_stand', [
		'BCB',
		' D ',
		'AEA'
	], {
		A: '#minecraft:planks',
		B: 'comforts:rope_and_nail',
		C: 'create:rope_pulley',
		D: 'create_things_and_misc:radar',
		E: '#minecraft:iron_block'
	});

	event.shaped('blocky_siege:cannon_stand', [
		' A ',
		'BCB',
		'EDE'
	], {
		A: 'blocky_siege:cannon',
		B: 'minecraft:gold_block',
		C: 'minecraft:observer',
		D: 'create_things_and_misc:radar',
		E: '#minecraft:logs'
	});

	// THIS DOESNT WORK YET
	event.shaped('miningmaster:gem_forge', [
		`AAA`,
		`BCB`,
		`BBB`
	], {
		A: 'kubejs:silverlight_refined',
		B: 'minecraft:blackstone',
		C: 'minecraft:lava_bucket'
	});
	
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})