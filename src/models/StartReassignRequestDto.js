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
 * The StartReassignRequestDto model module.
 * @module models/StartReassignRequestDto
 * @version 3.2.0
 */
class StartReassignRequestDto {
    /**
     * Constructs a new <code>StartReassignRequestDto</code>.
     * The request parameters for starting the reassignment process.
     * @alias module:models/StartReassignRequestDto
     * @param fromUserId {String} The user ID whose data will be reassigned to another user.
     * @param toUserId {String} The user ID to whom all the data will be reassigned.
     */
    constructor(fromUserId, toUserId) { 
        
        StartReassignRequestDto.initialize(this, fromUserId, toUserId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fromUserId, toUserId) { 
        obj['fromUserId'] = fromUserId;
        obj['toUserId'] = toUserId;
    }

    /**
     * Constructs a <code>StartReassignRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/StartReassignRequestDto} obj Optional instance to populate.
     * @return {module:models/StartReassignRequestDto} The populated <code>StartReassignRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StartReassignRequestDto();

            if (data.hasOwnProperty('fromUserId')) {
                obj['fromUserId'] = ApiClient.convertToType(data['fromUserId'], 'String');
            }
            if (data.hasOwnProperty('toUserId')) {
                obj['toUserId'] = ApiClient.convertToType(data['toUserId'], 'String');
            }
            if (data.hasOwnProperty('deleteProfile')) {
                obj['deleteProfile'] = ApiClient.convertToType(data['deleteProfile'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StartReassignRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StartReassignRequestDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StartReassignRequestDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fromUserId'] && !(typeof data['fromUserId'] === 'string' || data['fromUserId'] instanceof String)) {
            throw new Error("Expected the field `fromUserId` to be a primitive type in the JSON string but got " + data['fromUserId']);
        }
        // ensure the json data is a string
        if (data['toUserId'] && !(typeof data['toUserId'] === 'string' || data['toUserId'] instanceof String)) {
            throw new Error("Expected the field `toUserId` to be a primitive type in the JSON string but got " + data['toUserId']);
        }

        return true;
    }


}

StartReassignRequestDto.RequiredProperties = ["fromUserId", "toUserId"];

/**
 * The user ID whose data will be reassigned to another user.
 * @member {String} fromUserId
 */
StartReassignRequestDto.prototype['fromUserId'] = undefined;

/**
 * The user ID to whom all the data will be reassigned.
 * @member {String} toUserId
 */
StartReassignRequestDto.prototype['toUserId'] = undefined;

/**
 * Specifies whether to delete a profile when the data reassignment will be finished or not.
 * @member {Boolean} deleteProfile
 */
StartReassignRequestDto.prototype['deleteProfile'] = undefined;






export default StartReassignRequestDto;

