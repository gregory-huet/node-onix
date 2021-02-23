var _ = require('lodash');
var utils = require('../../utils');

module.exports = {
    tag: 'Publisher',
    fields: {
        role: {
            tag: 'PublishingRole',
            transform: _.partialRight(utils.pad, 2),
            untransform: Number,
            default: 1
        },
        name: {
            tag: 'PublisherName',
            transform: String
        },
        identifiers: {
            tag: 'PublisherIdentifier',
            fields: {
              type: {
                tag: 'PublisherIDType',
                transform: _.partialRight(utils.pad, 2),
                untransform: Number,
                default: 1
              },
              typeName: {
                tag: 'IDTypeName'
              },
              value: {
                tag: 'IDValue'
              }
            },
            array: true
        }
    },
    map: {
        to: 'name'
    }
};
