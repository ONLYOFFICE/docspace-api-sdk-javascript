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
import FileUploadResultWrapper from '../models/FileUploadResultWrapper';
import KeyValuePairStringStringValues from '../models/KeyValuePairStringStringValues';
import ThumbnailsDataWrapper from '../models/ThumbnailsDataWrapper';
import ThumbnailsRequest from '../models/ThumbnailsRequest';
import UpdatePhotoMemberRequest from '../models/UpdatePhotoMemberRequest';

/**
* PeoplePhotos service.
* @module api/PeoplePhotosApi
* @version 3.2.0
*/
export default class PeoplePhotosApi {

    /**
    * Constructs a new PeoplePhotosApi. 
    * @alias module:api/PeoplePhotosApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createMemberPhotoThumbnails operation.
     * @callback module:api/PeoplePhotosApi~createMemberPhotoThumbnailsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ThumbnailsDataWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create photo thumbnails
     * Creates the user photo thumbnails by coordinates of the original image specified in the request.
     * @param {String} userid The user ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/ThumbnailsRequest} [thumbnailsRequest] The thumbnail request.
     * @param {module:api/PeoplePhotosApi~createMemberPhotoThumbnailsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ThumbnailsDataWrapper}
     */
    createMemberPhotoThumbnails(userid, opts, callback) {
      opts = opts || {};
      let postBody = opts['thumbnailsRequest'];
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling createMemberPhotoThumbnails");
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
      let returnType = ThumbnailsDataWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/{userid}/photo/thumbnails', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteMemberPhoto operation.
     * @callback module:api/PeoplePhotosApi~deleteMemberPhotoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ThumbnailsDataWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user photo
     * Deletes a photo of the user with the ID specified in the request.
     * @param {String} userid The user ID.
     * @param {module:api/PeoplePhotosApi~deleteMemberPhotoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ThumbnailsDataWrapper}
     */
    deleteMemberPhoto(userid, callback) {
      let postBody = null;
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling deleteMemberPhoto");
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
      let returnType = ThumbnailsDataWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/{userid}/photo', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMemberPhoto operation.
     * @callback module:api/PeoplePhotosApi~getMemberPhotoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ThumbnailsDataWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user photo
     * Returns a photo of the user with the ID specified in the request.
     * @param {String} userid The user ID.
     * @param {module:api/PeoplePhotosApi~getMemberPhotoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ThumbnailsDataWrapper}
     */
    getMemberPhoto(userid, callback) {
      let postBody = null;
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling getMemberPhoto");
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
      let returnType = ThumbnailsDataWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/{userid}/photo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMemberPhoto operation.
     * @callback module:api/PeoplePhotosApi~updateMemberPhotoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/ThumbnailsDataWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user photo
     * Updates a photo of the user with the ID specified in the request.
     * @param {String} userid The user ID.
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdatePhotoMemberRequest} [updatePhotoMemberRequest] The request parameters for updating a photo.
     * @param {module:api/PeoplePhotosApi~updateMemberPhotoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/ThumbnailsDataWrapper}
     */
    updateMemberPhoto(userid, opts, callback) {
      opts = opts || {};
      let postBody = opts['updatePhotoMemberRequest'];
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling updateMemberPhoto");
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
      let returnType = ThumbnailsDataWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/{userid}/photo', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadMemberPhoto operation.
     * @callback module:api/PeoplePhotosApi~uploadMemberPhotoCallback
     * @param {String} error Error message, if any.
     * @param {module:models/FileUploadResultWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a user photo
     * Uploads a photo of the user with the ID specified in the request.
     * @param {String} userid The user ID.
     * @param {Array.<module:models/KeyValuePairStringStringValues>} formCollection The image data.
     * @param {module:api/PeoplePhotosApi~uploadMemberPhotoCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/FileUploadResultWrapper}
     */
    uploadMemberPhoto(userid, formCollection, callback) {
      let postBody = null;
      // verify the required parameter 'userid' is set
      if (userid === undefined || userid === null) {
        throw new Error("Missing the required parameter 'userid' when calling uploadMemberPhoto");
      }
      // verify the required parameter 'formCollection' is set
      if (formCollection === undefined || formCollection === null) {
        throw new Error("Missing the required parameter 'formCollection' when calling uploadMemberPhoto");
      }

      let pathParams = {
        'userid': userid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'formCollection': this.apiClient.buildCollectionParam(formCollection, 'multi')
      };

      let authNames = ['Basic', 'OAuth2', 'ApiKeyBearer', 'asc_auth_key', 'Bearer', 'OpenId'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = FileUploadResultWrapper;
      return this.apiClient.callApi(
        '/api/2.0/people/{userid}/photo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
