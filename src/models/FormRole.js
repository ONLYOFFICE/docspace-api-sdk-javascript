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
 * The FormRole model module.
 * @module models/FormRole
 * @version 3.2.0
 */
class FormRole {
    /**
     * Constructs a new <code>FormRole</code>.
     * The form role.
     * @alias module:models/FormRole
     */
    constructor() { 
        
        FormRole.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FormRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FormRole} obj Optional instance to populate.
     * @return {module:models/FormRole} The populated <code>FormRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormRole();

            if (data.hasOwnProperty('roomId')) {
                obj['roomId'] = ApiClient.convertToType(data['roomId'], 'Number');
            }
            if (data.hasOwnProperty('roleName')) {
                obj['roleName'] = ApiClient.convertToType(data['roleName'], 'String');
            }
            if (data.hasOwnProperty('roleColor')) {
                obj['roleColor'] = ApiClient.convertToType(data['roleColor'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('sequence')) {
                obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
            }
            if (data.hasOwnProperty('submitted')) {
                obj['submitted'] = ApiClient.convertToType(data['submitted'], 'Boolean');
            }
            if (data.hasOwnProperty('openedAt')) {
                obj['openedAt'] = ApiClient.convertToType(data['openedAt'], 'Date');
            }
            if (data.hasOwnProperty('submissionDate')) {
                obj['submissionDate'] = ApiClient.convertToType(data['submissionDate'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FormRole</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FormRole</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['roleName'] && !(typeof data['roleName'] === 'string' || data['roleName'] instanceof String)) {
            throw new Error("Expected the field `roleName` to be a primitive type in the JSON string but got " + data['roleName']);
        }
        // ensure the json data is a string
        if (data['roleColor'] && !(typeof data['roleColor'] === 'string' || data['roleColor'] instanceof String)) {
            throw new Error("Expected the field `roleColor` to be a primitive type in the JSON string but got " + data['roleColor']);
        }
        // ensure the json data is a string
        if (data['userId'] && !(typeof data['userId'] === 'string' || data['userId'] instanceof String)) {
            throw new Error("Expected the field `userId` to be a primitive type in the JSON string but got " + data['userId']);
        }

        return true;
    }


}



/**
 * The room ID.
 * @member {Number} roomId
 */
FormRole.prototype['roomId'] = undefined;

/**
 * The role name.
 * @member {String} roleName
 */
FormRole.prototype['roleName'] = undefined;

/**
 * The role color.
 * @member {String} roleColor
 */
FormRole.prototype['roleColor'] = undefined;

/**
 * The user ID.
 * @member {String} userId
 */
FormRole.prototype['userId'] = undefined;

/**
 * The role sequence.
 * @member {Number} sequence
 */
FormRole.prototype['sequence'] = undefined;

/**
 * Specifies if the role was submitted or not.
 * @member {Boolean} submitted
 */
FormRole.prototype['submitted'] = undefined;

/**
 * The date and time when the role was opened.
 * @member {Date} openedAt
 */
FormRole.prototype['openedAt'] = undefined;

/**
 * The date and time when the role was submitted.
 * @member {Date} submissionDate
 */
FormRole.prototype['submissionDate'] = undefined;






export default FormRole;

