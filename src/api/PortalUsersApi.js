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
import EmployeeType from '../models/EmployeeType';
import Int64Wrapper from '../models/Int64Wrapper';
import StringWrapper from '../models/StringWrapper';
import UserInfoWrapper from '../models/UserInfoWrapper';

/**
* PortalUsers service.
* @module api/PortalUsersApi
* @version 3.2.0
*/
export default class PortalUsersApi {

    /**
    * Constructs a new PortalUsersApi. 
    * @alias module:api/PortalUsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getInvitationLink operation.
     * @callback module:api/PortalUsersApi~getInvitationLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:models/StringWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an invitation link
     * Returns an invitation link for joining the portal.
     * @param {module:models/EmployeeType} employeeType The type of employee role for the invitation link (All, RoomAdmin, Guest, DocSpaceAdmin, User).
     * @param {module:api/PortalUsersApi~getInvitationLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/StringWrapper}
     */
    getInvitationLink(employeeType, callback) {
      let postBody = null;
      // verify the required parameter 'employeeType' is set
      if (employeeType === undefined || employeeType === null) {
        throw new Error("Missing the required parameter 'employeeType' when calling getInvitationLink");
      }

      let pathParams = {
        'employeeType': employeeType
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
        '/api/2.0/portal/users/invite/{employeeType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPortalUsersCount operation.
     * @callback module:api/PortalUsersApi~getPortalUsersCountCallback
     * @param {String} error Error message, if any.
     * @param {module:models/Int64Wrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a number of portal users
     * Returns a number of portal users.
     * @param {module:api/PortalUsersApi~getPortalUsersCountCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/Int64Wrapper}
     */
    getPortalUsersCount(callback) {
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
      let returnType = Int64Wrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/userscount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserById operation.
     * @callback module:api/PortalUsersApi~getUserByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:models/UserInfoWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user by ID
     * Returns a user with the ID specified in the request from the current portal.
     * @param {String} userID The user ID extracted from the route parameters.
     * @param {module:api/PortalUsersApi~getUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/UserInfoWrapper}
     */
    getUserById(userID, callback) {
      let postBody = null;
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling getUserById");
      }

      let pathParams = {
        'userID': userID
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
      let returnType = UserInfoWrapper;
      return this.apiClient.callApi(
        '/api/2.0/portal/users/{userID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the markGiftMessageAsRead operation.
     * @callback module:api/PortalUsersApi~markGiftMessageAsReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark a gift message as read
     * Marks a gift message as read.
     * @param {module:api/PortalUsersApi~markGiftMessageAsReadCallback} callback The callback function, accepting three arguments: error, data, response
     */
    markGiftMessageAsRead(callback) {
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/portal/present/mark', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendCongratulations operation.
     * @callback module:api/PortalUsersApi~sendCongratulationsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send congratulations
     * Sends congratulations to the user after registering a portal.
     * @param {Object} opts Optional parameters
     * @param {String} [userid] The user ID to receive the congratulatory message.
     * @param {String} [key] The template identifier or email configuration key.
     * @param {module:api/PortalUsersApi~sendCongratulationsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    sendCongratulations(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'Userid': opts['userid'],
        'Key': opts['key']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/2.0/portal/sendcongratulations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
