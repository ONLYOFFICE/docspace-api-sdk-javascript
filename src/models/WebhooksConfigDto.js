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
import EmployeeDto from './EmployeeDto';
import WebhookTrigger from './WebhookTrigger';

/**
 * The WebhooksConfigDto model module.
 * @module models/WebhooksConfigDto
 * @version 3.2.0
 */
class WebhooksConfigDto {
    /**
     * Constructs a new <code>WebhooksConfigDto</code>.
     * The webhook configuration parameters.
     * @alias module:models/WebhooksConfigDto
     */
    constructor() { 
        
        WebhooksConfigDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhooksConfigDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WebhooksConfigDto} obj Optional instance to populate.
     * @return {module:models/WebhooksConfigDto} The populated <code>WebhooksConfigDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhooksConfigDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('ssl')) {
                obj['ssl'] = ApiClient.convertToType(data['ssl'], 'Boolean');
            }
            if (data.hasOwnProperty('triggers')) {
                obj['triggers'] = WebhookTrigger.constructFromObject(data['triggers']);
            }
            if (data.hasOwnProperty('targetId')) {
                obj['targetId'] = ApiClient.convertToType(data['targetId'], 'String');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = EmployeeDto.constructFromObject(data['createdBy']);
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = EmployeeDto.constructFromObject(data['modifiedBy']);
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
            }
            if (data.hasOwnProperty('lastFailureOn')) {
                obj['lastFailureOn'] = ApiClient.convertToType(data['lastFailureOn'], 'Date');
            }
            if (data.hasOwnProperty('lastFailureContent')) {
                obj['lastFailureContent'] = ApiClient.convertToType(data['lastFailureContent'], 'String');
            }
            if (data.hasOwnProperty('lastSuccessOn')) {
                obj['lastSuccessOn'] = ApiClient.convertToType(data['lastSuccessOn'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhooksConfigDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhooksConfigDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['uri'] && !(typeof data['uri'] === 'string' || data['uri'] instanceof String)) {
            throw new Error("Expected the field `uri` to be a primitive type in the JSON string but got " + data['uri']);
        }
        // ensure the json data is a string
        if (data['targetId'] && !(typeof data['targetId'] === 'string' || data['targetId'] instanceof String)) {
            throw new Error("Expected the field `targetId` to be a primitive type in the JSON string but got " + data['targetId']);
        }
        // validate the optional field `createdBy`
        if (data['createdBy']) { // data not null
          EmployeeDto.validateJSON(data['createdBy']);
        }
        // validate the optional field `modifiedBy`
        if (data['modifiedBy']) { // data not null
          EmployeeDto.validateJSON(data['modifiedBy']);
        }
        // ensure the json data is a string
        if (data['lastFailureContent'] && !(typeof data['lastFailureContent'] === 'string' || data['lastFailureContent'] instanceof String)) {
            throw new Error("Expected the field `lastFailureContent` to be a primitive type in the JSON string but got " + data['lastFailureContent']);
        }

        return true;
    }


}



/**
 * The webhook ID.
 * @member {Number} id
 */
WebhooksConfigDto.prototype['id'] = undefined;

/**
 * The webhook name.
 * @member {String} name
 */
WebhooksConfigDto.prototype['name'] = undefined;

/**
 * The webhook URI.
 * @member {String} uri
 */
WebhooksConfigDto.prototype['uri'] = undefined;

/**
 * Specifies if the webhooks are enabled or not.
 * @member {Boolean} enabled
 */
WebhooksConfigDto.prototype['enabled'] = undefined;

/**
 * The webhook SSL verification (enabled or not).
 * @member {Boolean} ssl
 */
WebhooksConfigDto.prototype['ssl'] = undefined;

/**
 * @member {module:models/WebhookTrigger} triggers
 */
WebhooksConfigDto.prototype['triggers'] = undefined;

/**
 * The webhook target ID.
 * @member {String} targetId
 */
WebhooksConfigDto.prototype['targetId'] = undefined;

/**
 * @member {module:models/EmployeeDto} createdBy
 */
WebhooksConfigDto.prototype['createdBy'] = undefined;

/**
 * The date and time when the webhook was created.
 * @member {Date} createdOn
 */
WebhooksConfigDto.prototype['createdOn'] = undefined;

/**
 * @member {module:models/EmployeeDto} modifiedBy
 */
WebhooksConfigDto.prototype['modifiedBy'] = undefined;

/**
 * The date and time when the webhook was modified.
 * @member {Date} modifiedOn
 */
WebhooksConfigDto.prototype['modifiedOn'] = undefined;

/**
 * The date and time of the webhook last failure.
 * @member {Date} lastFailureOn
 */
WebhooksConfigDto.prototype['lastFailureOn'] = undefined;

/**
 * The webhook last failure content.
 * @member {String} lastFailureContent
 */
WebhooksConfigDto.prototype['lastFailureContent'] = undefined;

/**
 * The date and time of the webhook last success.
 * @member {Date} lastSuccessOn
 */
WebhooksConfigDto.prototype['lastSuccessOn'] = undefined;






export default WebhooksConfigDto;

