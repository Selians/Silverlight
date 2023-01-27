// priority: 0

console.info('Silverlight KubeJS: Modifying Toms storage recipes')

ServerEvents.recipes(event => {

	event.remove({mod:'toms_storage'});

	// Terminals - WIP
	event.shaped('toms_storage:ts.storage_terminal', [
		'DCD',
		'DBD',
		'DAD'
	], {
		A: 'silverlight:silverlightraw',
		B: 'supplementaries:crystal_display',
		C: 'create:electron_tube',
		D: 'create:brass_sheet'
	});

	event.shaped('toms_storage:ts.crafting_terminal', [
		'BAB',
		'CCC',
		'CCC'
	], {
		A: 'toms_storage:ts.storage_terminal',
		B: 'create:mechanical_crafter',
		C: 'minecraft:stone_button'
	});

	event.shaped('toms_storage:ts.trim', [
		'BAB',
		'AAA',
		'BAB'
	], {
		A: '#minecraft:planks',
		B: 'create:brass_sheet'
	});
	
	event.shaped('4x toms_storage:ts.inventory_cable', [
		'ABA',
		'CCC',
		'ABA'
	], {
		A: 'minecraft:dried_kelp',
		B: 'create:brass_sheet',
		C: 'minecraft:string'
	});

	event.shaped('4x toms_storage:ts.inventory_cable_framed', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'minecraft:glass_pane',
		B: 'toms_storage:ts.inventory_cable'
	});

	event.shaped('toms_storage:ts.inventory_cable_connector', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'create:andesite_casing',
		B: 'toms_storage:ts.inventory_cable'
	});

	event.shaped('toms_storage:ts.inventory_cable_connector_framed', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'minecraft:glass_pane',
		B: 'toms_storage:ts.inventory_cable_connector'
	});

	event.shaped('toms_storage:ts.inventory_cable_connector_filtered', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'create:filter',
		B: 'toms_storage:ts.inventory_cable_connector'
	});

	event.shaped('toms_storage:ts.inventory_connector', [
		' B ',
		'BAB',
		' B '
	], {
		A: 'create:andesite_casing',
		B: 'toms_storage:ts.inventory_cable'
	});

	event.shaped('toms_storage:ts.open_crate', [
		' B ',
		'BAB',
		' B '
	], {
		A: 'create:andesite_casing',
		B: 'toms_storage:ts.inventory_cable_connector'
	});

	event.shaped('toms_storage:ts.inventory_proxy', [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: 'toms_storage:ts.open_crate',
		B: 'create:brass_sheet'
	});

	event.shaped('toms_storage:ts.inventory_hopper_basic', [
		' B ',
		'BAB',
		' B '
	], {
		A: 'minecraft:hopper',
		B: 'create:brass_sheet'
	});

	event.shaped('toms_storage:ts.level_emitter', [
		'BCB',
		'CAC',
		'BCB'
	], {
		A: 'minecraft:redstone_torch',
		B: 'create:brass_sheet',
		C: 'toms_storage:ts.inventory_cable'
	});

	event.shaped('toms_storage:ts.paint_kit', [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: 'minecraft:bucket',
		B: 'minecraft:painting',
	});

	event.shaped('toms_storage:ts.wireless_terminal', [
		'CBC',
		'CAC',
		'CDC'
	], {
		A: 'toms_storage:ts.storage_terminal',
		B: 'create:linked_controller',
		C: 'minecraft:stone_button',
		D: 'silverlight:silverlightraw'
	});

	event.shaped('toms_storage:ts.adv_wireless_terminal', [
		'CBC',
		'CAC',
		'CDC'
	], {
		A: 'toms_storage:ts.wireless_terminal',
		B: 'minecraft:netherite_ingot',
		C: 'create:sturdy_sheet',
		D: 'silverlight:silverlightraw'
	});


})