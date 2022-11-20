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


// ------------------ SHAPED (and some shapeless) --------------------------------
    
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

	event.shaped('blocky_siege:cannon_stand', [
		' A ',
		'CCC',
		'EDE'
	], {
		A: 'blocky_siege:cannon',
		C: 'minecraft:iron_ingot',
		D: 'create_things_and_misc:radar',
		E: '#minecraft:logs'
	});

	// MININGMASTER <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

	event.shaped('miningmaster:gem_forge', [
		`AAA`,
		`BCB`,
		`BBB`
	], {
		A: 'kubejs:silverlight',
		B: 'minecraft:blackstone',
		C: 'minecraft:lava_bucket'
	});

	// COMPASSES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

	event.shaped('naturescompass:naturescompass', [
		`BAB`,
		`ACA`,
		`BAB`
	], {
		A: 'kubejs:silverlight_refined',
		B: '#minecraft:saplings',
		C: 'minecraft:compass'
	});

	event.shaped('structurecompass:structure_compass', [
		`ABA`,
		`BCB`,
		`ABA`
	], {
		A: 'kubejs:silverlight_refined',
		B: 'supplementaries:key',
		C: 'minecraft:compass'
	});

	// CREATE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

	event.shaped('create:empty_blaze_burner', [
		`ABA`,
		`BCB`,
		`ABA`
	], {
		A: 'kubejs:silverlight_refined',
		B: 'create:iron_sheet',
		C: '#forge:netherrack'
	});

	event.shaped('create:mechanical_arm', [
		`BBC`,
		`B  `,
		`DEA`
	], {
		A: 'kubejs:silverlight_refined',
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
		A: 'kubejs:silverlight_refined',
		B: 'create:andesite_alloy',
		C: 'create_things_and_misc:vibration_mechanism'
	});

	event.shaped('create:schematicannon', [
		` E `,
		`BAB`,
		`CDC`
	], {
		A: 'kubejs:silverlight_refined',
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

	event.shapeless('orva_alarms:custom_alarm',['orva_alarms:alarm', 'kubejs:silverlight_refined']);
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


// ------------------ SEQUENCE --------------------------------






// ------------------ TAGS --------------------------------




})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})