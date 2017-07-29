import N0de from '../../../models/gcpDatastore/N0de';

export async function deleteN0deBy_id(_id) {
	let response = null;

	try {
		response = await N0de.delete(_id).then((res) => {
			if (!res.success) {
				console.log('No entity deleted. There is no N0de Entity with the _id provided');
			}
			return res;
		});
	} catch (err) {
		console.info('deleteN0deBy_id err', err);
	}
	return console.log(response);
}
