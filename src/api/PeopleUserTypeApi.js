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
import EmployeeFullArrayWrapper from '../models/EmployeeFullArrayWrapper';
import EmployeeType from '../models/EmployeeType';
import StartUpdateUserTypeDto from '../models/StartUpdateUserTypeDto';
import TaskProgressResponseWrapper from '../models/TaskProgressResponseWrapper';
import TerminateRequestDto from '../models/TerminateRequestDto';
import UpdateMembersRequestDto from '../models/UpdateMembersRequestDto';

/**
* PeopleUserType service.
* @module api/PeopleUserTypeApi
* @version 3.2.0
*/
export default class PeopleUserTypeApi {

    /**
    * Constructs a new PeopleUserTypeApi. 
    * @alias module:api/PeopleUserTypeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getUserTypeUpdateProgress operation.
     * @callback module:api/PeopleUserTypeApi~getUserTypeUpdateProgressCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TaskProgressResponseWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the progress of updating user type
     * Returns the progress of updating the user type.
     * @param {String} userid The user ID.
     * @param {module:api/PeopleUserTypeApi~getUserTypeUpdateProgressCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TaskProgressResponseWrapper}
     */
    getUserTypeUpdateProgress(userid, callback) {
      let postBody = null;
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling getUserTypeUpdateProgress");
      }

      let pathParams = {
        'userid': userid
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
      let returnType = TaskProgressResponseWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/type/progress/{userid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the starUserTypetUpdate operation.
     * @callback module:api/PeopleUserTypeApi~starUserTypetUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TaskProgressResponseWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user type
     * Starts updating the type of the user or guest when reassigning rooms and shared files.
     * @param {Object} opts Optional parameters
     * @param {module:models/StartUpdateUserTypeDto} [startUpdateUserTypeDto] 
     * @param {module:api/PeopleUserTypeApi~starUserTypetUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TaskProgressResponseWrapper}
     */
    starUserTypetUpdate(opts, callback) {
      opts = opts || {};
      let postBody = opts['startUpdateUserTypeDto'];

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
      let returnType = TaskProgressResponseWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/type', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the terminateUserTypeUpdate operation.
     * @callback module:api/PeopleUserTypeApi~terminateUserTypeUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:models/TaskProgressResponseWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Terminate update user type
     * Terminates the process of updating the type of the user or guest.
     * @param {Object} opts Optional parameters
     * @param {module:models/TerminateRequestDto} [terminateRequestDto] 
     * @param {module:api/PeopleUserTypeApi~terminateUserTypeUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/TaskProgressResponseWrapper}
     */
    terminateUserTypeUpdate(opts, callback) {
      opts = opts || {};
      let postBody = opts['terminateRequestDto'];

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
      let returnType = TaskProgressResponseWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/type/terminate', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserType operation.
     * @callback module:api/PeopleUserTypeApi~updateUserTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change a user type
     * Changes a type of the users with the IDs specified in the request.
     * @param {module:models/EmployeeType} type The new user type.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateMembersRequestDto} [updateMembersRequestDto] The request parameters for updating the user information.
     * @param {module:api/PeopleUserTypeApi~updateUserTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    updateUserType(type, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateMembersRequestDto'];
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling updateUserType");
      }

      let pathParams = {
        'type': type
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
      let returnType = EmployeeFullArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/type/{type}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
