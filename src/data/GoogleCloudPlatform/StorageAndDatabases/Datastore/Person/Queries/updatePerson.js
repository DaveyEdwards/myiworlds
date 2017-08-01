import Person from '../personModel';

export default async function editPerson(person) {
	let response = null;

	try {
		// eslint-disable-next-line camelcase
		const person_id = person._id;
		const entityData = Person.sanitize(person);

		response = await Person.update(person_id, entityData).then(entity => entity.plain());
	} catch (err) {
		console.info('editPerson err', err);
	}
	return response;
}
