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
import CustomNavigationItem from '../models/CustomNavigationItem';
import CustomNavigationItemArrayWrapper from '../models/CustomNavigationItemArrayWrapper';
import CustomNavigationItemWrapper from '../models/CustomNavigationItemWrapper';

/**
* SettingsCustomNavigation service.
* @module api/SettingsCustomNavigationApi
* @version 3.2.0
*/
export default class SettingsCustomNavigationApi {

    /**
    * Constructs a new SettingsCustomNavigationApi. 
    * @alias module:api/SettingsCustomNavigationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCustomNavigationItem operation.
     * @callback module:api/SettingsCustomNavigationApi~createCustomNavigationItemCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CustomNavigationItemWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a custom navigation item
     * Adds a custom navigation item with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/CustomNavigationItem} [customNavigationItem] 
     * @param {module:api/SettingsCustomNavigationApi~createCustomNavigationItemCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CustomNavigationItemWrapper}
     */
    createCustomNavigationItem(opts, callback) {
      opts = opts || {};
      let postBody = opts['customNavigationItem'];

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
      let returnType = CustomNavigationItemWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/customnavigation/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomNavigationItem operation.
     * @callback module:api/SettingsCustomNavigationApi~deleteCustomNavigationItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a custom navigation item
     * Deletes a custom navigation item with the ID specified in the request.
     * @param {String} id The ID extracted from the route parameters.
     * @param {module:api/SettingsCustomNavigationApi~deleteCustomNavigationItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCustomNavigationItem(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCustomNavigationItem");
      }

      let pathParams = {
        'id': id
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
        '/api/2.0/settings/customnavigation/delete/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomNavigationItem operation.
     * @callback module:api/SettingsCustomNavigationApi~getCustomNavigationItemCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CustomNavigationItemWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a custom navigation item by ID
     * Returns a custom navigation item by the ID specified in the request.
     * @param {String} id The ID extracted from the route parameters.
     * @param {module:api/SettingsCustomNavigationApi~getCustomNavigationItemCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CustomNavigationItemWrapper}
     */
    getCustomNavigationItem(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCustomNavigationItem");
      }

      let pathParams = {
        'id': id
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
      let returnType = CustomNavigationItemWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/customnavigation/get/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomNavigationItemSample operation.
     * @callback module:api/SettingsCustomNavigationApi~getCustomNavigationItemSampleCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CustomNavigationItemWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a custom navigation item sample
     * Returns a sample of the custom navigation item.
     * @param {module:api/SettingsCustomNavigationApi~getCustomNavigationItemSampleCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CustomNavigationItemWrapper}
     */
    getCustomNavigationItemSample(callback) {
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
      let returnType = CustomNavigationItemWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/customnavigation/getsample', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomNavigationItems operation.
     * @callback module:api/SettingsCustomNavigationApi~getCustomNavigationItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/CustomNavigationItemArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the custom navigation items
     * Returns a list of the custom navigation items.
     * @param {module:api/SettingsCustomNavigationApi~getCustomNavigationItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/CustomNavigationItemArrayWrapper}
     */
    getCustomNavigationItems(callback) {
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
      let returnType = CustomNavigationItemArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/customnavigation/getall', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
