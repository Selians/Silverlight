// priority: 0

console.info('KubeJS is here to fix shit)')

StartupEvents.registry('item', event => {

	// ------------------ SILVERLIGHT ------------------

	event
		.create('silverlight')
		.displayName('Silverlight');

	event
		.create('silverlight_refined')
		.displayName('Activated Silverlight');
	// Register new items here
	// event.create('example_item').displayName('Example Item')
});

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
});