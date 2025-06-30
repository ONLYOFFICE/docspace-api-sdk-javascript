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
import AuthRequestsDto from '../models/AuthRequestsDto';
import AuthenticationTokenWrapper from '../models/AuthenticationTokenWrapper';
import BooleanWrapper from '../models/BooleanWrapper';
import ConfirmWrapper from '../models/ConfirmWrapper';
import EmailValidationKeyModel from '../models/EmailValidationKeyModel';
import MobileRequestsDto from '../models/MobileRequestsDto';
import StringWrapper from '../models/StringWrapper';

/**
* Authentication service.
* @module api/AuthenticationApi
* @version 3.2.0
*/
export default class AuthenticationApi {

    /**
    * Constructs a new AuthenticationApi. 
    * @alias module:api/AuthenticationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the authenticateMe operation.
     * @callback module:api/AuthenticationApi~authenticateMeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AuthenticationTokenWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authenticate a user
     * Authenticates the current user by SMS, authenticator app, or without two-factor authentication.
     * @param {Object} opts Optional parameters
     * @param {module:models/AuthRequestsDto} [authRequestsDto] 
     * @param {module:api/AuthenticationApi~authenticateMeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AuthenticationTokenWrapper}
     */
    authenticateMe(opts, callback) {
      opts = opts || {};
      let postBody = opts['authRequestsDto'];

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
      let accepts = ['application/json'];
      let returnType = AuthenticationTokenWrapper;
      return this.apiClient.callApi(
        '/api/2.0/authentication', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the authenticateMeFromBodyWithCode operation.
     * @callback module:api/AuthenticationApi~authenticateMeFromBodyWithCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AuthenticationTokenWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authenticate a user by code
     * Authenticates the current user by SMS or two-factor authentication code.
     * @param {String} code 
     * @param {Object} opts Optional parameters
     * @param {module:models/AuthRequestsDto} [authRequestsDto] 
     * @param {module:api/AuthenticationApi~authenticateMeFromBodyWithCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AuthenticationTokenWrapper}
     */
    authenticateMeFromBodyWithCode(code, opts, callback) {
      opts = opts || {};
      let postBody = opts['authRequestsDto'];
      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling authenticateMeFromBodyWithCode");
      }

      let pathParams = {
        'code': code
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthenticationTokenWrapper;
      return this.apiClient.callApi(
        '/api/2.0/authentication/{code}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the checkConfirm operation.
     * @callback module:api/AuthenticationApi~checkConfirmCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ConfirmWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Open confirmation email URL
     * Opens a confirmation email URL to validate a certain action (employee invitation, portal removal, phone activation, etc.).
     * @param {Object} opts Optional parameters
     * @param {module:models/EmailValidationKeyModel} [emailValidationKeyModel] 
     * @param {module:api/AuthenticationApi~checkConfirmCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ConfirmWrapper}
     */
    checkConfirm(opts, callback) {
      opts = opts || {};
      let postBody = opts['emailValidationKeyModel'];

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
      let accepts = ['application/json'];
      let returnType = ConfirmWrapper;
      return this.apiClient.callApi(
        '/api/2.0/authentication/confirm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getIsAuthentificated operation.
     * @callback module:api/AuthenticationApi~getIsAuthentificatedCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check authentication
     * Checks if the current user is authenticated or not.
     * @param {module:api/AuthenticationApi~getIsAuthentificatedCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    getIsAuthentificated(callback) {
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
      let returnType = BooleanWrapper;
      return this.apiClient.callApi(
        '/api/2.0/authentication', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the logout operation.
     * @callback module:api/AuthenticationApi~logoutCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log out
     * Logs out of the current user account.
     * @param {module:api/AuthenticationApi~logoutCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    logout(callback) {
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
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/authentication/logout', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveMobilePhone operation.
     * @callback module:api/AuthenticationApi~saveMobilePhoneCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AuthenticationTokenWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set a mobile phone
     * Sets a mobile phone for the current user.
     * @param {Object} opts Optional parameters
     * @param {module:models/MobileRequestsDto} [mobileRequestsDto] 
     * @param {module:api/AuthenticationApi~saveMobilePhoneCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AuthenticationTokenWrapper}
     */
    saveMobilePhone(opts, callback) {
      opts = opts || {};
      let postBody = opts['mobileRequestsDto'];

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
      let returnType = AuthenticationTokenWrapper;
      return this.apiClient.callApi(
        '/api/2.0/authentication/setphone', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendSmsCode operation.
     * @callback module:api/AuthenticationApi~sendSmsCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/AuthenticationTokenWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send SMS code
     * Sends SMS with an authentication code.
     * @param {Object} opts Optional parameters
     * @param {module:models/AuthRequestsDto} [authRequestsDto] 
     * @param {module:api/AuthenticationApi~sendSmsCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/AuthenticationTokenWrapper}
     */
    sendSmsCode(opts, callback) {
      opts = opts || {};
      let postBody = opts['authRequestsDto'];

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
      let accepts = ['application/json'];
      let returnType = AuthenticationTokenWrapper;
      return this.apiClient.callApi(
        '/api/2.0/authentication/sendsms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
