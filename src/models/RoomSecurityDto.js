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
import FileShareDto from './FileShareDto';
import RoomSecurityError from './RoomSecurityError';

/**
 * The RoomSecurityDto model module.
 * @module models/RoomSecurityDto
 * @version 3.2.0
 */
class RoomSecurityDto {
    /**
     * Constructs a new <code>RoomSecurityDto</code>.
     * The room security parameters.
     * @alias module:models/RoomSecurityDto
     */
    constructor() { 
        
        RoomSecurityDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoomSecurityDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/RoomSecurityDto} obj Optional instance to populate.
     * @return {module:models/RoomSecurityDto} The populated <code>RoomSecurityDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoomSecurityDto();

            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], [FileShareDto]);
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = ApiClient.convertToType(data['warning'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = RoomSecurityError.constructFromObject(data['error']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RoomSecurityDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RoomSecurityDto</code>.
     */
    static validateJSON(data) {
        if (data['members']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['members'])) {
                throw new Error("Expected the field `members` to be an array in the JSON data but got " + data['members']);
            }
            // validate the optional field `members` (array)
            for (const item of data['members']) {
                FileShareDto.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['warning'] && !(typeof data['warning'] === 'string' || data['warning'] instanceof String)) {
            throw new Error("Expected the field `warning` to be a primitive type in the JSON string but got " + data['warning']);
        }

        return true;
    }


}



/**
 * The list of room members.
 * @member {Array.<module:models/FileShareDto>} members
 */
RoomSecurityDto.prototype['members'] = undefined;

/**
 * The warning message.
 * @member {String} warning
 */
RoomSecurityDto.prototype['warning'] = undefined;

/**
 * @member {module:models/RoomSecurityError} error
 */
RoomSecurityDto.prototype['error'] = undefined;






export default RoomSecurityDto;

