import N0de from '../n0deModel';

// Make it so if it can't find the n0de requested that it finds the default 'not-found' page
export async function getN0deByPath(path) {
  let response = null;

  try {
    response = await N0de.findOne({ path }).then(entity => entity.plain());
  } catch (err) {
    const notFoundPath = 'not-found';

    response = await N0de.findOne({ notFoundPath }).then(entity => entity.plain());
  } finally {
    return response;
  }
}
