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
import EmployeeActivationStatus from '../models/EmployeeActivationStatus';
import EmployeeFullArrayWrapper from '../models/EmployeeFullArrayWrapper';
import EmployeeStatus from '../models/EmployeeStatus';
import SortOrder from '../models/SortOrder';
import UpdateMembersRequestDto from '../models/UpdateMembersRequestDto';

/**
* PeopleUserStatus service.
* @module api/PeopleUserStatusApi
* @version 3.2.0
*/
export default class PeopleUserStatusApi {

    /**
    * Constructs a new PeopleUserStatusApi. 
    * @alias module:api/PeopleUserStatusApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getByStatus operation.
     * @callback module:api/PeopleUserStatusApi~getByStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get profiles by status
     * Returns a list of profiles filtered by the user status.
     * @param {module:models/EmployeeStatus} status The user status.
     * @param {Object} opts Optional parameters
     * @param {String} [filterBy] Specifies the criteria used to filter the profiles in the request.
     * @param {Number} [count] The maximum number of user profiles to retrieve.
     * @param {Number} [startIndex] The starting index for retrieving data in a paginated request.
     * @param {String} [sortBy] Specifies the property or field name by which the results should be sorted.
     * @param {module:models/SortOrder} [sortOrder] The order in which the results are sorted.
     * @param {String} [filterSeparator] Represents the separator used to split multiple filter criteria in a query string.
     * @param {String} [filterValue] A string value representing additional filter criteria used in query parameters.
     * @param {module:api/PeopleUserStatusApi~getByStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    getByStatus(status, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling getByStatus");
      }

      let pathParams = {
        'status': status
      };
      let queryParams = {
        'filterBy': opts['filterBy'],
        'count': opts['count'],
        'startIndex': opts['startIndex'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
        'filterSeparator': opts['filterSeparator'],
        'filterValue': opts['filterValue']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EmployeeFullArrayWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/status/{status}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserActivationStatus operation.
     * @callback module:api/PeopleUserStatusApi~updateUserActivationStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set an activation status to the users
     * Sets the required activation status to the list of users with the IDs specified in the request.
     * @param {module:models/EmployeeActivationStatus} activationstatus The new user activation status.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateMembersRequestDto} [updateMembersRequestDto] The request parameters for updating the user information.
     * @param {module:api/PeopleUserStatusApi~updateUserActivationStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    updateUserActivationStatus(activationstatus, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateMembersRequestDto'];
      // verify the required parameter 'activationstatus' is set
      if (activationstatus === undefined || activationstatus === null) {
        throw new Error("Missing the required parameter 'activationstatus' when calling updateUserActivationStatus");
      }

      let pathParams = {
        'activationstatus': activationstatus
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
        '/api/2.0/people/activationstatus/{activationstatus}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserStatus operation.
     * @callback module:api/PeopleUserStatusApi~updateUserStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullArrayWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change a user status
     * Changes a status of the users with the IDs specified in the request.
     * @param {module:models/EmployeeStatus} status The new user status.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateMembersRequestDto} [updateMembersRequestDto] The request parameters for updating the user information.
     * @param {module:api/PeopleUserStatusApi~updateUserStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullArrayWrapper}
     */
    updateUserStatus(status, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateMembersRequestDto'];
      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling updateUserStatus");
      }

      let pathParams = {
        'status': status
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
        '/api/2.0/people/status/{status}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
