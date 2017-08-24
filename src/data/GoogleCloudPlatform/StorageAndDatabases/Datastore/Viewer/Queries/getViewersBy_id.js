import Viewer from '../viewerModel';

// eslint-disable-next-line camelcase
export async function getViewersBy_id(_ids) {
	let response = null;
	try {
		response = await Viewer.get(_ids, null, null, null, { preserveOrder: true });
	} catch (err) {
		return {
			status: 'ERROR',
			errorId: 'getViewersBy_id err',
			err,
		};
	}

	return response.map(entity => entity.plain());
}
