import Circle from '../circleModel';

// eslint-disable-next-line camelcase
export async function deleteCircleBy_id(_id) {
	let response = null;

	try {
		response = await Circle.delete(_id).then((res) => {
			if (!res.success) {
				// eslint-disable-next-line no-console
				console.log('\n', '\n', 'I could not delete that circle for you, the circles "_id" did not match anything inside Google Datastore.', '\n', '\n');
			}
			return res;
		});
	} catch (err) {
		console.info('\n', '\n', 'Help me, I have a ERROR. It is in Google Datastores "deleteCircleBy_id" database queries.', '\n', err, '\n');
	}
	return response;
}
