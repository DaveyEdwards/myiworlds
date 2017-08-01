import { createPerson } from './Queries/';

const persons = [
	{
		_id: 'person000000000000000000000000000001',
		username: 'MyiWorlds',
		email: 'myiworlds@myiworlds.com',
	},
	{
		_id: 'person000000000000000000000000000002',
		username: 'DaveyEdwards',
		email: 'davey@hotmale.com',
	},
];

// TODO: Make export Default
export async function generatePersons() {
	persons.map(person =>
		createPerson(person).then(console.log('\n', '__PERSON__', '\n', '\n', person)), // eslint-disable-line no-console,
	);
}
