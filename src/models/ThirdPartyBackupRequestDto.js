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
 * The ThirdPartyBackupRequestDto model module.
 * @module models/ThirdPartyBackupRequestDto
 * @version 3.2.0
 */
class ThirdPartyBackupRequestDto {
    /**
     * Constructs a new <code>ThirdPartyBackupRequestDto</code>.
     * The third-party backup request parameters.
     * @alias module:models/ThirdPartyBackupRequestDto
     */
    constructor() { 
        
        ThirdPartyBackupRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThirdPartyBackupRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ThirdPartyBackupRequestDto} obj Optional instance to populate.
     * @return {module:models/ThirdPartyBackupRequestDto} The populated <code>ThirdPartyBackupRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThirdPartyBackupRequestDto();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('customerTitle')) {
                obj['customerTitle'] = ApiClient.convertToType(data['customerTitle'], 'String');
            }
            if (data.hasOwnProperty('providerKey')) {
                obj['providerKey'] = ApiClient.convertToType(data['providerKey'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ThirdPartyBackupRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ThirdPartyBackupRequestDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['login'] && !(typeof data['login'] === 'string' || data['login'] instanceof String)) {
            throw new Error("Expected the field `login` to be a primitive type in the JSON string but got " + data['login']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['customerTitle'] && !(typeof data['customerTitle'] === 'string' || data['customerTitle'] instanceof String)) {
            throw new Error("Expected the field `customerTitle` to be a primitive type in the JSON string but got " + data['customerTitle']);
        }
        // ensure the json data is a string
        if (data['providerKey'] && !(typeof data['providerKey'] === 'string' || data['providerKey'] instanceof String)) {
            throw new Error("Expected the field `providerKey` to be a primitive type in the JSON string but got " + data['providerKey']);
        }

        return true;
    }


}



/**
 * The connection URL for the sharepoint.
 * @member {String} url
 */
ThirdPartyBackupRequestDto.prototype['url'] = undefined;

/**
 * The login.
 * @member {String} login
 */
ThirdPartyBackupRequestDto.prototype['login'] = undefined;

/**
 * The password.
 * @member {String} password
 */
ThirdPartyBackupRequestDto.prototype['password'] = undefined;

/**
 * The authentication token.
 * @member {String} token
 */
ThirdPartyBackupRequestDto.prototype['token'] = undefined;

/**
 * The customer title.
 * @member {String} customerTitle
 */
ThirdPartyBackupRequestDto.prototype['customerTitle'] = undefined;

/**
 * The provider key.
 * @member {String} providerKey
 */
ThirdPartyBackupRequestDto.prototype['providerKey'] = undefined;






export default ThirdPartyBackupRequestDto;

