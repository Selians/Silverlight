// priority: 0

console.info('Silverlight KubeJS: Removed special armor set recipes')

ServerEvents.recipes(event => {

	event.remove({output:'born_in_chaos_v1:nightmare_scythe'});
	event.remove({output:'born_in_chaos_v1:great_reaper_axe'});
	event.remove({output:'born_in_chaos_v1:armor_plate_from_dark_metal'});

// 3X3 RECIPES

	event.shaped('born_in_chaos_v1:great_reaper_axe', [
		`CAA`,
		`CB `,
		` B `
	], {
		A: 'born_in_chaos_v1:dark_metal_ingot',
		B: 'born_in_chaos_v1:bone_handle',
		C: 'minecraft:netherite_ingot'
	});

	event.shaped('born_in_chaos_v1:nightmare_scythe', [
		`CCA`,
		` B `,
		`B  `
	], {
		A: 'born_in_chaos_v1:dark_metal_ingot',
		B: 'born_in_chaos_v1:bone_handle',
		C: 'minecraft:netherite_ingot'
	});

	event.shaped('born_in_chaos_v1:armor_plate_from_dark_metal', [
		`   `,
		`   `,
		`AAA`
	], {
		A: 'born_in_chaos_v1:dark_metal_ingot',
	});

})