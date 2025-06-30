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
import NotificationSettingsRequestsDto from '../models/NotificationSettingsRequestsDto';
import NotificationSettingsWrapper from '../models/NotificationSettingsWrapper';
import NotificationType from '../models/NotificationType';
import RoomsNotificationSettingsWrapper from '../models/RoomsNotificationSettingsWrapper';
import RoomsNotificationsSettingsRequestDto from '../models/RoomsNotificationsSettingsRequestDto';

/**
* SettingsNotifications service.
* @module api/SettingsNotificationsApi
* @version 3.2.0
*/
export default class SettingsNotificationsApi {

    /**
    * Constructs a new SettingsNotificationsApi. 
    * @alias module:api/SettingsNotificationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getNotificationSettings operation.
     * @callback module:api/SettingsNotificationsApi~getNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/NotificationSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check notification availability
     * Checks if the notification type specified in the request is enabled or not.
     * @param {module:models/NotificationType} type The type of notification to query, specified in the route.
     * @param {module:api/SettingsNotificationsApi~getNotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/NotificationSettingsWrapper}
     */
    getNotificationSettings(type, callback) {
      let postBody = null;
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getNotificationSettings");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NotificationSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/notification/{type}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRoomsNotificationSettings operation.
     * @callback module:api/SettingsNotificationsApi~getRoomsNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/RoomsNotificationSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get room notification settings
     * Returns a list of rooms with the disabled notifications.
     * @param {module:api/SettingsNotificationsApi~getRoomsNotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/RoomsNotificationSettingsWrapper}
     */
    getRoomsNotificationSettings(callback) {
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
      let returnType = RoomsNotificationSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/notification/rooms', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setNotificationSettings operation.
     * @callback module:api/SettingsNotificationsApi~setNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:models/NotificationSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable notifications
     * Enables the notification type specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/NotificationSettingsRequestsDto} [notificationSettingsRequestsDto] 
     * @param {module:api/SettingsNotificationsApi~setNotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/NotificationSettingsWrapper}
     */
    setNotificationSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['notificationSettingsRequestsDto'];

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
      let returnType = NotificationSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/notification', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setRoomsNotificationStatus operation.
     * @callback module:api/SettingsNotificationsApi~setRoomsNotificationStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:models/RoomsNotificationSettingsWrapper} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set room notification status
     * Sets a notification status for a room with the ID specified in the request.
     * @param {Object} opts Optional parameters
     * @param {module:models/RoomsNotificationsSettingsRequestDto} [roomsNotificationsSettingsRequestDto] 
     * @param {module:api/SettingsNotificationsApi~setRoomsNotificationStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * REST API Reference for {{operationId}} operation
     * @see {{vendorExtensions.x-seealsoUrl}}
     * data is of type: {@link module:models/RoomsNotificationSettingsWrapper}
     */
    setRoomsNotificationStatus(opts, callback) {
      opts = opts || {};
      let postBody = opts['roomsNotificationsSettingsRequestDto'];

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
      let returnType = RoomsNotificationSettingsWrapper;
      return this.apiClient.callApi(
        '/api/2.0/settings/notification/rooms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
