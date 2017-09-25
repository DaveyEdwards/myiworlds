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

export default async function getEntities(kind, filters, pageSize, pageCursor) {
  let query = datastoreClient.createQuery(kind).limit(pageSize);

  if (filters) {
    filters.forEach((item) => {
      query = query.filter(item.property, item.condition, item.value);
    });
  }

  if (pageCursor) {
    query = query.start(pageCursor);
  }

  return datastoreClient.runQuery(query).then((results) => {
    const entities = results;
    const info = results[1];

    return [entities, info];
  });
}
