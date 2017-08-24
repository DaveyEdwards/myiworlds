import Viewer from '../viewerModel';

export async function createViewer(viewer) {
	let response = null;

	try {
		const entityData = Viewer.sanitize(viewer);
		const viewerEntity = new Viewer(entityData, entityData._id);
		console.log('viewerEntity', viewerEntity);

		response = await viewerEntity.save().then(entity => entity.plain());
	} catch (err) {
		console.info('saveViewer err', err);
	}
	return response;
}
