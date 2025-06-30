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
 * The CreateWebhooksConfigRequestsDto model module.
 * @module models/CreateWebhooksConfigRequestsDto
 * @version 3.2.0
 */
class CreateWebhooksConfigRequestsDto {
    /**
     * Constructs a new <code>CreateWebhooksConfigRequestsDto</code>.
     * The request parameters for creating the webhook configuration.
     * @alias module:models/CreateWebhooksConfigRequestsDto
     * @param name {String} The human-readable name of the webhook configuration.
     * @param uri {String} The destination URL where the webhook events will be sent.
     */
    constructor(name, uri) { 
        
        CreateWebhooksConfigRequestsDto.initialize(this, name, uri);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, uri) { 
        obj['name'] = name;
        obj['uri'] = uri;
    }

    /**
     * Constructs a <code>CreateWebhooksConfigRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateWebhooksConfigRequestsDto} obj Optional instance to populate.
     * @return {module:models/CreateWebhooksConfigRequestsDto} The populated <code>CreateWebhooksConfigRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateWebhooksConfigRequestsDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('secretKey')) {
                obj['secretKey'] = ApiClient.convertToType(data['secretKey'], 'String');
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateWebhooksConfigRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateWebhooksConfigRequestsDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateWebhooksConfigRequestsDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['uri'] && !(typeof data['uri'] === 'string' || data['uri'] instanceof String)) {
            throw new Error("Expected the field `uri` to be a primitive type in the JSON string but got " + data['uri']);
        }
        // ensure the json data is a string
        if (data['secretKey'] && !(typeof data['secretKey'] === 'string' || data['secretKey'] instanceof String)) {
            throw new Error("Expected the field `secretKey` to be a primitive type in the JSON string but got " + data['secretKey']);
        }
        // ensure the json data is a string
        if (data['targetId'] && !(typeof data['targetId'] === 'string' || data['targetId'] instanceof String)) {
            throw new Error("Expected the field `targetId` to be a primitive type in the JSON string but got " + data['targetId']);
        }

        return true;
    }


}

CreateWebhooksConfigRequestsDto.RequiredProperties = ["name", "uri"];

/**
 * The human-readable name of the webhook configuration.
 * @member {String} name
 */
CreateWebhooksConfigRequestsDto.prototype['name'] = undefined;

/**
 * The destination URL where the webhook events will be sent.
 * @member {String} uri
 */
CreateWebhooksConfigRequestsDto.prototype['uri'] = undefined;

/**
 * The webhook secret key used to sign the webhook payloads for the security verification.
 * @member {String} secretKey
 */
CreateWebhooksConfigRequestsDto.prototype['secretKey'] = undefined;

/**
 * Specifies whether the webhook configuration is active or not.
 * @member {Boolean} enabled
 */
CreateWebhooksConfigRequestsDto.prototype['enabled'] = undefined;

/**
 * Specifies whether the SSL certificate verification is required or not.
 * @member {Boolean} ssl
 */
CreateWebhooksConfigRequestsDto.prototype['ssl'] = undefined;

/**
 * @member {module:models/WebhookTrigger} triggers
 */
CreateWebhooksConfigRequestsDto.prototype['triggers'] = undefined;

/**
 * Target ID
 * @member {String} targetId
 */
CreateWebhooksConfigRequestsDto.prototype['targetId'] = undefined;






export default CreateWebhooksConfigRequestsDto;

