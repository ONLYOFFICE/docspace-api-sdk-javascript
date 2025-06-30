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
import EmployeeFullDto from './EmployeeFullDto';

/**
 * The GroupDto model module.
 * @module models/GroupDto
 * @version 3.2.0
 */
class GroupDto {
    /**
     * Constructs a new <code>GroupDto</code>.
     * The group parameters.
     * @alias module:models/GroupDto
     */
    constructor() { 
        
        GroupDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/GroupDto} obj Optional instance to populate.
     * @return {module:models/GroupDto} The populated <code>GroupDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isLDAP')) {
                obj['isLDAP'] = ApiClient.convertToType(data['isLDAP'], 'Boolean');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = EmployeeFullDto.constructFromObject(data['manager']);
            }
            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], [EmployeeFullDto]);
            }
            if (data.hasOwnProperty('shared')) {
                obj['shared'] = ApiClient.convertToType(data['shared'], 'Boolean');
            }
            if (data.hasOwnProperty('membersCount')) {
                obj['membersCount'] = ApiClient.convertToType(data['membersCount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GroupDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GroupDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['parent'] && !(typeof data['parent'] === 'string' || data['parent'] instanceof String)) {
            throw new Error("Expected the field `parent` to be a primitive type in the JSON string but got " + data['parent']);
        }
        // ensure the json data is a string
        if (data['category'] && !(typeof data['category'] === 'string' || data['category'] instanceof String)) {
            throw new Error("Expected the field `category` to be a primitive type in the JSON string but got " + data['category']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `manager`
        if (data['manager']) { // data not null
          EmployeeFullDto.validateJSON(data['manager']);
        }
        if (data['members']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['members'])) {
                throw new Error("Expected the field `members` to be an array in the JSON data but got " + data['members']);
            }
            // validate the optional field `members` (array)
            for (const item of data['members']) {
                EmployeeFullDto.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The group name.
 * @member {String} name
 */
GroupDto.prototype['name'] = undefined;

/**
 * The parent group ID.
 * @member {String} parent
 */
GroupDto.prototype['parent'] = undefined;

/**
 * The group category ID.
 * @member {String} category
 */
GroupDto.prototype['category'] = undefined;

/**
 * The group ID.
 * @member {String} id
 */
GroupDto.prototype['id'] = undefined;

/**
 * Specifies if the LDAP settings are enabled for the group or not.
 * @member {Boolean} isLDAP
 */
GroupDto.prototype['isLDAP'] = undefined;

/**
 * @member {module:models/EmployeeFullDto} manager
 */
GroupDto.prototype['manager'] = undefined;

/**
 * The list of group members.
 * @member {Array.<module:models/EmployeeFullDto>} members
 */
GroupDto.prototype['members'] = undefined;

/**
 * Specifies whether the group can be shared or not.
 * @member {Boolean} shared
 */
GroupDto.prototype['shared'] = undefined;

/**
 * The number of group members.
 * @member {Number} membersCount
 */
GroupDto.prototype['membersCount'] = undefined;






export default GroupDto;

