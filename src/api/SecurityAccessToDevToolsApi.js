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
import TenantDevToolsAccessSettingsDto from '../models/TenantDevToolsAccessSettingsDto';
import TenantDevToolsAccessSettingsWrapper from '../models/TenantDevToolsAccessSettingsWrapper';

/**
* SecurityAccessToDevTools service.
* @module api/SecurityAccessToDevToolsApi
* @version 3.2.0
*/
export default class SecurityAccessToDevToolsApi {

    /**
    * Constructs a new SecurityAccessToDevToolsApi. 
    * @alias module:api/SecurityAccessToDevToolsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the setTenantDevToolsAccessSettings operation.
     * @callback module:api/SecurityAccessToDevToolsApi~setTenantDevToolsAccessSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TenantDevToolsAccessSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the Developer Tools access settings
     * Sets the Developer Tools access settings for the portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/TenantDevToolsAccessSettingsDto} [tenantDevToolsAccessSettingsDto] 
     * @param {module:api/SecurityAccessToDevToolsApi~setTenantDevToolsAccessSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TenantDevToolsAccessSettingsWrapper}
     */
    setTenantDevToolsAccessSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['tenantDevToolsAccessSettingsDto'];

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
      let returnType = TenantDevToolsAccessSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/devtoolsaccess', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
