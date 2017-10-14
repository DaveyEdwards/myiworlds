import pageLoader from './PageLoader';
import viewerLoader from './ViewerLoader';

// All your dataloaders
const allLoaders = {
  ...pageLoader,
  ...viewerLoader,
};

export default function loaders() {
  return allLoaders;
}
