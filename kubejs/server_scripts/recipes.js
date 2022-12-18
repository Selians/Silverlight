// priority: 0

console.info('Silverlight removed recipes loaded')

ServerEvents.recipes(event => {

// ------------------ REMOVED --------------------------------

	/* REMOVE BY RECIPE ID */
	event.remove({id:'projectvibrantjourneys:groundcover_cobblestone'});

	/* REMOVE BY OUTPUT ITEM ID */
	event.remove({output:'endrem:exotic_eye'});
	event.remove({output:'endrem:undead_eye'});
	event.remove({output:'endrem:witch_eye'});

	event.remove({output:'blocky_siege:ballista_stand'});
	event.remove({output:'blocky_siege:cannon_stand'});

	event.remove({output:'miningmaster:gem_forge'});

	event.remove({output:'create:empty_blaze_burner'});
	event.remove({output:'create:mechanical_arm'});
	event.remove({output:'create_things_and_misc:radar'});
	event.remove({output:'create:schematicannon'});

	/* REMOVE BY MODID */
	event.remove({mod:'knight_quest'});
	event.remove({mod:'naturescompass'});
	event.remove({mod:'structurecompass'});
	event.remove({mod:'orva_alarms'});
	event.remove({mod:'scalinghealth'});
	event.remove({mod: 'extractinator'});


// ------------------ CUSTOM RECIPES --------------------------------
    
	// BLOCKY SIEGE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

	event.shaped('blocky_siege:ballista_stand', [
		'BCB',
		'EDE',
		'AEA'
	], {
		A: '#minecraft:planks',
		B: 'comforts:rope_and_nail',
		C: 'create:rope_pulley',
		D: 'create_things_and_misc:radar',
		E: 'minecraft:iron_ingot'
	});

	// MININGMASTER <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

	event.shaped('miningmaster:gem_forge', [
		`AAA`,
		`BCB`,
		`BBB`
	], {
		A: 'silverlight:silverlightraw',
		B: 'minecraft:blackstone',
		C: 'minecraft:lava_bucket'
	});

	// COMPASSES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

	event.shaped('naturescompass:naturescompass', [
		`BAB`,
		`ACA`,
		`BAB`
	], {
		A: 'silverlight:silverlightraw',
		B: '#minecraft:saplings',
		C: 'minecraft:compass'
	});

	event.shaped('structurecompass:structure_compass', [
		`ABA`,
		`BCB`,
		`ABA`
	], {
		A: 'silverlight:silverlightraw',
		B: 'supplementaries:key',
		C: 'minecraft:compass'
	});

	// CREATE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

	event.shaped('create:empty_blaze_burner', [
		`ABA`,
		`BCB`,
		`ABA`
	], {
		A: 'silverlight:silverlightraw',
		B: 'create:iron_sheet',
		C: '#forge:netherrack'
	});

	event.shaped('create:mechanical_arm', [
		`BBC`,
		`B  `,
		`DEA`
	], {
		A: 'silverlight:silverlightraw',
		B: 'create:brass_sheet',
		C: 'create:precision_mechanism',
		D: 'create_sa:hydraulic_engine',
		E: 'create:brass_casing'
	});

	event.shaped('create_things_and_misc:radar', [
		`BAB`,
		`BCB`,
		`BBB`
	], {
		A: 'silverlight:silverlightraw',
		B: 'create:andesite_alloy',
		C: 'create_things_and_misc:vibration_mechanism'
	});

	event.shaped('create:schematicannon', [
		` E `,
		`BAB`,
		`CDC`
	], {
		A: 'silverlight:silverlightraw',
		B: '#minecraft:logs',
		C: 'minecraft:smooth_stone',
		D: 'create_things_and_misc:card_reader',
		E: 'blocky_siege:cannon'
	});


	// ALARMS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

	event.shaped('orva_alarms:alarm', [
		`CBC`,
		`CAC`,
		`CBC`
	], {
		A: 'alexsmobs:skreecher_soul',
		B: 'supplementaries:speaker_block',
		C: '#minecraft:planks'
	});

	event.shaped('orva_alarms:fire_alarm', [
		`BBB`,
		`BAB`,
		`BBB`
	], {
		A: 'orva_alarms:smoke_detector',
		B: 'minecraft:iron_ingot',
	});

	event.shapeless('orva_alarms:custom_alarm',['orva_alarms:alarm', 'silverlight:silverlightraw']);
	event.shapeless('orva_alarms:smoke_detector',['orva_alarms:alarm', 'minecraft:observer']);
	event.shapeless('orva_alarms:sc_palarm',['orva_alarms:alarm', 'minecraft:purple_dye']);
	event.shapeless('orva_alarms:raidsiren',['orva_alarms:alarm', 'minecraft:cyan_dye']);
	event.shapeless('orva_alarms:nuclearsiren',['orva_alarms:alarm', 'minecraft:lime_dye']);
	event.shapeless('orva_alarms:apo_1',['orva_alarms:alarm', 'minecraft:blue_dye']);
	event.shapeless('orva_alarms:apo_2',['orva_alarms:alarm', 'minecraft:green_dye']);
	event.shapeless('orva_alarms:apo_3',['orva_alarms:alarm', 'minecraft:yellow_dye']);
	event.shapeless('orva_alarms:scp_major',['orva_alarms:alarm', 'supplementaries:speaker_block']);
	event.shapeless('orva_alarms:nuclear_meltdown',['orva_alarms:alarm', 'supplementaries:speaker_block']);
	event.shapeless('orva_alarms:prison_alarm',['orva_alarms:alarm', 'minecraft:orange_dye']);
	event.shapeless('orva_alarms:eas_alarm',['orva_alarms:alarm', 'minecraft:black_dye']);
	event.shapeless('orva_alarms:v_3_siren',['orva_alarms:alarm', 'minecraft:red_dye']);


	// KNIGHT QUEST <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

	event.shaped('knight_quest:kq_goblet_empty', [
		`A A`,
		`ABA`,
		` A `
	], {
		A: 'create:copper_nugget',
		B: 'minecraft:copper_ingot',
	});

	event.smithing('knight_quest:chalice_state_0', 'minecraft:cauldron', 'minecraft:copper_block')

	// EXTRACTINATOR <<<<<<<<<<<<<<<<<<<<<<<<<<<<
	event.shaped('extractinator:extractinator', [
		'BAG',
		'CFD',
		'HEG'
	], {
		A: 'minecraft:hopper',
		B: 'create:millstone',
		C: 'create:mechanical_press',
		D: 'silverlight:silverlightraw',
		E: 'minecraft:blast_furnace',
		F: 'create:mechanical_pump',
		G: 'minecraft:iron_ingot',
		H: 'minecraft:copper_block'
	})


// EYES <<<<<<<<<<<<<<<<<<<<<<<<<<<<

event.shapeless('endrem:black_eye',['#forge:tools/scavenging', 'minecraft:heart_of_the_sea']);

event.shapeless('born_in_chaos_v1:infernal_evil_pumpkin_s',['born_in_chaos_v1:infernal_evil_pumpkin', 'minecraft:skeleton:skull']);

// ------------------ SEQUENCE --------------------------------






// ------------------ TAGS --------------------------------




})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})