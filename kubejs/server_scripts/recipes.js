// priority: 0

console.info('Silverlight KubeJS: recipes initialized')

ServerEvents.recipes(event => {

// ------------------ REMOVED --------------------------------

	/* REMOVE BY OUTPUT ITEM ID */
	event.remove({output:'endrem:exotic_eye'});
	event.remove({output:'endrem:undead_eye'});
	event.remove({output:'endrem:witch_eye'});

	event.remove({output:'miningmaster:gem_forge'});

	event.remove({output:'ftbquests:book'});

	event.remove({output:'create:empty_blaze_burner'});
	event.remove({output:'create:mechanical_arm'});
	event.remove({output:'create_things_and_misc:radar'});
	event.remove({output:'create:schematicannon'});

	event.remove({output:'alexsmobs:dimensional_carver'});

	/* REMOVE BY MODID */
	event.remove({mod:'naturescompass'});
	event.remove({mod:'structurize'});
	event.remove({mod:'structurecompass'});
	event.remove({mod:'orva_alarms'});
	event.remove({mod:'scalinghealth'});
	event.remove({mod:'extractinator'});
	event.remove({mod:'cosmosportals'});


// ------------------ CUSTOM RECIPES --------------------------------

	// Questbook <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

	event.shapeless('ftbquests:book',['minecraft:spyglass', 'silverlight:silverlightraw']);

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
		C: 'create_things_and_misc:radar'
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


	// BLOCKY SIEGE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

	event.remove({output:'blocky_siege:ballista_stand'});
	event.remove({output:'blocky_siege:roaster_stand'});
	event.remove({output:'blocky_siege:cannon'});

	//CANNON
	event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
            'LRSSS',
            'CC   '
        ],
        'key': {
            'L': {
                'item': 'minecraft:blast_furnace'
            },
            'R': {
                'item': 'create:precision_mechanism'
            },
            'S': {
                'item': 'blocky_siege:block_of_cast_iron'
            },
            'C': {
                'item': 'blocky_siege:gears'
            }
        },
        'result': {
            'item': 'blocky_siege:cannon'
        },
        'acceptMirrored': true
    });

    // BALLISTA
    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
            ' E ',
            'CEC',
            ' E ',
            'ADA'
        ],
        'key': {
            'A': {
                'item': 'blocky_siege:charred_planks'
            },
            'C': {
                'item': 'create:rope_pulley'
            },
            'D': {
                'item': 'blocky_siege:gears'
            },
            'E': {
                'item': 'blocky_siege:block_of_cast_iron'
            }
        },
        'result': {
            'item': 'blocky_siege:ballista_stand'
        },
        'acceptMirrored': true
    });

    // ROASTER
    event.custom({
        'type': 'create:mechanical_crafting',
        'pattern': [
            'EEE',
            'ECE',
            'EDE',
            'ADA'
        ],
        'key': {
            'A': {
                'item': 'blocky_siege:charred_planks'
            },
            'C': {
                'item': 'create:blaze_burner'
            },
            'D': {
                'item': 'blocky_siege:gears'
            },
            'E': {
                'item': 'blocky_siege:block_of_cast_iron'
            }
        },
        'result': {
            'item': 'blocky_siege:roaster_stand'
        },
        'acceptMirrored': true
    });

// BACKPACKS <<<<<<<<<<<<<<<<<<<<<<<<<<<<

	event.shaped('backpacked:backpack', [
		`AAA`,
		`BCB`,
		`AAA`
	], {
		A: 'born_in_chaos_v1:monster_skin',
		B: 'minecraft:string',
		C: 'minecraft:iron_ingot'
	});

// EYES <<<<<<<<<<<<<<<<<<<<<<<<<<<<

event.shapeless('endrem:black_eye',['#forge:tools/scavenging', 'minecraft:heart_of_the_sea']);

event.shapeless('born_in_chaos_v1:infernal_evil_pumpkin_s',['born_in_chaos_v1:infernal_evil_pumpkin', 'minecraft:skeleton_skull']);

event.shapeless('vinery:cherry_crate', '9x vinery:cherry')
event.shapeless('vinery:white_grape_crate', '9x vinery:white_grape')
event.shapeless('vinery:red_grape_crate', '9x vinery:red_grape')
event.shapeless('vinery:apple_crate', '9x minecraft:apple')

// VINERY <<<<<<<<<<<<<<<<<<<<<<<<<

event.shaped('vinery:gloves', [
	`B B`,
	`B B`,
	`A A`
], {
	A: 'create:brass_nugget',
	B: 'minecraft:leather'
});


})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})