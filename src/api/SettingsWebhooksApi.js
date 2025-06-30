// (c) Copyright Ascensio System SIA 2009-2025
// 
// This program is a free software product.
// You can redistribute it and/or modify it under the terms
// of the GNU Affero General Public License (AGPL) version 3 as published by the Free Software
// Foundation. In accordance with Section 7(a) of the GNU AGPL its Section 15 shall be amended
// to the effect that Ascensio System SIA expressly excludes the warranty of non-infringement of
// any third-party rights.
// 
// This program is distributed WITHOUT ANY WARRANTY, without even the implied warranty
// of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For details, see
// the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
// 
// You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia, EU, LV-1021.
// 
// The  interactive user interfaces in modified source and object code versions of the Program must
// display Appropriate Legal Notices, as required under Section 5 of the GNU AGPL version 3.
// 
// Pursuant to Section 7(b) of the License you must retain the original Product logo when
// distributing the program. Pursuant to Section 7(e) we decline to grant you any rights under
// trademark law for use of our trademarks.
// 
// All the Product's GUI elements, including illustrations and icon sets, as well as technical writing
// content are licensed under the terms of the Creative Commons Attribution-ShareAlike 4.0
// International. See the License terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode

import ApiClient from "../ApiClient";
import CreateWebhooksConfigRequestsDto from '../models/CreateWebhooksConfigRequestsDto';
import UnknownWrapper from '../models/UnknownWrapper';
import UpdateWebhooksConfigRequestsDto from '../models/UpdateWebhooksConfigRequestsDto';
import WebhookGroupStatus from '../models/WebhookGroupStatus';
import WebhookRetryRequestsDto from '../models/WebhookRetryRequestsDto';
import WebhookTrigger from '../models/WebhookTrigger';
import WebhooksConfigWithStatusArrayWrapper from '../models/WebhooksConfigWithStatusArrayWrapper';
import WebhooksConfigWrapper from '../models/WebhooksConfigWrapper';
import WebhooksLogArrayWrapper from '../models/WebhooksLogArrayWrapper';
import WebhooksLogWrapper from '../models/WebhooksLogWrapper';

/**
* SettingsWebhooks service.
* @module api/SettingsWebhooksApi
* @version 3.2.0
*/
export default class SettingsWebhooksApi {

