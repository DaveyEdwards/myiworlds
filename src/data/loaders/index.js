import n0deLoader from './n0deLoader';

// All your dataloaders
const allLoaders = {
	...n0deLoader,
};

export default function loaders() {
	return allLoaders;
}
