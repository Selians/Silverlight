// priority: 0

console.info('Silverlight KubeJS: Removed special armor set recipes')

ServerEvents.recipes(event => {

	// Wine crushing
	event.custom({
		"type": "create:crushing",
		"group": "minecraft:misc",
		"ingredients": [
			{
				"item": "croptopia:grape"
			}
		], 
		"results": [
			{
				"item": "vinery:red_grape_seeds",
				"count": 1
			},
			{
				"item": "vinery:red_grape_seeds",
				"count": 1,
				"chance": 0.25
			}
		],
		"processingTime": 100
	});

	event.custom({
		"type": "create:crushing",
		"group": "minecraft:misc",
		"ingredients": [
			{
				"item": "vinery:red_grape"
			}
		], 
		"results": [
			{
				"item": "vinery:red_grape_seeds",
				"count": 1
			},
			{
				"item": "vinery:red_grape_seeds",
				"count": 1,
				"chance": 0.25
			}
		],
		"processingTime": 100
	});

	event.custom({
		"type": "create:crushing",
		"group": "minecraft:misc",
		"ingredients": [
			{
				"item": "vinery:white_grape"
			}
		], 
		"results": [
			{
				"item": "vinery:white_grape_seeds",
				"count": 1
			},
			{
				"item": "vinery:white_grape_seeds",
				"count": 1,
				"chance": 0.25
			}
		],
		"processingTime": 100
	});

})