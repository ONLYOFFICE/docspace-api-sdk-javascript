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
import EmployeeType from './EmployeeType';

/**
 * The SignupAccountRequestDto model module.
 * @module models/SignupAccountRequestDto
 * @version 3.2.0
 */
class SignupAccountRequestDto {
    /**
     * Constructs a new <code>SignupAccountRequestDto</code>.
     * The request parameters for creating a third-party account.
     * @alias module:models/SignupAccountRequestDto
     */
    constructor() { 
        
        SignupAccountRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SignupAccountRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SignupAccountRequestDto} obj Optional instance to populate.
     * @return {module:models/SignupAccountRequestDto} The populated <code>SignupAccountRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignupAccountRequestDto();

            if (data.hasOwnProperty('employeeType')) {
                obj['employeeType'] = EmployeeType.constructFromObject(data['employeeType']);
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('passwordHash')) {
                obj['passwordHash'] = ApiClient.convertToType(data['passwordHash'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('culture')) {
                obj['culture'] = ApiClient.convertToType(data['culture'], 'String');
            }
            if (data.hasOwnProperty('serializedProfile')) {
                obj['serializedProfile'] = ApiClient.convertToType(data['serializedProfile'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SignupAccountRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignupAccountRequestDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['firstName'] && !(typeof data['firstName'] === 'string' || data['firstName'] instanceof String)) {
            throw new Error("Expected the field `firstName` to be a primitive type in the JSON string but got " + data['firstName']);
        }
        // ensure the json data is a string
        if (data['lastName'] && !(typeof data['lastName'] === 'string' || data['lastName'] instanceof String)) {
            throw new Error("Expected the field `lastName` to be a primitive type in the JSON string but got " + data['lastName']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['passwordHash'] && !(typeof data['passwordHash'] === 'string' || data['passwordHash'] instanceof String)) {
            throw new Error("Expected the field `passwordHash` to be a primitive type in the JSON string but got " + data['passwordHash']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['culture'] && !(typeof data['culture'] === 'string' || data['culture'] instanceof String)) {
            throw new Error("Expected the field `culture` to be a primitive type in the JSON string but got " + data['culture']);
        }
        // ensure the json data is a string
        if (data['serializedProfile'] && !(typeof data['serializedProfile'] === 'string' || data['serializedProfile'] instanceof String)) {
            throw new Error("Expected the field `serializedProfile` to be a primitive type in the JSON string but got " + data['serializedProfile']);
        }

        return true;
    }


}



/**
 * @member {module:models/EmployeeType} employeeType
 */
SignupAccountRequestDto.prototype['employeeType'] = undefined;

/**
 * The user first name.
 * @member {String} firstName
 */
SignupAccountRequestDto.prototype['firstName'] = undefined;

/**
 * The user last name.
 * @member {String} lastName
 */
SignupAccountRequestDto.prototype['lastName'] = undefined;

/**
 * The user email address.
 * @member {String} email
 */
SignupAccountRequestDto.prototype['email'] = undefined;

/**
 * The user password hash.
 * @member {String} passwordHash
 */
SignupAccountRequestDto.prototype['passwordHash'] = undefined;

/**
 * The user link key.
 * @member {String} key
 */
SignupAccountRequestDto.prototype['key'] = undefined;

/**
 * The user culture code.
 * @member {String} culture
 */
SignupAccountRequestDto.prototype['culture'] = undefined;

/**
 * Third-party profile in the serialized format
 * @member {String} serializedProfile
 */
SignupAccountRequestDto.prototype['serializedProfile'] = undefined;






export default SignupAccountRequestDto;

