// Cursor NOT WORKING
//  Cursor is not passed in. Not sure if it helps to have cursors on DB side + Relay
import Viewer from '../viewerModel';

export async function getViewerList(request) {
	let response = [];

	try {
		// const viewerCursor = request.cursor; // Breaks when run without cursor, cursor generator has to run first then
		// Viewer.list(start: viewerCursor)
		response = await Viewer.list().then(response => response.entities);
	} catch (err) {
		console.log('getViewer err', err);
	}

	return response;
}
