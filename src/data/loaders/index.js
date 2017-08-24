import circleLoader from './CircleLoader';
import viewerLoader from './ViewerLoader';

// All your dataloaders
const allLoaders = {
  ...circleLoader,
  ...viewerLoader,
};

export default function loaders() {
  return allLoaders;
}
