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
import AccountInfoArrayWrapper from '../models/AccountInfoArrayWrapper';
import LinkAccountRequestDto from '../models/LinkAccountRequestDto';
import SignupAccountRequestDto from '../models/SignupAccountRequestDto';

/**
* PeopleThirdPartyAccounts service.
* @module api/PeopleThirdPartyAccountsApi
* @version 3.2.0
*/
export default class PeopleThirdPartyAccountsApi {

    /**
    * Constructs a new PeopleThirdPartyAccountsApi. 
    * @alias module:api/PeopleThirdPartyAccountsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getThirdPartyAuthProviders operation.
     * @callback module:api/PeopleThirdPartyAccountsApi~getThirdPartyAuthProvidersCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AccountInfoArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get third-party accounts
     * Returns a list of the available third-party accounts.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [inviteView] Specifies whether to return providers that are available for invitation links, i.e. the user can login or register through these providers.
     * @param {Boolean} [settingsView] Specifies whether to display the provider settings in a pop-up window (true) or redirect them to the desktop application (false).
     * @param {String} [clientCallback] The method that is called after authentication.
     * @param {String} [fromOnly] The provider name if a response is required only from this provider.
     * @param {module:api/PeopleThirdPartyAccountsApi~getThirdPartyAuthProvidersCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AccountInfoArrayWrapper}
     */
    getThirdPartyAuthProviders(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'inviteView': opts['inviteView'],
        'settingsView': opts['settingsView'],
        'clientCallback': opts['clientCallback'],
        'fromOnly': opts['fromOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AccountInfoArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/thirdparty/providers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the linkThirdPartyAccount operation.
     * @callback module:api/PeopleThirdPartyAccountsApi~linkThirdPartyAccountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Link a third-pary account
     * Links a third-party account specified in the request to the user profile.
     * @param {Object} opts Optional parameters
     * @param {module:models/LinkAccountRequestDto} [linkAccountRequestDto] 
     * @param {module:api/PeopleThirdPartyAccountsApi~linkThirdPartyAccountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    linkThirdPartyAccount(opts, callback) {
      opts = opts || {};
      let postBody = opts['linkAccountRequestDto'];

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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/people/thirdparty/linkaccount', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the signupThirdPartyAccount operation.
     * @callback module:api/PeopleThirdPartyAccountsApi~signupThirdPartyAccountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a third-pary account
     * Creates a third-party account with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/SignupAccountRequestDto} [signupAccountRequestDto] 
     * @param {module:api/PeopleThirdPartyAccountsApi~signupThirdPartyAccountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    signupThirdPartyAccount(opts, callback) {
      opts = opts || {};
      let postBody = opts['signupAccountRequestDto'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/people/thirdparty/signup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unlinkThirdPartyAccount operation.
     * @callback module:api/PeopleThirdPartyAccountsApi~unlinkThirdPartyAccountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlink a third-pary account
     * Unlinks a third-party account specified in the request from the user profile.
     * @param {Object} opts Optional parameters
     * @param {String} [provider] The provider name.
     * @param {module:api/PeopleThirdPartyAccountsApi~unlinkThirdPartyAccountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    unlinkThirdPartyAccount(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'provider': opts['provider']
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
        '/api/2.0/people/thirdparty/unlinkaccount', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
