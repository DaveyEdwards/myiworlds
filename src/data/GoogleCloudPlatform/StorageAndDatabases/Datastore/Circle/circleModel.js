const gstore = require('gstore-node');

const Schema = gstore.Schema;

const circleSchema = new Schema({
  _id: {
    type: 'string',
    required: true,
  },
  pathFull: {
    type: 'string',
    optional: true,
  },
  pathName: {
    type: 'string',
    optional: true,
  },
  public: {
    type: 'boolean',
    required: true,
    default: false,
    excludeFromIndexes: true,
  },
  viewers: {
    type: 'array',
    optional: true,
    excludeFromIndexes: true,
  },
  type: {
    type: 'string',
    required: true,
  },
  tags: {
    type: 'array',
    optional: true,
  },
  order: {
    type: 'int',
    default: 9999,
  },
  title: {
    type: 'string',
    optional: true,
    excludeFromIndexes: true,
  },
  subtitle: {
    type: 'string',
    optional: true,
    excludeFromIndexes: true,
  },
  description: {
    type: 'string',
    optional: true,
    excludeFromIndexes: true,
  },
  media: {
    type: 'string',
    optional: true,
    excludeFromIndexes: true,
  },
  styles: {
    type: 'string',
    optional: true,
    excludeFromIndexes: true,
  },
  creator: {
    type: 'string',
    optional: true,
    excludeFromIndexes: true,
  },
  editors: {
    type: 'array',
    optional: true,
    excludeFromIndexes: true,
  },
  created: {
    type: 'datetime',
    default: gstore.defaultValues.NOW,
    excludeFromIndexes: true,
  },
  lastUpdated: {
    type: 'datetime',
    default: gstore.defaultValues.NOW,
    excludeFromIndexes: true,
  },
  value: {
    type: 'string',
    optional: true,
    excludeFromIndexes: true,
  },
  blob: {
    type: 'object',
    optional: true,
    excludeFromIndexes: true,
  },
  number: {
    type: 'int',
    optional: true,
    excludeFromIndexes: true,
  },
  boolean: {
    type: 'boolean',
    optional: true,
    excludeFromIndexes: true,
  },
  line: {
    type: 'string',
    optional: true,
    excludeFromIndexes: true,
  },
  lines: {
    type: 'array',
    optional: true,
    excludeFromIndexes: true,
  },
  linesMany: {
    type: 'array',
    optional: true,
    excludeFromIndexes: true,
  },
});

const listSettings = {
  limit: 50,
  order: { property: 'order', descending: false },
};

circleSchema.queries('list', listSettings);

module.exports = gstore.model('Circles', circleSchema);
