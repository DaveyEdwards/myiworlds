import n0deLoader from './N0deLoader';
import personLoader from './PersonLoader';


// All your dataloaders
const allLoaders = {
	...n0deLoader,
	...personLoader,
};

export default function loaders() {
	return allLoaders;
}
