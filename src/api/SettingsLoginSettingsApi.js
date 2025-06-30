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
import LoginSettingsRequestDto from '../models/LoginSettingsRequestDto';
import LoginSettingsWrapper from '../models/LoginSettingsWrapper';

/**
* SettingsLoginSettings service.
* @module api/SettingsLoginSettingsApi
* @version 3.2.0
*/
export default class SettingsLoginSettingsApi {

    /**
    * Constructs a new SettingsLoginSettingsApi. 
    * @alias module:api/SettingsLoginSettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getLoginSettings operation.
     * @callback module:api/SettingsLoginSettingsApi~getLoginSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/LoginSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the login settings
     * Returns the portal login settings.
     * @param {module:api/SettingsLoginSettingsApi~getLoginSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/LoginSettingsWrapper}
     */
    getLoginSettings(callback) {
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
      let returnType = LoginSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/security/loginsettings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setDefaultLoginSettings operation.
     * @callback module:api/SettingsLoginSettingsApi~setDefaultLoginSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/LoginSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset the login settings
     * Resets the portal login settings to default.
     * @param {module:api/SettingsLoginSettingsApi~setDefaultLoginSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/LoginSettingsWrapper}
     */
    setDefaultLoginSettings(callback) {
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
      let returnType = LoginSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/security/loginsettings', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLoginSettings operation.
     * @callback module:api/SettingsLoginSettingsApi~updateLoginSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/LoginSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the login settings
     * Updates the login settings with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/LoginSettingsRequestDto} [loginSettingsRequestDto] 
     * @param {module:api/SettingsLoginSettingsApi~updateLoginSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/LoginSettingsWrapper}
     */
    updateLoginSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['loginSettingsRequestDto'];

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
      let returnType = LoginSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/security/loginsettings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
