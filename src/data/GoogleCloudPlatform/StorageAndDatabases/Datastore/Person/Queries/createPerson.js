import Person from '../personModel';

export async function createPerson(person) {
	let response = null;

	try {
		const entityData = Person.sanitize(person);
		const personEntity = new Person(entityData, entityData._id);
		console.log('personEntity', personEntity);

		response = await personEntity.save().then(entity => entity.plain());
	} catch (err) {
		console.info('savePerson err', err);
	}
	return response;
}
