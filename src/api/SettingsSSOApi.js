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
import ObjectWrapper from '../models/ObjectWrapper';
import SsoSettingsRequestsDto from '../models/SsoSettingsRequestsDto';
import SsoSettingsV2Wrapper from '../models/SsoSettingsV2Wrapper';

/**
* SettingsSSO service.
* @module api/SettingsSSOApi
* @version 3.2.0
*/
export default class SettingsSSOApi {

    /**
    * Constructs a new SettingsSSOApi. 
    * @alias module:api/SettingsSSOApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getDefaultSsoSettingsV2 operation.
     * @callback module:api/SettingsSSOApi~getDefaultSsoSettingsV2Callback
     * @param {String} error Error message, if any.
     * @param {module:models/SsoSettingsV2Wrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the default SSO settings
     * Returns the default portal SSO settings.
     * @param {module:api/SettingsSSOApi~getDefaultSsoSettingsV2Callback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SsoSettingsV2Wrapper}
     */
    getDefaultSsoSettingsV2(callback) {
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
      let returnType = SsoSettingsV2Wrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/ssov2/default', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSsoSettingsV2 operation.
     * @callback module:api/SettingsSSOApi~getSsoSettingsV2Callback
     * @param {String} error Error message, if any.
     * @param {module:models/SsoSettingsV2Wrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the SSO settings
     * Returns the current portal SSO settings.
     * @param {module:api/SettingsSSOApi~getSsoSettingsV2Callback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SsoSettingsV2Wrapper}
     */
    getSsoSettingsV2(callback) {
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
      let returnType = SsoSettingsV2Wrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/ssov2', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSsoSettingsV2Constants operation.
     * @callback module:api/SettingsSSOApi~getSsoSettingsV2ConstantsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the SSO settings constants
     * Returns the SSO settings constants.
     * @param {module:api/SettingsSSOApi~getSsoSettingsV2ConstantsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectWrapper}
     */
    getSsoSettingsV2Constants(callback) {
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
      let returnType = ObjectWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/ssov2/constants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resetSsoSettingsV2 operation.
     * @callback module:api/SettingsSSOApi~resetSsoSettingsV2Callback
     * @param {String} error Error message, if any.
     * @param {module:models/SsoSettingsV2Wrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset the SSO settings
     * Resets the SSO settings of the current portal.
     * @param {module:api/SettingsSSOApi~resetSsoSettingsV2Callback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SsoSettingsV2Wrapper}
     */
    resetSsoSettingsV2(callback) {
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
      let returnType = SsoSettingsV2Wrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/ssov2', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveSsoSettingsV2 operation.
     * @callback module:api/SettingsSSOApi~saveSsoSettingsV2Callback
     * @param {String} error Error message, if any.
     * @param {module:models/SsoSettingsV2Wrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the SSO settings
     * Saves the SSO settings for the current portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/SsoSettingsRequestsDto} [ssoSettingsRequestsDto] 
     * @param {module:api/SettingsSSOApi~saveSsoSettingsV2Callback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SsoSettingsV2Wrapper}
     */
    saveSsoSettingsV2(opts, callback) {
      opts = opts || {};
      let postBody = opts['ssoSettingsRequestsDto'];

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
      let returnType = SsoSettingsV2Wrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/ssov2', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
