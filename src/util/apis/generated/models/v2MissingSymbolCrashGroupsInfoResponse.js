/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * missing symbol groups
 *
 */
class V2MissingSymbolCrashGroupsInfoResponse {
  /**
   * Create a V2MissingSymbolCrashGroupsInfoResponse.
   * @property {number} totalCrashCount total number of crashes for all missing
   * symbol groups
   */
  constructor() {
  }

  /**
   * Defines the metadata of V2MissingSymbolCrashGroupsInfoResponse
   *
   * @returns {object} metadata of V2MissingSymbolCrashGroupsInfoResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'v2MissingSymbolCrashGroupsInfoResponse',
      type: {
        name: 'Composite',
        className: 'V2MissingSymbolCrashGroupsInfoResponse',
        modelProperties: {
          totalCrashCount: {
            required: true,
            serializedName: 'total_crash_count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = V2MissingSymbolCrashGroupsInfoResponse;
