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
import ConfirmType from './ConfirmType';
import EmployeeType from './EmployeeType';

/**
 * The EmailValidationKeyModel model module.
 * @module models/EmailValidationKeyModel
 * @version 3.2.0
 */
class EmailValidationKeyModel {
    /**
     * Constructs a new <code>EmailValidationKeyModel</code>.
     * The confirmation email parameters.
     * @alias module:models/EmailValidationKeyModel
     */
    constructor() { 
        
        EmailValidationKeyModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailValidationKeyModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EmailValidationKeyModel} obj Optional instance to populate.
     * @return {module:models/EmailValidationKeyModel} The populated <code>EmailValidationKeyModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailValidationKeyModel();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('emplType')) {
                obj['emplType'] = EmployeeType.constructFromObject(data['emplType']);
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('uiD')) {
                obj['uiD'] = ApiClient.convertToType(data['uiD'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ConfirmType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('first')) {
                obj['first'] = ApiClient.convertToType(data['first'], 'String');
            }
            if (data.hasOwnProperty('roomId')) {
                obj['roomId'] = ApiClient.convertToType(data['roomId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailValidationKeyModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailValidationKeyModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['uiD'] && !(typeof data['uiD'] === 'string' || data['uiD'] instanceof String)) {
            throw new Error("Expected the field `uiD` to be a primitive type in the JSON string but got " + data['uiD']);
        }
        // ensure the json data is a string
        if (data['first'] && !(typeof data['first'] === 'string' || data['first'] instanceof String)) {
            throw new Error("Expected the field `first` to be a primitive type in the JSON string but got " + data['first']);
        }
        // ensure the json data is a string
        if (data['roomId'] && !(typeof data['roomId'] === 'string' || data['roomId'] instanceof String)) {
            throw new Error("Expected the field `roomId` to be a primitive type in the JSON string but got " + data['roomId']);
        }

        return true;
    }


}



/**
 * The email validation key.
 * @member {String} key
 */
EmailValidationKeyModel.prototype['key'] = undefined;

/**
 * @member {module:models/EmployeeType} emplType
 */
EmailValidationKeyModel.prototype['emplType'] = undefined;

/**
 * The email address.
 * @member {String} email
 */
EmailValidationKeyModel.prototype['email'] = undefined;

/**
 * The user ID.
 * @member {String} uiD
 */
EmailValidationKeyModel.prototype['uiD'] = undefined;

/**
 * @member {module:models/ConfirmType} type
 */
EmailValidationKeyModel.prototype['type'] = undefined;

/**
 * Specifies whether it is the first time account access or not.
 * @member {String} first
 */
EmailValidationKeyModel.prototype['first'] = undefined;

/**
 * The room ID.
 * @member {String} roomId
 */
EmailValidationKeyModel.prototype['roomId'] = undefined;






export default EmailValidationKeyModel;

