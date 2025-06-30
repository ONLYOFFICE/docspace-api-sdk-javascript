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
 * The AuthenticationTokenDto model module.
 * @module models/AuthenticationTokenDto
 * @version 3.2.0
 */
class AuthenticationTokenDto {
    /**
     * Constructs a new <code>AuthenticationTokenDto</code>.
     * The authentication token parameters.
     * @alias module:models/AuthenticationTokenDto
     */
    constructor() { 
        
        AuthenticationTokenDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthenticationTokenDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AuthenticationTokenDto} obj Optional instance to populate.
     * @return {module:models/AuthenticationTokenDto} The populated <code>AuthenticationTokenDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthenticationTokenDto();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('expires')) {
                obj['expires'] = ApiClient.convertToType(data['expires'], 'Date');
            }
            if (data.hasOwnProperty('sms')) {
                obj['sms'] = ApiClient.convertToType(data['sms'], 'Boolean');
            }
            if (data.hasOwnProperty('phoneNoise')) {
                obj['phoneNoise'] = ApiClient.convertToType(data['phoneNoise'], 'String');
            }
            if (data.hasOwnProperty('tfa')) {
                obj['tfa'] = ApiClient.convertToType(data['tfa'], 'Boolean');
            }
            if (data.hasOwnProperty('tfaKey')) {
                obj['tfaKey'] = ApiClient.convertToType(data['tfaKey'], 'String');
            }
            if (data.hasOwnProperty('confirmUrl')) {
                obj['confirmUrl'] = ApiClient.convertToType(data['confirmUrl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthenticationTokenDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthenticationTokenDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['phoneNoise'] && !(typeof data['phoneNoise'] === 'string' || data['phoneNoise'] instanceof String)) {
            throw new Error("Expected the field `phoneNoise` to be a primitive type in the JSON string but got " + data['phoneNoise']);
        }
        // ensure the json data is a string
        if (data['tfaKey'] && !(typeof data['tfaKey'] === 'string' || data['tfaKey'] instanceof String)) {
            throw new Error("Expected the field `tfaKey` to be a primitive type in the JSON string but got " + data['tfaKey']);
        }
        // ensure the json data is a string
        if (data['confirmUrl'] && !(typeof data['confirmUrl'] === 'string' || data['confirmUrl'] instanceof String)) {
            throw new Error("Expected the field `confirmUrl` to be a primitive type in the JSON string but got " + data['confirmUrl']);
        }

        return true;
    }


}



/**
 * The authentication token.
 * @member {String} token
 */
AuthenticationTokenDto.prototype['token'] = undefined;

/**
 * The token expiration time.
 * @member {Date} expires
 */
AuthenticationTokenDto.prototype['expires'] = undefined;

/**
 * Specifies if the authentication code is sent by SMS or not.
 * @member {Boolean} sms
 */
AuthenticationTokenDto.prototype['sms'] = undefined;

/**
 * The phone number.
 * @member {String} phoneNoise
 */
AuthenticationTokenDto.prototype['phoneNoise'] = undefined;

/**
 * Specifies if the two-factor application is used or not.
 * @member {Boolean} tfa
 */
AuthenticationTokenDto.prototype['tfa'] = undefined;

/**
 * The two-factor authentication key.
 * @member {String} tfaKey
 */
AuthenticationTokenDto.prototype['tfaKey'] = undefined;

/**
 * The confirmation email URL.
 * @member {String} confirmUrl
 */
AuthenticationTokenDto.prototype['confirmUrl'] = undefined;






export default AuthenticationTokenDto;

