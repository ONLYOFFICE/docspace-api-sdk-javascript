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
import SmtpOperationStatusRequestsWrapper from '../models/SmtpOperationStatusRequestsWrapper';
import SmtpSettingsDto from '../models/SmtpSettingsDto';
import SmtpSettingsWrapper from '../models/SmtpSettingsWrapper';

/**
* SecuritySMTPSettings service.
* @module api/SecuritySMTPSettingsApi
* @version 3.2.0
*/
export default class SecuritySMTPSettingsApi {

    /**
    * Constructs a new SecuritySMTPSettingsApi. 
    * @alias module:api/SecuritySMTPSettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getSmtpOperationStatus operation.
     * @callback module:api/SecuritySMTPSettingsApi~getSmtpOperationStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SmtpOperationStatusRequestsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the SMTP testing process status
     * Returns the status of the SMTP testing process.
     * @param {module:api/SecuritySMTPSettingsApi~getSmtpOperationStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SmtpOperationStatusRequestsWrapper}
     */
    getSmtpOperationStatus(callback) {
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
      let returnType = SmtpOperationStatusRequestsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/smtpsettings/smtp/test/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSmtpSettings operation.
     * @callback module:api/SecuritySMTPSettingsApi~getSmtpSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SmtpSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the SMTP settings
     * Returns the current portal SMTP settings.
     * @param {module:api/SecuritySMTPSettingsApi~getSmtpSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SmtpSettingsWrapper}
     */
    getSmtpSettings(callback) {
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
      let returnType = SmtpSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/smtpsettings/smtp', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resetSmtpSettings operation.
     * @callback module:api/SecuritySMTPSettingsApi~resetSmtpSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SmtpSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset the SMTP settings
     * Resets the SMTP settings of the current portal.
     * @param {module:api/SecuritySMTPSettingsApi~resetSmtpSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SmtpSettingsWrapper}
     */
    resetSmtpSettings(callback) {
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
      let returnType = SmtpSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/smtpsettings/smtp', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the saveSmtpSettings operation.
     * @callback module:api/SecuritySMTPSettingsApi~saveSmtpSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SmtpSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the SMTP settings
     * Saves the SMTP settings for the current portal.
     * @param {Object} opts Optional parameters
     * @param {module:models/SmtpSettingsDto} [smtpSettingsDto] 
     * @param {module:api/SecuritySMTPSettingsApi~saveSmtpSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SmtpSettingsWrapper}
     */
    saveSmtpSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['smtpSettingsDto'];

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
      let returnType = SmtpSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/smtpsettings/smtp', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the testSmtpSettings operation.
     * @callback module:api/SecuritySMTPSettingsApi~testSmtpSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SmtpOperationStatusRequestsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test the SMTP settings
     * Tests the SMTP settings for the current portal (sends test message to the user email).
     * @param {module:api/SecuritySMTPSettingsApi~testSmtpSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SmtpOperationStatusRequestsWrapper}
     */
    testSmtpSettings(callback) {
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
      let returnType = SmtpOperationStatusRequestsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/smtpsettings/smtp/test', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
