/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the DateTimeProperty class.
 * @constructor
 * Date and time property.
 *
 * @member {date} value Date time property value.
 * 
 */
function DateTimeProperty() {
  DateTimeProperty['super_'].call(this);
}

util.inherits(DateTimeProperty, models['CustomProperty']);

/**
 * Defines the metadata of DateTimeProperty
 *
 * @returns {object} metadata of DateTimeProperty
 *
 */
DateTimeProperty.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'date_time',
    type: {
      name: 'Composite',
      className: 'DateTimeProperty',
      modelProperties: {
        name: {
          required: true,
          serializedName: 'name',
          constraints: {
            MaxLength: 128,
            Pattern: '^[a-zA-Z][a-zA-Z0-9]*$'
          },
          type: {
            name: 'String'
          }
        },
        type: {
          required: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        value: {
          required: true,
          serializedName: 'value',
          type: {
            name: 'DateTime'
          }
        }
      }
    }
  };
};

module.exports = DateTimeProperty;