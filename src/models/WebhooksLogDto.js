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
import ApiClient from '../ApiClient';
import WebhookTrigger from './WebhookTrigger';

/**
 * The WebhooksLogDto model module.
 * @module models/WebhooksLogDto
 * @version 3.2.0
 */
class WebhooksLogDto {
    /**
     * Constructs a new <code>WebhooksLogDto</code>.
     * The webhook log parameters.
     * @alias module:models/WebhooksLogDto
     */
    constructor() { 
        
        WebhooksLogDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhooksLogDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WebhooksLogDto} obj Optional instance to populate.
     * @return {module:models/WebhooksLogDto} The populated <code>WebhooksLogDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhooksLogDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('configName')) {
                obj['configName'] = ApiClient.convertToType(data['configName'], 'String');
            }
            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = WebhookTrigger.constructFromObject(data['trigger']);
            }
            if (data.hasOwnProperty('creationTime')) {
                obj['creationTime'] = ApiClient.convertToType(data['creationTime'], 'Date');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('route')) {
                obj['route'] = ApiClient.convertToType(data['route'], 'String');
            }
            if (data.hasOwnProperty('requestHeaders')) {
                obj['requestHeaders'] = ApiClient.convertToType(data['requestHeaders'], 'String');
            }
            if (data.hasOwnProperty('requestPayload')) {
                obj['requestPayload'] = ApiClient.convertToType(data['requestPayload'], 'String');
            }
            if (data.hasOwnProperty('responseHeaders')) {
                obj['responseHeaders'] = ApiClient.convertToType(data['responseHeaders'], 'String');
            }
            if (data.hasOwnProperty('responsePayload')) {
                obj['responsePayload'] = ApiClient.convertToType(data['responsePayload'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('delivery')) {
                obj['delivery'] = ApiClient.convertToType(data['delivery'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhooksLogDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhooksLogDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['configName'] && !(typeof data['configName'] === 'string' || data['configName'] instanceof String)) {
            throw new Error("Expected the field `configName` to be a primitive type in the JSON string but got " + data['configName']);
        }
        // ensure the json data is a string
        if (data['method'] && !(typeof data['method'] === 'string' || data['method'] instanceof String)) {
            throw new Error("Expected the field `method` to be a primitive type in the JSON string but got " + data['method']);
        }
        // ensure the json data is a string
        if (data['route'] && !(typeof data['route'] === 'string' || data['route'] instanceof String)) {
            throw new Error("Expected the field `route` to be a primitive type in the JSON string but got " + data['route']);
        }
        // ensure the json data is a string
        if (data['requestHeaders'] && !(typeof data['requestHeaders'] === 'string' || data['requestHeaders'] instanceof String)) {
            throw new Error("Expected the field `requestHeaders` to be a primitive type in the JSON string but got " + data['requestHeaders']);
        }
        // ensure the json data is a string
        if (data['requestPayload'] && !(typeof data['requestPayload'] === 'string' || data['requestPayload'] instanceof String)) {
            throw new Error("Expected the field `requestPayload` to be a primitive type in the JSON string but got " + data['requestPayload']);
        }
        // ensure the json data is a string
        if (data['responseHeaders'] && !(typeof data['responseHeaders'] === 'string' || data['responseHeaders'] instanceof String)) {
            throw new Error("Expected the field `responseHeaders` to be a primitive type in the JSON string but got " + data['responseHeaders']);
        }
        // ensure the json data is a string
        if (data['responsePayload'] && !(typeof data['responsePayload'] === 'string' || data['responsePayload'] instanceof String)) {
            throw new Error("Expected the field `responsePayload` to be a primitive type in the JSON string but got " + data['responsePayload']);
        }

        return true;
    }


}



/**
 * The webhook log ID.
 * @member {Number} id
 */
WebhooksLogDto.prototype['id'] = undefined;

/**
 * The webhook configuration name.
 * @member {String} configName
 */
WebhooksLogDto.prototype['configName'] = undefined;

/**
 * @member {module:models/WebhookTrigger} trigger
 */
WebhooksLogDto.prototype['trigger'] = undefined;

/**
 * The webhook creation time.
 * @member {Date} creationTime
 */
WebhooksLogDto.prototype['creationTime'] = undefined;

/**
 * The webhook method.
 * @member {String} method
 */
WebhooksLogDto.prototype['method'] = undefined;

/**
 * The webhook route.
 * @member {String} route
 */
WebhooksLogDto.prototype['route'] = undefined;

/**
 * The webhook request headers.
 * @member {String} requestHeaders
 */
WebhooksLogDto.prototype['requestHeaders'] = undefined;

/**
 * The webhook request payload.
 * @member {String} requestPayload
 */
WebhooksLogDto.prototype['requestPayload'] = undefined;

/**
 * The webhook response headers.
 * @member {String} responseHeaders
 */
WebhooksLogDto.prototype['responseHeaders'] = undefined;

/**
 * The webhook response payload.
 * @member {String} responsePayload
 */
WebhooksLogDto.prototype['responsePayload'] = undefined;

/**
 * The webhook status.
 * @member {Number} status
 */
WebhooksLogDto.prototype['status'] = undefined;

/**
 * The webhook delivery time.
 * @member {Date} delivery
 */
WebhooksLogDto.prototype['delivery'] = undefined;






export default WebhooksLogDto;