    /**
    * Constructs a new SettingsWebhooksApi. 
    * @alias module:api/SettingsWebhooksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createWebhook operation.
     * @callback module:api/SettingsWebhooksApi~createWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:models/WebhooksConfigWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a webhook
     * Creates a new tenant webhook with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateWebhooksConfigRequestsDto} [createWebhooksConfigRequestsDto] 
     * @param {module:api/SettingsWebhooksApi~createWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/WebhooksConfigWrapper}
     */
    createWebhook(opts, callback) {
      opts = opts || {};
      let postBody = opts['createWebhooksConfigRequestsDto'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WebhooksConfigWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/webhook', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the enableWebhook operation.
     * @callback module:api/SettingsWebhooksApi~enableWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:models/WebhooksConfigWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable a webhook
     * Enables or disables a tenant webhook with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateWebhooksConfigRequestsDto} [updateWebhooksConfigRequestsDto] 
     * @param {module:api/SettingsWebhooksApi~enableWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/WebhooksConfigWrapper}
     */
    enableWebhook(opts, callback) {
      opts = opts || {};
      let postBody = opts['updateWebhooksConfigRequestsDto'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WebhooksConfigWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/webhook/enable', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTenantWebhooks operation.
     * @callback module:api/SettingsWebhooksApi~getTenantWebhooksCallback
     * @param {String} error Error message, if any.
     * @param {module:models/WebhooksConfigWithStatusArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get webhooks
     * Returns a list of the tenant webhooks.
     * @param {module:api/SettingsWebhooksApi~getTenantWebhooksCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/WebhooksConfigWithStatusArrayWrapper}
     */
    getTenantWebhooks(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WebhooksConfigWithStatusArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/webhook', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhookTriggers operation.
     * @callback module:api/SettingsWebhooksApi~getWebhookTriggersCallback
     * @param {String} error Error message, if any.
     * @param {module:models/UnknownWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get webhook triggers
     * Returns a list of triggers for a webhook.
     * @param {module:api/SettingsWebhooksApi~getWebhookTriggersCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/UnknownWrapper}
     */
    getWebhookTriggers(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UnknownWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/webhook/triggers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhooksLogs operation.
     * @callback module:api/SettingsWebhooksApi~getWebhooksLogsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/WebhooksLogArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get webhook logs
     * Returns the logs of the webhook activities.
     * @param {Object} opts Optional parameters
     * @param {Date} [deliveryFrom] The delivery start time for filtering webhook logs.
     * @param {Date} [deliveryTo] The delivery end time for filtering webhook logs.
     * @param {String} [hookUri] The destination URL where webhooks are delivered.
     * @param {Number} [configId] The webhook configuration identifier.
     * @param {Number} [eventId] The unique identifier of the event that triggered the webhook.
     * @param {module:models/WebhookGroupStatus} [groupStatus] The status of the webhook delivery group.
     * @param {String} [userId] The identifier of the user associated with the webhook event.
     * @param {module:models/WebhookTrigger} [trigger] The type of event that triggered the webhook.
     * @param {Number} [count] The maximum number of webhook log records to return in the query response.
     * @param {Number} [startIndex] Specifies the starting index for retrieving webhook logs.  Used for pagination in the webhook delivery log queries.
     * @param {module:api/SettingsWebhooksApi~getWebhooksLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/WebhooksLogArrayWrapper}
     */
    getWebhooksLogs(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'deliveryFrom': opts['deliveryFrom'],
        'deliveryTo': opts['deliveryTo'],
        'hookUri': opts['hookUri'],
        'configId': opts['configId'],
        'eventId': opts['eventId'],
        'groupStatus': opts['groupStatus'],
        'userId': opts['userId'],
        'trigger': opts['trigger'],
        'count': opts['count'],
        'startIndex': opts['startIndex']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WebhooksLogArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/webhooks/log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the removeWebhook operation.
     * @callback module:api/SettingsWebhooksApi~removeWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:models/WebhooksConfigWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a webhook
     * Removes a tenant webhook with the ID specified in the request.
     * @param {Number} id The ID extracted from the route parameters.
     * @param {module:api/SettingsWebhooksApi~removeWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/WebhooksConfigWrapper}
     */
    removeWebhook(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling removeWebhook");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WebhooksConfigWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/webhook/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retryWebhook operation.
     * @callback module:api/SettingsWebhooksApi~retryWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:models/WebhooksLogWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retry a webhook
     * Retries a webhook with the ID specified in the request.
     * @param {Number} id The ID extracted from the route parameters.
     * @param {module:api/SettingsWebhooksApi~retryWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/WebhooksLogWrapper}
     */
    retryWebhook(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling retryWebhook");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WebhooksLogWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/webhook/{id}/retry', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retryWebhooks operation.
     * @callback module:api/SettingsWebhooksApi~retryWebhooksCallback
     * @param {String} error Error message, if any.
     * @param {module:models/WebhooksLogArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retry webhooks
     * Retries all the webhooks with the IDs specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/WebhookRetryRequestsDto} [webhookRetryRequestsDto] 
     * @param {module:api/SettingsWebhooksApi~retryWebhooksCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/WebhooksLogArrayWrapper}
     */
    retryWebhooks(opts, callback) {
      opts = opts || {};
      let postBody = opts['webhookRetryRequestsDto'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WebhooksLogArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/webhook/retry', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWebhook operation.
     * @callback module:api/SettingsWebhooksApi~updateWebhookCallback
     * @param {String} error Error message, if any.
     * @param {module:models/WebhooksConfigWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a webhook
     * Updates a tenant webhook with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateWebhooksConfigRequestsDto} [updateWebhooksConfigRequestsDto] 
     * @param {module:api/SettingsWebhooksApi~updateWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/WebhooksConfigWrapper}
     */
    updateWebhook(opts, callback) {
      opts = opts || {};
      let postBody = opts['updateWebhooksConfigRequestsDto'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WebhooksConfigWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/webhook', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
