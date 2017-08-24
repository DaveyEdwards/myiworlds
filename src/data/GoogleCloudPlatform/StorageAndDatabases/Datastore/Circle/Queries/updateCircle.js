import Circle from '../circleModel';

export async function updateCircle(circle) {
	let response = null;

	try {
		// eslint-disable-next-line camelcase
		const circle_id = circle._id;
		const entityData = Circle.sanitize(circle);

		response = await Circle.update(circle_id, entityData).then(entity => entity.plain());
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log('\n', '\n', 'I am so sorry master, I could not find a "circle" with that "id". Forgive me, but it must not exist.', '\n', '\n');
	}
	return response;
}
