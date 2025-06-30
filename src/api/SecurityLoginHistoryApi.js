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
import ApiDateTime from '../models/ApiDateTime';
import LoginEventArrayWrapper from '../models/LoginEventArrayWrapper';
import MessageAction from '../models/MessageAction';
import StringWrapper from '../models/StringWrapper';

/**
* SecurityLoginHistory service.
* @module api/SecurityLoginHistoryApi
* @version 3.2.0
*/
export default class SecurityLoginHistoryApi {

    /**
    * Constructs a new SecurityLoginHistoryApi. 
    * @alias module:api/SecurityLoginHistoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createLoginHistoryReport operation.
     * @callback module:api/SecurityLoginHistoryApi~createLoginHistoryReportCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate the login history report
     * Generates the login history report.
     * @param {module:api/SecurityLoginHistoryApi~createLoginHistoryReportCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    createLoginHistoryReport(callback) {
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
        '/api/2.0/security/audit/login/report', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLastLoginEvents operation.
     * @callback module:api/SecurityLoginHistoryApi~getLastLoginEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/LoginEventArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get login history
     * Returns all the latest user login activity, including successful logins and error logs.
     * @param {module:api/SecurityLoginHistoryApi~getLastLoginEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/LoginEventArrayWrapper}
     */
    getLastLoginEvents(callback) {
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
      let returnType = LoginEventArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/security/audit/login/last', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoginEventsByFilter operation.
     * @callback module:api/SecurityLoginHistoryApi~getLoginEventsByFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:models/LoginEventArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get filtered login events
     * Returns a list of the login events by the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {String} [userId] The ID of the user whose login events are being queried.
     * @param {module:models/MessageAction} [action] The login-related action to filter events by.
     * @param {module:models/ApiDateTime} [from] The starting date and time for filtering login events.
     * @param {module:models/ApiDateTime} [to] The ending date and time for filtering login events.
     * @param {Number} [count] The number of login events to retrieve in the query.
     * @param {Number} [startIndex] The starting index for fetching a subset of login events from the query results.
     * @param {module:api/SecurityLoginHistoryApi~getLoginEventsByFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/LoginEventArrayWrapper}
     */
    getLoginEventsByFilter(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'userId': opts['userId'],
        'action': opts['action'],
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
      let returnType = LoginEventArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/security/audit/login/filter', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
