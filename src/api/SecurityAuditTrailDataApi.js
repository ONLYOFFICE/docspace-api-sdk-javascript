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
import ActionType from '../models/ActionType';
import ApiDateTime from '../models/ApiDateTime';
import AuditEventArrayWrapper from '../models/AuditEventArrayWrapper';
import EntryType from '../models/EntryType';
import MessageAction from '../models/MessageAction';
import ModuleType from '../models/ModuleType';
import ObjectWrapper from '../models/ObjectWrapper';
import ProductType from '../models/ProductType';
import StringWrapper from '../models/StringWrapper';
import TenantAuditSettingsWrapper from '../models/TenantAuditSettingsWrapper';

/**
* SecurityAuditTrailData service.
* @module api/SecurityAuditTrailDataApi
* @version 3.2.0
*/
export default class SecurityAuditTrailDataApi {

    /**
    * Constructs a new SecurityAuditTrailDataApi. 
    * @alias module:api/SecurityAuditTrailDataApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAuditTrailReport operation.
     * @callback module:api/SecurityAuditTrailDataApi~createAuditTrailReportCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate the audit trail report
     * Generates the audit trail report.
     * @param {module:api/SecurityAuditTrailDataApi~createAuditTrailReportCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    createAuditTrailReport(callback) {
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
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/security/audit/events/report', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAuditEventsByFilter operation.
     * @callback module:api/SecurityAuditTrailDataApi~getAuditEventsByFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AuditEventArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get filtered audit trail data
     * Returns a list of the audit events by the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {String} [userId] The ID of the user who triggered the audit event.
     * @param {module:models/ProductType} [productType] The type of product related to the audit event.
     * @param {module:models/ModuleType} [moduleType] The module within the product where the audit event occurred.
     * @param {module:models/ActionType} [actionType] The type of action performed in the audit event (e.g., Create, Update, Delete).
     * @param {module:models/MessageAction} [action] The specific action that occurred within the audit event.
     * @param {module:models/EntryType} [entryType] The type of audit entry (e.g., Folder, User, File).
     * @param {String} [target] The target object affected by the audit event (e.g., document ID, user account).
     * @param {module:models/ApiDateTime} [from] The starting date and time for filtering audit events.
     * @param {module:models/ApiDateTime} [to] The ending date and time for filtering audit events.
     * @param {Number} [count] The maximum number of audit event records to retrieve.
     * @param {Number} [startIndex] The index of the first audit event record to retrieve in a paged query.
     * @param {module:api/SecurityAuditTrailDataApi~getAuditEventsByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AuditEventArrayWrapper}
     */
    getAuditEventsByFilter(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'userId': opts['userId'],
        'productType': opts['productType'],
        'moduleType': opts['moduleType'],
        'actionType': opts['actionType'],
        'action': opts['action'],
        'entryType': opts['entryType'],
        'target': opts['target'],
        'from': opts['from'],
        'to': opts['to'],
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
      let returnType = AuditEventArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/security/audit/events/filter', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAuditSettings operation.
     * @callback module:api/SecurityAuditTrailDataApi~getAuditSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantAuditSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the audit trail settings
     * Returns the audit trail settings.
     * @param {module:api/SecurityAuditTrailDataApi~getAuditSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantAuditSettingsWrapper}
     */
    getAuditSettings(callback) {
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
      let returnType = TenantAuditSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/security/audit/settings/lifetime', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAuditTrailMappers operation.
     * @callback module:api/SecurityAuditTrailDataApi~getAuditTrailMappersCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get audit trail mappers
     * Returns the mappers for the audit trail types.
     * @param {Object} opts Optional parameters
     * @param {module:models/ProductType} [productType] The type of product related to the audit trail.
     * @param {module:models/ModuleType} [moduleType] The module within the product associated with the audit trail.
     * @param {module:api/SecurityAuditTrailDataApi~getAuditTrailMappersCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectWrapper}
     */
    getAuditTrailMappers(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'productType': opts['productType'],
        'moduleType': opts['moduleType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ObjectWrapper;
      return this.apiClient.callApi(
        '/api/2.0/security/audit/mappers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAuditTrailTypes operation.
     * @callback module:api/SecurityAuditTrailDataApi~getAuditTrailTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get audit trail types
     * Returns all the available audit trail types.
     * @param {module:api/SecurityAuditTrailDataApi~getAuditTrailTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectWrapper}
     */
    getAuditTrailTypes(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ObjectWrapper;
      return this.apiClient.callApi(
        '/api/2.0/security/audit/types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLastAuditEvents operation.
     * @callback module:api/SecurityAuditTrailDataApi~getLastAuditEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AuditEventArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get audit trail data
     * Returns a list of the latest changes (creation, modification, deletion, etc.) made by users to the entities on the portal.
     * @param {module:api/SecurityAuditTrailDataApi~getLastAuditEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AuditEventArrayWrapper}
     */
    getLastAuditEvents(callback) {
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
      let returnType = AuditEventArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/security/audit/events/last', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setAuditSettings operation.
     * @callback module:api/SecurityAuditTrailDataApi~setAuditSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantAuditSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the audit trail settings
     * Sets the audit trail settings for the current portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/TenantAuditSettingsWrapper} [tenantAuditSettingsWrapper] 
     * @param {module:api/SecurityAuditTrailDataApi~setAuditSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantAuditSettingsWrapper}
     */
    setAuditSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['tenantAuditSettingsWrapper'];

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
      let returnType = TenantAuditSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/security/audit/settings/lifetime', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
