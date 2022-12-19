// priority: 0

console.info('Silverlight KubeJS: Removed special armor set recipes')

ServerEvents.recipes(event => {
	// Removal of exclusive armor sets

// -------------------------- Nether sets

	// Wither set
	event.remove({output:'knight_quest:kq_wither_set_helmet'});
	event.remove({output:'knight_quest:kq_wither_set_chestplate'});
	event.remove({output:'knight_quest:kq_wither_set_leggings'});
	event.remove({output:'knight_quest:kq_wither_set_boots'});

	// enderdragon set
	event.remove({output:'knight_quest:kq_enderdragon_set_helmet'});
	event.remove({output:'knight_quest:kq_enderdragon_set_chestplate'});
	event.remove({output:'knight_quest:kq_enderdragon_set_leggings'});
	event.remove({output:'knight_quest:kq_enderdragon_set_boots'});

	// Veteran set
	event.remove({output:'knight_quest:kq_veteran_set_helmet'});
	event.remove({output:'knight_quest:kq_veteran_set_chestplate'});
	event.remove({output:'knight_quest:kq_veteran_set_leggings'});
	event.remove({output:'knight_quest:kq_veteran_set_boots'});

	// Forze set
	event.remove({output:'knight_quest:kq_forze_set_helmet'});
	event.remove({output:'knight_quest:kq_forze_set_chestplate'});
	event.remove({output:'knight_quest:kq_forze_set_leggings'});
	event.remove({output:'knight_quest:kq_forze_set_boots'});

// -------------------------- Special diamond sets

	// Spider set
	event.remove({output:'knight_quest:kq_spider_set_helmet'});
	event.remove({output:'knight_quest:kq_spider_set_chestplate'});
	event.remove({output:'knight_quest:kq_spider_set_leggings'});
	event.remove({output:'knight_quest:kq_spider_set_boots'});

	// Silverfish set
	event.remove({output:'knight_quest:kq_silverfish_set_helmet'});
	event.remove({output:'knight_quest:kq_silverfish_set_chestplate'});
	event.remove({output:'knight_quest:kq_silverfish_set_leggings'});
	event.remove({output:'knight_quest:kq_silverfish_set_boots'});

	// sea set
	event.remove({output:'knight_quest:kq_sea_set_helmet'});
	event.remove({output:'knight_quest:kq_sea_set_chestplate'});
	event.remove({output:'knight_quest:kq_sea_set_leggings'});
	event.remove({output:'knight_quest:kq_sea_set_boots'});

	// Path set
	event.remove({output:'knight_quest:kq_path_set_helmet'});
	event.remove({output:'knight_quest:kq_path_set_chestplate'});
	event.remove({output:'knight_quest:kq_path_set_leggings'});
	event.remove({output:'knight_quest:kq_path_set_boots'});

	// enderman set
	event.remove({output:'knight_quest:kq_enderman_set_helmet'});
	event.remove({output:'knight_quest:kq_enderman_set_chestplate'});
	event.remove({output:'knight_quest:kq_enderman_set_leggings'});
	event.remove({output:'knight_quest:kq_enderman_set_boots'});

	// bow set
	event.remove({output:'knight_quest:kq_bow_set_helmet'});
	event.remove({output:'knight_quest:kq_bow_set_chestplate'});
	event.remove({output:'knight_quest:kq_bow_set_leggings'});
	event.remove({output:'knight_quest:kq_bow_set_boots'});

	// Blaze set
	event.remove({output:'knight_quest:kq_blaze_set_helmet'});
	event.remove({output:'knight_quest:kq_blaze_set_chestplate'});
	event.remove({output:'knight_quest:kq_blaze_set_leggings'});
	event.remove({output:'knight_quest:kq_blaze_set_boots'});

})
/*

// ------------------ SQUIRE SET --------------------------------
	event.shaped('knight_quest:kq_squire_set_helmet', [
		'BCB',
		'DAD',
		'DDD'
	], {
		A: 'minecraft:diamond_helmet',
		B: 'minecraft:feather',
		C: 'minecraft:red_dye',
		D: 'create:iron_sheet'
	});

	event.shaped('knight_quest:kq_squire_set_chestplate', [
		'CBC',
		'BAB',
		'BBB'
	], {
		A: 'minecraft:diamond_chestplate',
		B: 'create:iron_sheet',
		C: 'minecraft:leather'
	});

	event.shaped('knight_quest:kq_squire_set_leggings', [
		'CBC',
		'CAC',
		'CCC'
	], {
		A: 'minecraft:diamond_leggings',
		B: 'minecraft:gold_ingot',
		C: 'minecraft:chain'
	});

	event.shaped('knight_quest:kq_squire_set_boots', [
		'   ',
		'BAB',
		'B B'
	], {
		A: 'minecraft:diamond_boots',
		B: 'minecraft:leather'
	});


// ------------------ APPLE SET --------------------------------
event.shaped('knight_quest:kq_apple_set_helmet', [
	'BCB',
	'DAD',
	'DDD'
], {
	A: 'minecraft:diamond_helmet',
	B: 'minecraft:feather',
	C: 'minecraft:red_dye',
	D: 'create:iron_sheet'
});

event.shaped('knight_quest:kq_apple_set_chestplate', [
	'CBC',
	'BAB',
	'BBB'
], {
	A: 'minecraft:diamond_chestplate',
	B: 'create:iron_sheet',
	C: 'minecraft:leather'
});

event.shaped('knight_quest:kq_apple_set_leggings', [
	'CBC',
	'CAC',
	'CCC'
], {
	A: 'minecraft:diamond_leggings',
	B: 'minecraft:gold_ingot',
	C: 'minecraft:chain'
});

event.shaped('knight_quest:kq_apple_set_boots', [
	'   ',
	'BAB',
	'B B'
], {
	A: 'minecraft:diamond_boots',
	B: 'minecraft:leather'
});

*/