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
 * The UpdateGroupRequest model module.
 * @module models/UpdateGroupRequest
 * @version 3.2.0
 */
class UpdateGroupRequest {
    /**
     * Constructs a new <code>UpdateGroupRequest</code>.
     * The request for updating a group.
     * @alias module:models/UpdateGroupRequest
     */
    constructor() { 
        
        UpdateGroupRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateGroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateGroupRequest} obj Optional instance to populate.
     * @return {module:models/UpdateGroupRequest} The populated <code>UpdateGroupRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateGroupRequest();

            if (data.hasOwnProperty('membersToAdd')) {
                obj['membersToAdd'] = ApiClient.convertToType(data['membersToAdd'], ['String']);
            }
            if (data.hasOwnProperty('membersToRemove')) {
                obj['membersToRemove'] = ApiClient.convertToType(data['membersToRemove'], ['String']);
            }
            if (data.hasOwnProperty('groupManager')) {
                obj['groupManager'] = ApiClient.convertToType(data['groupManager'], 'String');
            }
            if (data.hasOwnProperty('groupName')) {
                obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateGroupRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateGroupRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['membersToAdd'])) {
            throw new Error("Expected the field `membersToAdd` to be an array in the JSON data but got " + data['membersToAdd']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['membersToRemove'])) {
            throw new Error("Expected the field `membersToRemove` to be an array in the JSON data but got " + data['membersToRemove']);
        }
        // ensure the json data is a string
        if (data['groupManager'] && !(typeof data['groupManager'] === 'string' || data['groupManager'] instanceof String)) {
            throw new Error("Expected the field `groupManager` to be a primitive type in the JSON string but got " + data['groupManager']);
        }
        // ensure the json data is a string
        if (data['groupName'] && !(typeof data['groupName'] === 'string' || data['groupName'] instanceof String)) {
            throw new Error("Expected the field `groupName` to be a primitive type in the JSON string but got " + data['groupName']);
        }

        return true;
    }


}



/**
 * The list of user IDs to add to the group.
 * @member {Array.<String>} membersToAdd
 */
UpdateGroupRequest.prototype['membersToAdd'] = undefined;

/**
 * The list of user IDs to remove from the group.
 * @member {Array.<String>} membersToRemove
 */
UpdateGroupRequest.prototype['membersToRemove'] = undefined;

/**
 * The group manager ID.
 * @member {String} groupManager
 */
UpdateGroupRequest.prototype['groupManager'] = undefined;

/**
 * The group name.
 * @member {String} groupName
 */
UpdateGroupRequest.prototype['groupName'] = undefined;






export default UpdateGroupRequest;

