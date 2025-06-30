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
import ClientInfoResponse from '../models/ClientInfoResponse';
import ClientResponse from '../models/ClientResponse';
import ErrorResponse from '../models/ErrorResponse';
import PageableModificationResponse from '../models/PageableModificationResponse';
import PageableResponse from '../models/PageableResponse';
import PageableResponseClientInfoResponse from '../models/PageableResponseClientInfoResponse';

/**
* OAuth20ClientQuerying service.
* @module api/OAuth20ClientQueryingApi
* @version 3.2.0
*/
export default class OAuth20ClientQueryingApi {

    /**
    * Constructs a new OAuth20ClientQueryingApi. 
    * @alias module:api/OAuth20ClientQueryingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getClient operation.
     * @callback module:api/OAuth20ClientQueryingApi~getClientCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ClientResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get client details
     * Retrieves detailed information about a specific OAuth2 client including its name, description, redirect URIs, and scopes.
     * @param {String} clientId The client identifier.
     * @param {module:api/OAuth20ClientQueryingApi~getClientCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ClientResponse}
     */
    getClient(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getClient");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ClientResponse;
      return this.apiClient.callApi(
        '/api/2.0/clients/{clientId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getClientInfo operation.
     * @callback module:api/OAuth20ClientQueryingApi~getClientInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ClientInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get detailed client information
     * Retrieves the detailed information for a client with the ID specified in the request.
     * @param {String} clientId The client identifier.
     * @param {module:api/OAuth20ClientQueryingApi~getClientInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ClientInfoResponse}
     */
    getClientInfo(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getClientInfo");
      }

      let pathParams = {
        'clientId': clientId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ClientInfoResponse;
      return this.apiClient.callApi(
        '/api/2.0/clients/{clientId}/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getClients operation.
     * @callback module:api/OAuth20ClientQueryingApi~getClientsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/PageableResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get clients
     * Retrieves a paginated list of OAuth2 clients. The results can be paginated using the 'limit' parameter and the last seen client ID or creation date.
     * @param {Number} limit The maximum number of results returned per page.
     * @param {Object} opts Optional parameters
     * @param {String} [lastClientId] The ID of the last retrieved client.
     * @param {Date} [lastCreatedOn] The creation date of the last retrieved client.
     * @param {module:api/OAuth20ClientQueryingApi~getClientsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/PageableResponse}
     */
    getClients(limit, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getClients");
      }

      let pathParams = {
      };
      let queryParams = {
        'limit': limit,
        'last_client_id': opts['lastClientId'],
        'last_created_on': opts['lastCreatedOn']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageableResponse;
      return this.apiClient.callApi(
        '/api/2.0/clients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getClientsInfo operation.
     * @callback module:api/OAuth20ClientQueryingApi~getClientsInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/PageableResponseClientInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get detailed information of clients
     * Retrieves a paginated list of information for all clients.
     * @param {Number} limit The maximum number of results returned per page.
     * @param {Object} opts Optional parameters
     * @param {String} [lastClientId] The identifier of the last retrieved client.
     * @param {Date} [lastCreatedOn] The creation date of the last retrieved client.
     * @param {module:api/OAuth20ClientQueryingApi~getClientsInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/PageableResponseClientInfoResponse}
     */
    getClientsInfo(limit, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getClientsInfo");
      }

      let pathParams = {
      };
      let queryParams = {
        'limit': limit,
        'last_client_id': opts['lastClientId'],
        'last_created_on': opts['lastCreatedOn']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageableResponseClientInfoResponse;
      return this.apiClient.callApi(
        '/api/2.0/clients/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConsents operation.
     * @callback module:api/OAuth20ClientQueryingApi~getConsentsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/PageableModificationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user consents
     * Retrieves a paginated list of user consents.
     * @param {Number} limit The maximum number of results returned per page.
     * @param {Object} opts Optional parameters
     * @param {Date} [lastModifiedOn] The date when the user consent was last modified.
     * @param {module:api/OAuth20ClientQueryingApi~getConsentsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/PageableModificationResponse}
     */
    getConsents(limit, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getConsents");
      }

      let pathParams = {
      };
      let queryParams = {
        'limit': limit,
        'last_modified_on': opts['lastModifiedOn']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageableModificationResponse;
      return this.apiClient.callApi(
        '/api/2.0/clients/consents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPublicClientInfo operation.
     * @callback module:api/OAuth20ClientQueryingApi~getPublicClientInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ClientInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get public client information
     * Returns the public information for a client with the ID secified din the request.
     * @param {String} clientId The client identifier.
     * @param {module:api/OAuth20ClientQueryingApi~getPublicClientInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ClientInfoResponse}
     */
    getPublicClientInfo(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getPublicClientInfo");
      }

      let pathParams = {
        'clientId': clientId
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
      let returnType = ClientInfoResponse;
      return this.apiClient.callApi(
        '/api/2.0/clients/{clientId}/public/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
