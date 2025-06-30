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
import ContactsRequest from '../models/ContactsRequest';
import EmployeeFullWrapper from '../models/EmployeeFullWrapper';

/**
* PeopleContacts service.
* @module api/PeopleContactsApi
* @version 3.2.0
*/
export default class PeopleContactsApi {

    /**
    * Constructs a new PeopleContactsApi. 
    * @alias module:api/PeopleContactsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteMemberContacts operation.
     * @callback module:api/PeopleContactsApi~deleteMemberContactsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete user contacts
     * Deletes the contacts of the user with the ID specified in the request from the portal.
     * @param {String} userid The user ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/ContactsRequest} [contactsRequest] The contacts request.
     * @param {module:api/PeopleContactsApi~deleteMemberContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullWrapper}
     */
    deleteMemberContacts(userid, opts, callback) {
      opts = opts || {};
      let postBody = opts['contactsRequest'];
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling deleteMemberContacts");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EmployeeFullWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/{userid}/contacts', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setMemberContacts operation.
     * @callback module:api/PeopleContactsApi~setMemberContactsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set user contacts
     * Sets the contacts of the user with the ID specified in the request replacing the current portal data with the new data.
     * @param {String} userid The user ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/ContactsRequest} [contactsRequest] The contacts request.
     * @param {module:api/PeopleContactsApi~setMemberContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullWrapper}
     */
    setMemberContacts(userid, opts, callback) {
      opts = opts || {};
      let postBody = opts['contactsRequest'];
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling setMemberContacts");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EmployeeFullWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/{userid}/contacts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMemberContacts operation.
     * @callback module:api/PeopleContactsApi~updateMemberContactsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/EmployeeFullWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user contacts
     * Updates the contact information of the user with the ID specified in the request merging the new data into the current portal data.
     * @param {String} userid The user ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/ContactsRequest} [contactsRequest] The contacts request.
     * @param {module:api/PeopleContactsApi~updateMemberContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/EmployeeFullWrapper}
     */
    updateMemberContacts(userid, opts, callback) {
      opts = opts || {};
      let postBody = opts['contactsRequest'];
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling updateMemberContacts");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EmployeeFullWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/{userid}/contacts', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
