const gstore = require('gstore-node');

const Schema = gstore.Schema;

const viewerSchema = new Schema({
  _id: {
    type: 'string',
    required: true,
  },
  username: {
    type: 'string',
    required: true,
  },
  email: {
    type: 'string',
    required: true,
  },
  emailConfirmed: {
    type: 'boolean',
    required: true,
    default: false,
  },
  styles: {
    type: 'array',
    optional: true,
    excludeFromIndexes: true,
  },
  home: {
    type: 'string',
    optional: true,
    excludeFromIndexes: true,
  },
  circlesCreated: {
    type: 'string',
    optional: true,
    excludeFromIndexes: true,
  },
});

const listSettings = {
  limit: 50,
  order: { property: '_id' },
};

viewerSchema.queries('list', listSettings);

module.exports = gstore.model('Viewers', viewerSchema);
