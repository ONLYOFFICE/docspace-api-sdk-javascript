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
import ObjectArrayWrapper from '../models/ObjectArrayWrapper';
import SetupCodeWrapper from '../models/SetupCodeWrapper';
import StringWrapper from '../models/StringWrapper';
import TfaRequestsDto from '../models/TfaRequestsDto';
import TfaSettingsArrayWrapper from '../models/TfaSettingsArrayWrapper';
import TfaValidateRequestsDto from '../models/TfaValidateRequestsDto';

/**
* SettingsTFASettings service.
* @module api/SettingsTFASettingsApi
* @version 3.2.0
*/
export default class SettingsTFASettingsApi {

    /**
    * Constructs a new SettingsTFASettingsApi. 
    * @alias module:api/SettingsTFASettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getTfaAppCodes operation.
     * @callback module:api/SettingsTFASettingsApi~getTfaAppCodesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the TFA codes
     * Returns the two-factor authentication application codes.
     * @param {module:api/SettingsTFASettingsApi~getTfaAppCodesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectArrayWrapper}
     */
    getTfaAppCodes(callback) {
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
      let returnType = ObjectArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tfaappcodes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTfaConfirmUrl operation.
     * @callback module:api/SettingsTFASettingsApi~getTfaConfirmUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get confirmation email
     * Returns the confirmation email URL for authorization via SMS or TFA application.
     * @param {module:api/SettingsTFASettingsApi~getTfaConfirmUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    getTfaConfirmUrl(callback) {
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
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tfaapp/confirm', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTfaSettings operation.
     * @callback module:api/SettingsTFASettingsApi~getTfaSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TfaSettingsArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the TFA settings
     * Returns the current two-factor authentication settings.
     * @param {module:api/SettingsTFASettingsApi~getTfaSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TfaSettingsArrayWrapper}
     */
    getTfaSettings(callback) {
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
      let returnType = TfaSettingsArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tfaapp', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the tfaAppGenerateSetupCode operation.
     * @callback module:api/SettingsTFASettingsApi~tfaAppGenerateSetupCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/SetupCodeWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate setup code
     * Generates the setup TFA code for the current user.
     * @param {module:api/SettingsTFASettingsApi~tfaAppGenerateSetupCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/SetupCodeWrapper}
     */
    tfaAppGenerateSetupCode(callback) {
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
      let returnType = SetupCodeWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tfaapp/setup', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the tfaValidateAuthCode operation.
     * @callback module:api/SettingsTFASettingsApi~tfaValidateAuthCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate the TFA code
     * Validates the two-factor authentication code specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/TfaValidateRequestsDto} [tfaValidateRequestsDto] 
     * @param {module:api/SettingsTFASettingsApi~tfaValidateAuthCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    tfaValidateAuthCode(opts, callback) {
      opts = opts || {};
      let postBody = opts['tfaValidateRequestsDto'];

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
      let returnType = BooleanWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tfaapp/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unlinkTfaApp operation.
     * @callback module:api/SettingsTFASettingsApi~unlinkTfaAppCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlink the TFA application
     * Unlinks the current two-factor authentication application from the user account specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/TfaRequestsDto} [tfaRequestsDto] 
     * @param {module:api/SettingsTFASettingsApi~unlinkTfaAppCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    unlinkTfaApp(opts, callback) {
      opts = opts || {};
      let postBody = opts['tfaRequestsDto'];

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
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tfaappnewapp', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTfaAppCodes operation.
     * @callback module:api/SettingsTFASettingsApi~updateTfaAppCodesCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ObjectArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the TFA codes
     * Requests the new backup codes for the two-factor authentication application.
     * @param {module:api/SettingsTFASettingsApi~updateTfaAppCodesCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ObjectArrayWrapper}
     */
    updateTfaAppCodes(callback) {
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
      let returnType = ObjectArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tfaappnewcodes', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTfaSettings operation.
     * @callback module:api/SettingsTFASettingsApi~updateTfaSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/BooleanWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the TFA settings
     * Updates the two-factor authentication settings with the parameters specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/TfaRequestsDto} [tfaRequestsDto] 
     * @param {module:api/SettingsTFASettingsApi~updateTfaSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/BooleanWrapper}
     */
    updateTfaSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['tfaRequestsDto'];

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
      let returnType = BooleanWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tfaapp', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTfaSettingsLink operation.
     * @callback module:api/SettingsTFASettingsApi~updateTfaSettingsLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a confirmation email for updating TFA settings
     * Returns the confirmation email URL for updating TFA settings.
     * @param {Object} opts Optional parameters
     * @param {module:models/TfaRequestsDto} [tfaRequestsDto] 
     * @param {module:api/SettingsTFASettingsApi~updateTfaSettingsLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    updateTfaSettingsLink(opts, callback) {
      opts = opts || {};
      let postBody = opts['tfaRequestsDto'];

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
      let returnType = StringWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/tfaappwithlink', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
