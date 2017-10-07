import datastoreClient from './dbconnection';

/* Caution: Be careful when passing a Cloud Datastore cursor
to a client, such as in a web form. Although the client cannot
change the cursor value to access results outside of the original
query, it is possible for it to decode the cursor to expose
information about result entities, such as the project ID, entity
kind, key name or numeric ID, ancestor keys, and properties used
in the query's filters and sort orders. If you don't want users to
have access to that information, you can encrypt the cursor, or store
it and provide the user with an opaque key. */

export default async function getEntities(kind, filters, numberOfResults, pageCursor, viewerId) {
  console.time('getEntities time to complete');
  let response = null;

  try {
    let query = datastoreClient.createQuery(kind).limit(numberOfResults);

    if (filters) {
      filters.forEach((item) => {
        query = query.filter(item.property, item.condition, item.value);
      });
    }

    if (pageCursor) {
      query = query.start(pageCursor);
    }

    await datastoreClient.runQuery(query).then((results) => {
      response = [];

      results.forEach((entity) => {
        if (!entity.moreResults) {
          if (
            entity[0].public === true ||
            viewerId === entity[0].creator ||
            (entity[0].viewers && entity[0].viewers.includes(viewerId))
          ) {
            response.push(entity);
          }
        }
      });
    });
  } catch (error) {
    response = {
      type: 'ERROR',
      title: 'getEntities error',
      page: 'slug-to-redirect-page',
      array: [error, kind, filters, numberOfResults, pageCursor],
    };
  }
  console.time('getEntities time to complete');
  return console.log('response ', response);
}
