# Google Cloud Platform Queries Resources
In the following examples I will be using the model 'Circle', you can think of it as being any model type (ex. User, Article, News, Profile, etc...)


## createCircle
Create's a circle in Datastore.  You can store anything in here.  Besides the required types any field that is not added to the database is not forced on so you don't have to worry filling your database's up with nulls.

### Example use
```js
createCircle({
  _id: 'TVSTvnflist0000100000000000000000001',
  type: 'a_content_type',
  title: 'A  Great Title',
});
```


### Example response
```js
{
  id: 'TVSTvnflist0000100000000000000000001', // Note this id is just a copy of _id and will not effect GraphQL/Relay
  _id: 'TVSTvnflist0000100000000000000000001',
  type: 'a_content_type',
  title: 'A  Great Title',
  public: false, // Default value
  created: 2017-06-05T23:41:31.149Z, // Automatically generated when added
  lastUpdated: 2017-06-05T23:41:31.149Z // Automatically generated when added
}
```


## deleteCircleBy
You can pass in either a single "_id" of the circle you want to delete or and array of "_ids".

### Example use
```js
deleteCircleBy_id('TVSTvnflist0000100000000000000000001');

// Can also pass array of _ids
deleteCircleBy_id(['button_path0000100000000000000000001', 'button_path0000100000000000000000002']);
```

### Example response
Take note of how Datastore returns an object

```js
{
  mutationResults: [
    {
      key: null,
      version: '1496707478784000',
      conflictDetected: false
    }
  ],
  indexUpdates: 5,
  key:
  Key {
    namespace: undefined,
    name: 'TVSTvnflist0000100000000000000000001',
    kind: 'Circle',
    pathFull: [Getter]
  },
  success: true
}
```


## getCircleBy_id
The _id was made to be the key on the Datastore Entity node which is the fastest way to access it.

### Example use
```js
getCircleBy_id('form_text_email000010000000000000001' );
```

### Example response
```js
{
  _id: 'form_text_email000010000000000000001',
  title: 'Mollitia rem aut ex ut.',
  created: 2017-06-04T21:00:33.833Z
  ... rest of fields
}
```


## getCircleByPath
This Query is will find a specific Entity inside a Google Datastore Kind's list by a indexed field.  This means a property on your model you want Datastore to memorize to find in the stack of billions.  Only works on indexed property.  Example for using "pathFull" is think of the URL path to a specific website page if you wanted it to be readable text myiworlds.com/DaveysWorlds/Tutorials/Queries (note that this path has to be unique as well)

### Example use
```js
getCircleByPath('examples/project/default' );
```

### Example response
```js
{ id: 'project00001000000000000000000000001',
  type: 'project',
  pathFull: 'examples/project/default',
  created: 2017-06-11T15:26:40.267Z,
  _id: 'project00001000000000000000000000001',
  lastUpdated: 2017-06-11T15:26:40.267Z,
  title: 'MyiWorlds',
}
```


## getLines
This is a list of a certain type, and should be used for smaller lists where you will be displaying all of the data you are fetching.  There is no pagination with this.
__Currently cursors are not working on this inside Google Datastore (the circle that does the Database queries has this built in)__
__The cursor is currently left in the code and commented out__

### Example use
```js
getLines();
```

### Example response
__Note the "nextCircleCursor" at the end of the response (currently not being used, but could use help)__
```js
{
  entities: [
    {
      _id 'Jzfm15DAwMRJEahJzfm15DAwtJzfm15DAwMRJEahJzfm15DAwz',
      title: 'A BRAND NEW TITLE',
      created: 2017-06-05T15:50:06.450Z
      // ... rest of fields
    },
    {
      _id: 'Jzfm15DAwMRJEahJzfm15DAwstJzfm15DAwvRJEahJzfm15DAw',
      title: 'A TITLE',
      created: 2017-06-05T15:51:14.473Z,
      // ... rest of fields
    {
      _id: 'Jzfm15DAwMRJEahJzfm15DAwJzfm15DAwMRJEahJzfm5DAwfav',
      title: 'TITLE',
      created: 2017-06-05T16:29:39.871Z
      // ... rest of fields
    }
  ],
  nextCircleCursor: 'a_long_complex_string_DAwMRJEahJzfm15DAwMRJEahJzfm15DAwMRJEahJzfm15'
}
```


## getCirclesBy_id
You give this query a list of _ids to get for you and it will return the whole Entity (all of its properties).  Relay will take this response and put its own connections/cursors ontop of it.
__So in reality you are still asking the database for alot more data then you will actually used and can be improved by putting Datastore connections into the function call.__
__URL to example of where its used for a getUsers
### Example use
```js
getCirclesBy_id([
  'interface000010000000000000000000002',
  'text00001000000000000000000000000001',
  'image0000100000000000000000000000001'
]);
```

### Example response
```js
[
  {
    _id: 'text00001000000000000000000000000001',
    title: 'Title of this text box',
    created: 2017-06-04T21:00:33.821Z,
    // ... rest of fields
  },
  {
    _id: 'interface000010000000000000000000002'
    title: 'Top Navigation',
    created: 2017-06-04T21:00:33.820Z,
    // ... rest of fields
  },
  {
    _id: 'image0000100000000000000000000000001',
    title: 'ALT_TEXT_FOR_IMAGE',
    created: 2017-06-04T21:00:33.822Z,
    // ... rest of fields
  }
]
```



## updateCircle
You pass in a object (including its _id so Datastore can find it) and then it will return the whole newly updated Entity.

### Example use
```js
editCircle({
  _id: 'contentlist0000100000000000000000001',
  title: 'A new title',
});
```

### Example response
```js
{
  _id: 'contentlist0000100000000000000000001',
  title: 'A new title',
  created: 2017-06-04T21:00:33.825Z,
  ... All the entities fields
}
```
