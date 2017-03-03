/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the LiveUpdateReleaseMetric class.
 * @constructor
 * @member {string} label
 * 
 * @member {number} active
 * 
 * @member {number} [downloaded]
 * 
 * @member {number} [failed]
 * 
 * @member {number} [installed]
 * 
 */
function LiveUpdateReleaseMetric() {
}

/**
 * Defines the metadata of LiveUpdateReleaseMetric
 *
 * @returns {object} metadata of LiveUpdateReleaseMetric
 *
 */
LiveUpdateReleaseMetric.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'LiveUpdateReleaseMetric',
    type: {
      name: 'Composite',
      className: 'LiveUpdateReleaseMetric',
      modelProperties: {
        label: {
          required: true,
          serializedName: 'label',
          type: {
            name: 'String'
          }
        },
        active: {
          required: true,
          serializedName: 'active',
          type: {
            name: 'Number'
          }
        },
        downloaded: {
          required: false,
          serializedName: 'downloaded',
          type: {
            name: 'Number'
          }
        },
        failed: {
          required: false,
          serializedName: 'failed',
          type: {
            name: 'Number'
          }
        },
        installed: {
          required: false,
          serializedName: 'installed',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = LiveUpdateReleaseMetric;
