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
import ExchangeToken200Response from '../models/ExchangeToken200Response';

/**
* OAuth20Authorization service.
* @module api/OAuth20AuthorizationApi
* @version 3.2.0
*/
export default class OAuth20AuthorizationApi {

    /**
    * Constructs a new OAuth20AuthorizationApi. 
    * @alias module:api/OAuth20AuthorizationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the authorizeOAuth operation.
     * @callback module:api/OAuth20AuthorizationApi~authorizeOAuthCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OAuth2 authorization endpoint
     * Initiates the OAuth2 authorization flow.
     * @param {String} responseType The OAuth 2.0 response type, must be 'code' for authorization code flow.
     * @param {String} clientId The client identifier issued to the client during registration.
     * @param {String} redirectUri The URL to redirect to after authorization is complete.
     * @param {String} scope The space-separated list of requested scope permissions.
     * @param {module:api/OAuth20AuthorizationApi~authorizeOAuthCallback} callback The callback function, accepting three arguments: error, data, response
     */
    authorizeOAuth(responseType, clientId, redirectUri, scope, callback) {
      let postBody = null;
      // verify the required parameter 'responseType' is set
      if (responseType === undefined || responseType === null) {
        throw new Error("Missing the required parameter 'responseType' when calling authorizeOAuth");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling authorizeOAuth");
      }
      // verify the required parameter 'redirectUri' is set
      if (redirectUri === undefined || redirectUri === null) {
        throw new Error("Missing the required parameter 'redirectUri' when calling authorizeOAuth");
      }
      // verify the required parameter 'scope' is set
      if (scope === undefined || scope === null) {
        throw new Error("Missing the required parameter 'scope' when calling authorizeOAuth");
      }

      let pathParams = {
      };
      let queryParams = {
        'response_type': responseType,
        'client_id': clientId,
        'redirect_uri': redirectUri,
        'scope': scope
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/oauth2/authorize', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the exchangeToken operation.
     * @callback module:api/OAuth20AuthorizationApi~exchangeTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ExchangeToken200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OAuth2 token endpoint
     * Exchanges an authorization code specified in the request for the access token.
     * @param {Object} opts Optional parameters
     * @param {String} [grantType] The OAuth2 grant type, must be 'authorization_code' for the authorization code flow.
     * @param {String} [code] A temporary authorization code that is sent to the client to be exchanged for a token.
     * @param {String} [redirectUri] The URL where the user will be redirected after successful or unsuccessful authentication.
     * @param {String} [clientId] The client identifier issued to the client during registration.
     * @param {String} [clientSecret] The client secret issued to the client during registration.
     * @param {module:api/OAuth20AuthorizationApi~exchangeTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ExchangeToken200Response}
     */
    exchangeToken(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'grant_type': opts['grantType'],
        'code': opts['code'],
        'redirect_uri': opts['redirectUri'],
        'client_id': opts['clientId'],
        'client_secret': opts['clientSecret']
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ExchangeToken200Response;
      return this.apiClient.callApi(
        '/oauth2/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the submitConsent operation.
     * @callback module:api/OAuth20AuthorizationApi~submitConsentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OAuth2 consent endpoint
     * Sends a consent request with the specified parameters.
     * @param {Object} opts Optional parameters
     * @param {String} [clientId] The client identifier issued to the client during registration.
     * @param {String} [state] The random string used to solve the CSRF vulnerability problem.
     * @param {String} [scope] The space-separated list of requested scope permissions.
     * @param {module:api/OAuth20AuthorizationApi~submitConsentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    submitConsent(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'client_id': opts['clientId'],
        'state': opts['state'],
        'scope': opts['scope']
      };

      let authNames = ['asc_auth_key'];
      let contentTypes = ['multipart/form-data'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/oauth2/authorize', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
