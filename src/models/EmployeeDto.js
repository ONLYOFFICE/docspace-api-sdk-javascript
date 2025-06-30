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

/**
 * The EmployeeDto model module.
 * @module models/EmployeeDto
 * @version 3.2.0
 */
class EmployeeDto {
    /**
     * Constructs a new <code>EmployeeDto</code>.
     * The user parameters.
     * @alias module:models/EmployeeDto
     */
    constructor() { 
        
        EmployeeDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmployeeDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EmployeeDto} obj Optional instance to populate.
     * @return {module:models/EmployeeDto} The populated <code>EmployeeDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmployeeDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
            }
            if (data.hasOwnProperty('avatarOriginal')) {
                obj['avatarOriginal'] = ApiClient.convertToType(data['avatarOriginal'], 'String');
            }
            if (data.hasOwnProperty('avatarMax')) {
                obj['avatarMax'] = ApiClient.convertToType(data['avatarMax'], 'String');
            }
            if (data.hasOwnProperty('avatarMedium')) {
                obj['avatarMedium'] = ApiClient.convertToType(data['avatarMedium'], 'String');
            }
            if (data.hasOwnProperty('avatarSmall')) {
                obj['avatarSmall'] = ApiClient.convertToType(data['avatarSmall'], 'String');
            }
            if (data.hasOwnProperty('profileUrl')) {
                obj['profileUrl'] = ApiClient.convertToType(data['profileUrl'], 'String');
            }
            if (data.hasOwnProperty('hasAvatar')) {
                obj['hasAvatar'] = ApiClient.convertToType(data['hasAvatar'], 'Boolean');
            }
            if (data.hasOwnProperty('isAnonim')) {
                obj['isAnonim'] = ApiClient.convertToType(data['isAnonim'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmployeeDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmployeeDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
            throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['avatar'] && !(typeof data['avatar'] === 'string' || data['avatar'] instanceof String)) {
            throw new Error("Expected the field `avatar` to be a primitive type in the JSON string but got " + data['avatar']);
        }
        // ensure the json data is a string
        if (data['avatarOriginal'] && !(typeof data['avatarOriginal'] === 'string' || data['avatarOriginal'] instanceof String)) {
            throw new Error("Expected the field `avatarOriginal` to be a primitive type in the JSON string but got " + data['avatarOriginal']);
        }
        // ensure the json data is a string
        if (data['avatarMax'] && !(typeof data['avatarMax'] === 'string' || data['avatarMax'] instanceof String)) {
            throw new Error("Expected the field `avatarMax` to be a primitive type in the JSON string but got " + data['avatarMax']);
        }
        // ensure the json data is a string
        if (data['avatarMedium'] && !(typeof data['avatarMedium'] === 'string' || data['avatarMedium'] instanceof String)) {
            throw new Error("Expected the field `avatarMedium` to be a primitive type in the JSON string but got " + data['avatarMedium']);
        }
        // ensure the json data is a string
        if (data['avatarSmall'] && !(typeof data['avatarSmall'] === 'string' || data['avatarSmall'] instanceof String)) {
            throw new Error("Expected the field `avatarSmall` to be a primitive type in the JSON string but got " + data['avatarSmall']);
        }
        // ensure the json data is a string
        if (data['profileUrl'] && !(typeof data['profileUrl'] === 'string' || data['profileUrl'] instanceof String)) {
            throw new Error("Expected the field `profileUrl` to be a primitive type in the JSON string but got " + data['profileUrl']);
        }

        return true;
    }


}



/**
 * The user ID.
 * @member {String} id
 */
EmployeeDto.prototype['id'] = undefined;

/**
 * The user display name.
 * @member {String} displayName
 */
EmployeeDto.prototype['displayName'] = undefined;

/**
 * The user title.
 * @member {String} title
 */
EmployeeDto.prototype['title'] = undefined;

/**
 * The user avatar.
 * @member {String} avatar
 */
EmployeeDto.prototype['avatar'] = undefined;

/**
 * The user original size avatar.
 * @member {String} avatarOriginal
 */
EmployeeDto.prototype['avatarOriginal'] = undefined;

/**
 * The user maximum size avatar.
 * @member {String} avatarMax
 */
EmployeeDto.prototype['avatarMax'] = undefined;

/**
 * The user medium size avatar.
 * @member {String} avatarMedium
 */
EmployeeDto.prototype['avatarMedium'] = undefined;

/**
 * The user small size avatar.
 * @member {String} avatarSmall
 */
EmployeeDto.prototype['avatarSmall'] = undefined;

/**
 * The user profile URL.
 * @member {String} profileUrl
 */
EmployeeDto.prototype['profileUrl'] = undefined;

/**
 * Specifies if the user has an avatar or not.
 * @member {Boolean} hasAvatar
 */
EmployeeDto.prototype['hasAvatar'] = undefined;

/**
 * Specifies if the user is anonymous or not.
 * @member {Boolean} isAnonim
 */
EmployeeDto.prototype['isAnonim'] = undefined;






export default EmployeeDto;

