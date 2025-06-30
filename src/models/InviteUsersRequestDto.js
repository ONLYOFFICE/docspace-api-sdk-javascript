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
import UserInvitationRequestDto from './UserInvitationRequestDto';

/**
 * The InviteUsersRequestDto model module.
 * @module models/InviteUsersRequestDto
 * @version 3.2.0
 */
class InviteUsersRequestDto {
    /**
     * Constructs a new <code>InviteUsersRequestDto</code>.
     * The request parameters for inviting users.
     * @alias module:models/InviteUsersRequestDto
     * @param invitations {Array.<module:models/UserInvitationRequestDto>} The list of user invitations.
     */
    constructor(invitations) { 
        
        InviteUsersRequestDto.initialize(this, invitations);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, invitations) { 
        obj['invitations'] = invitations;
    }

    /**
     * Constructs a <code>InviteUsersRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/InviteUsersRequestDto} obj Optional instance to populate.
     * @return {module:models/InviteUsersRequestDto} The populated <code>InviteUsersRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InviteUsersRequestDto();

            if (data.hasOwnProperty('invitations')) {
                obj['invitations'] = ApiClient.convertToType(data['invitations'], [UserInvitationRequestDto]);
            }
            if (data.hasOwnProperty('culture')) {
                obj['culture'] = ApiClient.convertToType(data['culture'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InviteUsersRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InviteUsersRequestDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of InviteUsersRequestDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['invitations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['invitations'])) {
                throw new Error("Expected the field `invitations` to be an array in the JSON data but got " + data['invitations']);
            }
            // validate the optional field `invitations` (array)
            for (const item of data['invitations']) {
                UserInvitationRequestDto.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['culture'] && !(typeof data['culture'] === 'string' || data['culture'] instanceof String)) {
            throw new Error("Expected the field `culture` to be a primitive type in the JSON string but got " + data['culture']);
        }

        return true;
    }


}

InviteUsersRequestDto.RequiredProperties = ["invitations"];

/**
 * The list of user invitations.
 * @member {Array.<module:models/UserInvitationRequestDto>} invitations
 */
InviteUsersRequestDto.prototype['invitations'] = undefined;

/**
 * The culture code of invitations.
 * @member {String} culture
 */
InviteUsersRequestDto.prototype['culture'] = undefined;






export default InviteUsersRequestDto;

