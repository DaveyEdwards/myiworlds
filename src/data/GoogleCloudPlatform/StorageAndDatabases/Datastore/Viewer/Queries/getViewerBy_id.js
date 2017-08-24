import Viewer from '../viewerModel';

// eslint-disable-next-line camelcase
export async function getViewerBy_id(_id) {
	let response = null;

	try {
		response = await Viewer.get(_id).then(entity => entity.plain());
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log('\n', '\n', 'I am so sorry master, I could not find a "circle" with that "id". Forgive me, but it must not exist.', '\n', '\n', 'ERROR: ', err, '\n', '\n');
	}

	return response;
}
