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
import ApiDateTime from './ApiDateTime';
import EmployeeDto from './EmployeeDto';

/**
 * The ApiKeyResponseDto model module.
 * @module models/ApiKeyResponseDto
 * @version 3.2.0
 */
class ApiKeyResponseDto {
    /**
     * Constructs a new <code>ApiKeyResponseDto</code>.
     * The response data for the API key operations.
     * @alias module:models/ApiKeyResponseDto
     */
    constructor() { 
        
        ApiKeyResponseDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiKeyResponseDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ApiKeyResponseDto} obj Optional instance to populate.
     * @return {module:models/ApiKeyResponseDto} The populated <code>ApiKeyResponseDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiKeyResponseDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('keyPostfix')) {
                obj['keyPostfix'] = ApiClient.convertToType(data['keyPostfix'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
            }
            if (data.hasOwnProperty('lastUsed')) {
                obj['lastUsed'] = ApiDateTime.constructFromObject(data['lastUsed']);
            }
            if (data.hasOwnProperty('createOn')) {
                obj['createOn'] = ApiDateTime.constructFromObject(data['createOn']);
            }
            if (data.hasOwnProperty('createBy')) {
                obj['createBy'] = EmployeeDto.constructFromObject(data['createBy']);
            }
            if (data.hasOwnProperty('expiresAt')) {
                obj['expiresAt'] = ApiDateTime.constructFromObject(data['expiresAt']);
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiKeyResponseDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiKeyResponseDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['keyPostfix'] && !(typeof data['keyPostfix'] === 'string' || data['keyPostfix'] instanceof String)) {
            throw new Error("Expected the field `keyPostfix` to be a primitive type in the JSON string but got " + data['keyPostfix']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['permissions'])) {
            throw new Error("Expected the field `permissions` to be an array in the JSON data but got " + data['permissions']);
        }
        // validate the optional field `lastUsed`
        if (data['lastUsed']) { // data not null
          ApiDateTime.validateJSON(data['lastUsed']);
        }
        // validate the optional field `createOn`
        if (data['createOn']) { // data not null
          ApiDateTime.validateJSON(data['createOn']);
        }
        // validate the optional field `createBy`
        if (data['createBy']) { // data not null
          EmployeeDto.validateJSON(data['createBy']);
        }
        // validate the optional field `expiresAt`
        if (data['expiresAt']) { // data not null
          ApiDateTime.validateJSON(data['expiresAt']);
        }

        return true;
    }


}



/**
 * The unique identifier of the API key.
 * @member {String} id
 */
ApiKeyResponseDto.prototype['id'] = undefined;

/**
 * The API key name.
 * @member {String} name
 */
ApiKeyResponseDto.prototype['name'] = undefined;

/**
 * The full API key value (only returned when creating a new key).
 * @member {String} key
 */
ApiKeyResponseDto.prototype['key'] = undefined;

/**
 * The API key postfix (used for identification).
 * @member {String} keyPostfix
 */
ApiKeyResponseDto.prototype['keyPostfix'] = undefined;

/**
 * The list of permissions granted to the API key.
 * @member {Array.<String>} permissions
 */
ApiKeyResponseDto.prototype['permissions'] = undefined;

/**
 * @member {module:models/ApiDateTime} lastUsed
 */
ApiKeyResponseDto.prototype['lastUsed'] = undefined;

/**
 * @member {module:models/ApiDateTime} createOn
 */
ApiKeyResponseDto.prototype['createOn'] = undefined;

/**
 * @member {module:models/EmployeeDto} createBy
 */
ApiKeyResponseDto.prototype['createBy'] = undefined;

/**
 * @member {module:models/ApiDateTime} expiresAt
 */
ApiKeyResponseDto.prototype['expiresAt'] = undefined;

/**
 * Indicates whether the API key is active or not.
 * @member {Boolean} isActive
 */
ApiKeyResponseDto.prototype['isActive'] = undefined;






export default ApiKeyResponseDto;

