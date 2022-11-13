// priority: 0

console.info('KubeJS is here to fix shit)')

StartupEvents.registry('item', event => {
	event
		.create('silverlight_raw')
		.displayName('Silverlight')

		event
		.create('silverlight_awakened')
		.displayName('Awakened Silverlight')
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})