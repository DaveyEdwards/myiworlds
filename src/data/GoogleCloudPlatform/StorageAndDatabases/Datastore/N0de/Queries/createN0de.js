import uuid from 'uuid/v1';
import N0de from '../n0deModel';

export async function createN0de(n0de) {
	let response = null;

	try {
		const newN0de = n0de;

		// This is here to allow you to link nodes with your seed file with one another
		// Everything inputed into the db will have its _id auto made for it
		if (newN0de._id == null) {
			newN0de._id = uuid();
		}

		const entityData = N0de.sanitize(newN0de);
		const n0deEntity = new N0de(entityData, entityData._id);

		response = await n0deEntity.save().then(entity => entity.plain());
	} catch (err) {
		console.info('\n', '\n', 'Help me, I have a ERROR. It is in Google Datastores "createN0deBy_id" database queries.', err, '\n', '\n');
	}
	return response;
}
