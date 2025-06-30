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
import ActiveConnectionsWrapper from '../models/ActiveConnectionsWrapper';
import BooleanWrapper from '../models/BooleanWrapper';
import StringWrapper from '../models/StringWrapper';

/**
* SecurityActiveConnections service.
* @module api/SecurityActiveConnectionsApi
* @version 3.2.0
*/
export default class SecurityActiveConnectionsApi {

    /**
    * Constructs a new SecurityActiveConnectionsApi. 
    * @alias module:api/SecurityActiveConnectionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAllActiveConnections operation.
     * @callback module:api/SecurityActiveConnectionsApi~getAllActiveConnectionsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ActiveConnectionsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get active connections
     * Returns all the active connections to the portal.
     * @param {module:api/SecurityActiveConnectionsApi~getAllActiveConnectionsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ActiveConnectionsWrapper}
     */
    getAllActiveConnections(callback) {
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
      let returnType = ActiveConnectionsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/security/activeconnections', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the logOutActiveConnection operation.
     * @callback module:api/SecurityActiveConnectionsApi~logOutActiveConnectionCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log out from the connection
     * Logs out from the connection with the ID specified in the request.
     * @param {Number} loginEventId The ID of the specific login event.
     * @param {module:api/SecurityActiveConnectionsApi~logOutActiveConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    logOutActiveConnection(loginEventId, callback) {
      let postBody = null;
      // verify the required parameter 'loginEventId' is set
      if (loginEventId === undefined || loginEventId === null) {
        throw new Error("Missing the required parameter 'loginEventId' when calling logOutActiveConnection");
      }

      let pathParams = {
        'loginEventId': loginEventId
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
      let returnType = BooleanWrapper;
      return this.apiClient.callApi(
        '/api/2.0/security/activeconnections/logout/{loginEventId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the logOutAllActiveConnectionsChangePassword operation.
     * @callback module:api/SecurityActiveConnectionsApi~logOutAllActiveConnectionsChangePasswordCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log out and change password
     * Logs out from all the active connections for the current user and changes their password.
     * @param {module:api/SecurityActiveConnectionsApi~logOutAllActiveConnectionsChangePasswordCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    logOutAllActiveConnectionsChangePassword(callback) {
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
        '/api/2.0/security/activeconnections/logoutallchangepassword', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the logOutAllActiveConnectionsForUser operation.
     * @callback module:api/SecurityActiveConnectionsApi~logOutAllActiveConnectionsForUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log out for the user by ID
     * Logs out from all the active connections for the user with the ID specified in the request.
     * @param {String} userId The user ID extracted from the route parameters.
     * @param {module:api/SecurityActiveConnectionsApi~logOutAllActiveConnectionsForUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    logOutAllActiveConnectionsForUser(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling logOutAllActiveConnectionsForUser");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/security/activeconnections/logoutall/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the logOutAllExceptThisConnection operation.
     * @callback module:api/SecurityActiveConnectionsApi~logOutAllExceptThisConnectionCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log out from all connections except the current one
     * Logs out from all the active connections except the current connection.
     * @param {module:api/SecurityActiveConnectionsApi~logOutAllExceptThisConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    logOutAllExceptThisConnection(callback) {
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
        '/api/2.0/security/activeconnections/logoutallexceptthis', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
