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
 * The PasswordSettingsDto model module.
 * @module models/PasswordSettingsDto
 * @version 3.2.0
 */
class PasswordSettingsDto {
    /**
     * Constructs a new <code>PasswordSettingsDto</code>.
     * The password settings parameters.
     * @alias module:models/PasswordSettingsDto
     */
    constructor() { 
        
        PasswordSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PasswordSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PasswordSettingsDto} obj Optional instance to populate.
     * @return {module:models/PasswordSettingsDto} The populated <code>PasswordSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PasswordSettingsDto();

            if (data.hasOwnProperty('minLength')) {
                obj['minLength'] = ApiClient.convertToType(data['minLength'], 'Number');
            }
            if (data.hasOwnProperty('upperCase')) {
                obj['upperCase'] = ApiClient.convertToType(data['upperCase'], 'Boolean');
            }
            if (data.hasOwnProperty('digits')) {
                obj['digits'] = ApiClient.convertToType(data['digits'], 'Boolean');
            }
            if (data.hasOwnProperty('specSymbols')) {
                obj['specSymbols'] = ApiClient.convertToType(data['specSymbols'], 'Boolean');
            }
            if (data.hasOwnProperty('allowedCharactersRegexStr')) {
                obj['allowedCharactersRegexStr'] = ApiClient.convertToType(data['allowedCharactersRegexStr'], 'String');
            }
            if (data.hasOwnProperty('digitsRegexStr')) {
                obj['digitsRegexStr'] = ApiClient.convertToType(data['digitsRegexStr'], 'String');
            }
            if (data.hasOwnProperty('upperCaseRegexStr')) {
                obj['upperCaseRegexStr'] = ApiClient.convertToType(data['upperCaseRegexStr'], 'String');
            }
            if (data.hasOwnProperty('specSymbolsRegexStr')) {
                obj['specSymbolsRegexStr'] = ApiClient.convertToType(data['specSymbolsRegexStr'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PasswordSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PasswordSettingsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['allowedCharactersRegexStr'] && !(typeof data['allowedCharactersRegexStr'] === 'string' || data['allowedCharactersRegexStr'] instanceof String)) {
            throw new Error("Expected the field `allowedCharactersRegexStr` to be a primitive type in the JSON string but got " + data['allowedCharactersRegexStr']);
        }
        // ensure the json data is a string
        if (data['digitsRegexStr'] && !(typeof data['digitsRegexStr'] === 'string' || data['digitsRegexStr'] instanceof String)) {
            throw new Error("Expected the field `digitsRegexStr` to be a primitive type in the JSON string but got " + data['digitsRegexStr']);
        }
        // ensure the json data is a string
        if (data['upperCaseRegexStr'] && !(typeof data['upperCaseRegexStr'] === 'string' || data['upperCaseRegexStr'] instanceof String)) {
            throw new Error("Expected the field `upperCaseRegexStr` to be a primitive type in the JSON string but got " + data['upperCaseRegexStr']);
        }
        // ensure the json data is a string
        if (data['specSymbolsRegexStr'] && !(typeof data['specSymbolsRegexStr'] === 'string' || data['specSymbolsRegexStr'] instanceof String)) {
            throw new Error("Expected the field `specSymbolsRegexStr` to be a primitive type in the JSON string but got " + data['specSymbolsRegexStr']);
        }

        return true;
    }


}



/**
 * The minimum number of characters required for valid passwords.
 * @member {Number} minLength
 */
PasswordSettingsDto.prototype['minLength'] = undefined;

/**
 * Specifies whether the password should contain the uppercase letters or not.
 * @member {Boolean} upperCase
 */
PasswordSettingsDto.prototype['upperCase'] = undefined;

/**
 * Specifies whether the password should contain the digits or not.
 * @member {Boolean} digits
 */
PasswordSettingsDto.prototype['digits'] = undefined;

/**
 * Specifies whether the password should contain the special symbols or not.
 * @member {Boolean} specSymbols
 */
PasswordSettingsDto.prototype['specSymbols'] = undefined;

/**
 * The allowed password characters in the regex string format.
 * @member {String} allowedCharactersRegexStr
 */
PasswordSettingsDto.prototype['allowedCharactersRegexStr'] = undefined;

/**
 * The password digits in the regex string format.
 * @member {String} digitsRegexStr
 */
PasswordSettingsDto.prototype['digitsRegexStr'] = undefined;

/**
 * The password uppercase letters in the regex string format.
 * @member {String} upperCaseRegexStr
 */
PasswordSettingsDto.prototype['upperCaseRegexStr'] = undefined;

/**
 * The passaword special symbols in the regex string format.
 * @member {String} specSymbolsRegexStr
 */
PasswordSettingsDto.prototype['specSymbolsRegexStr'] = undefined;






export default PasswordSettingsDto;

