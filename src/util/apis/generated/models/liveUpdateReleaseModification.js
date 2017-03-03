/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the LiveUpdateReleaseModification class.
 * @constructor
 * @member {string} [targetBinaryRange]
 * 
 * @member {string} [description]
 * 
 * @member {boolean} [isDisabled]
 * 
 * @member {boolean} [isMandatory]
 * 
 * @member {number} [rollout]
 * 
 */
function LiveUpdateReleaseModification() {
}

/**
 * Defines the metadata of LiveUpdateReleaseModification
 *
 * @returns {object} metadata of LiveUpdateReleaseModification
 *
 */
LiveUpdateReleaseModification.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'LiveUpdateReleaseModification',
    type: {
      name: 'Composite',
      className: 'LiveUpdateReleaseModification',
      modelProperties: {
        targetBinaryRange: {
          required: false,
          serializedName: 'target_binary_range',
          type: {
            name: 'String'
          }
        },
        description: {
          required: false,
          serializedName: 'description',
          type: {
            name: 'String'
          }
        },
        isDisabled: {
          required: false,
          serializedName: 'is_disabled',
          type: {
            name: 'Boolean'
          }
        },
        isMandatory: {
          required: false,
          serializedName: 'is_mandatory',
          type: {
            name: 'Boolean'
          }
        },
        rollout: {
          required: false,
          serializedName: 'rollout',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = LiveUpdateReleaseModification;
