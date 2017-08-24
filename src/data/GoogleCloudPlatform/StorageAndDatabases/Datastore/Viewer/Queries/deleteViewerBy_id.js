import Viewer from '../viewerModel';

// eslint-disable-next-line camelcase
export async function deleteViewerBy_id(_id) {
	let response = null;

	try {
		response = await Viewer.delete(_id).then((res) => {
			if (!res.success) {
				console.log('No entity deleted. There is no Viewer Entity with the _id provided');
			}
			return res;
		});
	} catch (err) {
		console.info('deleteViewerBy_id err', err);
	}
	return console.log(response);
}
