import thingLoader from './thingLoader';

// All your dataloaders
const allLoaders = {
  ...thingLoader,
};

export default function loaders() {
  return allLoaders;
}
