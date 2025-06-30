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
import BooleanWrapper from '../models/BooleanWrapper';
import EmployeeArrayWrapper from '../models/EmployeeArrayWrapper';
import ObjectWrapper from '../models/ObjectWrapper';
import PasswordSettingsRequestsDto from '../models/PasswordSettingsRequestsDto';
import PasswordSettingsWrapper from '../models/PasswordSettingsWrapper';
import ProductAdministratorWrapper from '../models/ProductAdministratorWrapper';
import SecurityArrayWrapper from '../models/SecurityArrayWrapper';
import SecurityRequestsDto from '../models/SecurityRequestsDto';
import WebItemSecurityRequestsDto from '../models/WebItemSecurityRequestsDto';
import WebItemsSecurityRequestsDto from '../models/WebItemsSecurityRequestsDto';

/**
* SettingsSecurity service.
* @module api/SettingsSecurityApi
* @version 3.2.0
*/
export default class SettingsSecurityApi {

    /**
    * Constructs a new SettingsSecurityApi. 
    * @alias module:api/SettingsSecurityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getEnabledModules operation.
     * @callback module:api/SettingsSecurityApi~getEnabledModulesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the enabled modules
     * Returns a list of all the enabled modules.
     * @param {module:api/SettingsSecurityApi~getEnabledModulesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectWrapper}
     */
    getEnabledModules(callback) {
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
        '/api/2.0/settings/security/modules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getIsProductAdministrator operation.
     * @callback module:api/SettingsSecurityApi~getIsProductAdministratorCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ProductAdministratorWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check a product administrator
     * Checks if the selected user is an administrator of a product with the ID specified in the request.
     * @param {Object} opts Optional parameters
     * @param {String} [productid] The ID of the product extracted from the query parameters.
     * @param {String} [userid] The user ID extracted from the query parameters.
     * @param {module:api/SettingsSecurityApi~getIsProductAdministratorCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ProductAdministratorWrapper}
     */
    getIsProductAdministrator(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'productid': opts['productid'],
        'userid': opts['userid']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ProductAdministratorWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/security/administrator', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPasswordSettings operation.
     * @callback module:api/SettingsSecurityApi~getPasswordSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/PasswordSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the password settings
     * Returns the portal password settings.
     * @param {module:api/SettingsSecurityApi~getPasswordSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/PasswordSettingsWrapper}
     */
    getPasswordSettings(callback) {
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
      let returnType = PasswordSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/security/password', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProductAdministrators operation.
     * @callback module:api/SettingsSecurityApi~getProductAdministratorsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the product administrators
     * Returns a list of all the administrators of a product with the ID specified in the request.
     * @param {String} productid The ID of the product extracted from the route parameters.
     * @param {module:api/SettingsSecurityApi~getProductAdministratorsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeArrayWrapper}
     */
    getProductAdministrators(productid, callback) {
      let postBody = null;
      // verify the required parameter 'productid' is set
      if (productid === undefined || productid === null) {
        throw new Error("Missing the required parameter 'productid' when calling getProductAdministrators");
      }

      let pathParams = {
        'productid': productid
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
      let returnType = EmployeeArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/security/administrator/{productid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebItemSecurityInfo operation.
     * @callback module:api/SettingsSecurityApi~getWebItemSecurityInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the module availability
     * Returns the availability of the module with the ID specified in the request.
     * @param {String} id The ID extracted from the route parameters.
     * @param {module:api/SettingsSecurityApi~getWebItemSecurityInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    getWebItemSecurityInfo(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getWebItemSecurityInfo");
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
      let returnType = BooleanWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/security/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebItemSettingsSecurityInfo operation.
     * @callback module:api/SettingsSecurityApi~getWebItemSettingsSecurityInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SecurityArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the security settings
     * Returns the security settings for the modules specified in the request.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [ids] The list of module identifiers for which to retrieve the security settings.
     * @param {module:api/SettingsSecurityApi~getWebItemSettingsSecurityInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SecurityArrayWrapper}
     */
    getWebItemSettingsSecurityInfo(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(opts['ids'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SecurityArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/security', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setAccessToWebItems operation.
     * @callback module:api/SettingsSecurityApi~setAccessToWebItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SecurityArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the security settings to modules
     * Sets the security settings to the modules with the IDs specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/WebItemsSecurityRequestsDto} [webItemsSecurityRequestsDto] 
     * @param {module:api/SettingsSecurityApi~setAccessToWebItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SecurityArrayWrapper}
     */
    setAccessToWebItems(opts, callback) {
      opts = opts || {};
      let postBody = opts['webItemsSecurityRequestsDto'];

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
      let returnType = SecurityArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/security/access', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setProductAdministrator operation.
     * @callback module:api/SettingsSecurityApi~setProductAdministratorCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ProductAdministratorWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set a product administrator
     * Sets the selected user as an administrator of a product with the ID specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/SecurityRequestsDto} [securityRequestsDto] 
     * @param {module:api/SettingsSecurityApi~setProductAdministratorCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ProductAdministratorWrapper}
     */
    setProductAdministrator(opts, callback) {
      opts = opts || {};
      let postBody = opts['securityRequestsDto'];

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
      let returnType = ProductAdministratorWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/security/administrator', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setWebItemSecurity operation.
     * @callback module:api/SettingsSecurityApi~setWebItemSecurityCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SecurityArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the module security settings
     * Sets the security settings to the module with the ID specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/WebItemSecurityRequestsDto} [webItemSecurityRequestsDto] 
     * @param {module:api/SettingsSecurityApi~setWebItemSecurityCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SecurityArrayWrapper}
     */
    setWebItemSecurity(opts, callback) {
      opts = opts || {};
      let postBody = opts['webItemSecurityRequestsDto'];

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
      let returnType = SecurityArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/security', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePasswordSettings operation.
     * @callback module:api/SettingsSecurityApi~updatePasswordSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/PasswordSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the password settings
     * Sets the portal password settings.
     * @param {Object} opts Optional parameters
     * @param {module:models/PasswordSettingsRequestsDto} [passwordSettingsRequestsDto] 
     * @param {module:api/SettingsSecurityApi~updatePasswordSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/PasswordSettingsWrapper}
     */
    updatePasswordSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['passwordSettingsRequestsDto'];

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
      let returnType = PasswordSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/security/password', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
