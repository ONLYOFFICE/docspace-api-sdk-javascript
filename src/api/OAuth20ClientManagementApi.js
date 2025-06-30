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
import ChangeClientActivationRequest from '../models/ChangeClientActivationRequest';
import ClientResponse from '../models/ClientResponse';
import ClientSecretResponse from '../models/ClientSecretResponse';
import CreateClientRequest from '../models/CreateClientRequest';
import ErrorResponse from '../models/ErrorResponse';
import UpdateClientRequest from '../models/UpdateClientRequest';

/**
* OAuth20ClientManagement service.
* @module api/OAuth20ClientManagementApi
* @version 3.2.0
*/
export default class OAuth20ClientManagementApi {

    /**
    * Constructs a new OAuth20ClientManagementApi. 
    * @alias module:api/OAuth20ClientManagementApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the changeActivation operation.
     * @callback module:api/OAuth20ClientManagementApi~changeActivationCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the client activation status
     * Activates or deactivates an OAuth2 client. When deactivated, the client cannot request new access tokens, but existing tokens will remain valid until they expire.
     * @param {String} clientId The client identifier.
     * @param {module:models/ChangeClientActivationRequest} changeClientActivationRequest 
     * @param {module:api/OAuth20ClientManagementApi~changeActivationCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link Object}
     */
    changeActivation(clientId, changeClientActivationRequest, callback) {
      let postBody = changeClientActivationRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling changeActivation");
      }
      // verify the required parameter 'changeClientActivationRequest' is set
      if (changeClientActivationRequest === undefined || changeClientActivationRequest === null) {
        throw new Error("Missing the required parameter 'changeClientActivationRequest' when calling changeActivation");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/2.0/clients/{clientId}/activation', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createClient operation.
     * @callback module:api/OAuth20ClientManagementApi~createClientCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ClientResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new OAuth2 client
     * Creates a new OAuth2 client with the specified configuration. The client will be created with the provided scopes, redirect URIs, and other settings. Returns the created client details including the generated client ID.
     * @param {module:models/CreateClientRequest} createClientRequest 
     * @param {module:api/OAuth20ClientManagementApi~createClientCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ClientResponse}
     */
    createClient(createClientRequest, callback) {
      let postBody = createClientRequest;
      // verify the required parameter 'createClientRequest' is set
      if (createClientRequest === undefined || createClientRequest === null) {
        throw new Error("Missing the required parameter 'createClientRequest' when calling createClient");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ClientResponse;
      return this.apiClient.callApi(
        '/api/2.0/clients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteClient operation.
     * @callback module:api/OAuth20ClientManagementApi~deleteClientCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an OAuth2 client
     * Permanently deletes an OAuth2 client and all associated data. All access and refresh tokens issued to this client will be invalidated. This operation cannot be undone.
     * @param {String} clientId The client identifier.
     * @param {module:api/OAuth20ClientManagementApi~deleteClientCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link Object}
     */
    deleteClient(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling deleteClient");
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/2.0/clients/{clientId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the regenerateSecret operation.
     * @callback module:api/OAuth20ClientManagementApi~regenerateSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ClientSecretResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Regenerate the client secret
     * Generates a new client secret for the specified OAuth2 client. The old secret will be immediately invalidated. This operation should be used with caution as it requires updating the secret in all client applications.
     * @param {String} clientId The client identifier.
     * @param {module:api/OAuth20ClientManagementApi~regenerateSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ClientSecretResponse}
     */
    regenerateSecret(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling regenerateSecret");
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
      let returnType = ClientSecretResponse;
      return this.apiClient.callApi(
        '/api/2.0/clients/{clientId}/regenerate', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the revokeUserClient operation.
     * @callback module:api/OAuth20ClientManagementApi~revokeUserClientCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke client consent
     * Revokes all user consents for the specified OAuth2 client. This will invalidate all access tokens and refresh tokens issued to this client for the current user. The user will need to re-authorize the client to access their resources.
     * @param {String} clientId The client identifier.
     * @param {module:api/OAuth20ClientManagementApi~revokeUserClientCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link Object}
     */
    revokeUserClient(clientId, callback) {
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling revokeUserClient");
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/2.0/clients/{clientId}/revoke', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateClient operation.
     * @callback module:api/OAuth20ClientManagementApi~updateClientCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing OAuth2 client
     * Updates the configuration of an existing OAuth2 client, allowing modifications to the client name, description, redirect URIs, and other settings. The client ID cannot be modified.
     * @param {String} clientId The client identifier.
     * @param {module:models/UpdateClientRequest} updateClientRequest 
     * @param {module:api/OAuth20ClientManagementApi~updateClientCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link Object}
     */
    updateClient(clientId, updateClientRequest, callback) {
      let postBody = updateClientRequest;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling updateClient");
      }
      // verify the required parameter 'updateClientRequest' is set
      if (updateClientRequest === undefined || updateClientRequest === null) {
        throw new Error("Missing the required parameter 'updateClientRequest' when calling updateClient");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/2.0/clients/{clientId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
