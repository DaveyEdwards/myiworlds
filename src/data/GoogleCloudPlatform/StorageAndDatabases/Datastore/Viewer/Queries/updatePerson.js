import Viewer from '../viewerModel';

export default async function editViewer(viewer) {
	let response = null;

	try {
		// eslint-disable-next-line camelcase
		const viewer_id = viewer._id;
		const entityData = Viewer.sanitize(viewer);

		response = await Viewer.update(viewer_id, entityData).then(entity => entity.plain());
	} catch (err) {
		console.info('editViewer err', err);
	}
	return response;
}
