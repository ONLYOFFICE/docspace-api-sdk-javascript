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
import QuotaSettingsRequestsDto from '../models/QuotaSettingsRequestsDto';
import TenantQuotaSettingsRequestsDto from '../models/TenantQuotaSettingsRequestsDto';
import TenantQuotaSettingsWrapper from '../models/TenantQuotaSettingsWrapper';
import TenantRoomQuotaSettingsWrapper from '../models/TenantRoomQuotaSettingsWrapper';
import TenantUserQuotaSettingsWrapper from '../models/TenantUserQuotaSettingsWrapper';

/**
* SettingsQuota service.
* @module api/SettingsQuotaApi
* @version 3.2.0
*/
export default class SettingsQuotaApi {

    /**
    * Constructs a new SettingsQuotaApi. 
    * @alias module:api/SettingsQuotaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getUserQuotaSettings operation.
     * @callback module:api/SettingsQuotaApi~getUserQuotaSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantUserQuotaSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the user quota settings
     * Returns the user quota settings.
     * @param {module:api/SettingsQuotaApi~getUserQuotaSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantUserQuotaSettingsWrapper}
     */
    getUserQuotaSettings(callback) {
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
      let returnType = TenantUserQuotaSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/userquotasettings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveRoomQuotaSettings operation.
     * @callback module:api/SettingsQuotaApi~saveRoomQuotaSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantRoomQuotaSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the room quota settings
     * Saves the room quota settings specified in the request to the current portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/QuotaSettingsRequestsDto} [quotaSettingsRequestsDto] 
     * @param {module:api/SettingsQuotaApi~saveRoomQuotaSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantRoomQuotaSettingsWrapper}
     */
    saveRoomQuotaSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['quotaSettingsRequestsDto'];

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
      let returnType = TenantRoomQuotaSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/roomquotasettings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setTenantQuotaSettings operation.
     * @callback module:api/SettingsQuotaApi~setTenantQuotaSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantQuotaSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the tenant quota settings
     * Saves the tenant quota settings specified in the request to the current portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/TenantQuotaSettingsRequestsDto} [tenantQuotaSettingsRequestsDto] 
     * @param {module:api/SettingsQuotaApi~setTenantQuotaSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantQuotaSettingsWrapper}
     */
    setTenantQuotaSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['tenantQuotaSettingsRequestsDto'];

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
      let returnType = TenantQuotaSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tenantquotasettings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
