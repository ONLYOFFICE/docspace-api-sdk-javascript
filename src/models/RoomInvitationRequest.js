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
import RoomInvitation from './RoomInvitation';

/**
 * The RoomInvitationRequest model module.
 * @module models/RoomInvitationRequest
 * @version 3.2.0
 */
class RoomInvitationRequest {
    /**
     * Constructs a new <code>RoomInvitationRequest</code>.
     * The request parameters for inviting users to the room.
     * @alias module:models/RoomInvitationRequest
     */
    constructor() { 
        
        RoomInvitationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoomInvitationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/RoomInvitationRequest} obj Optional instance to populate.
     * @return {module:models/RoomInvitationRequest} The populated <code>RoomInvitationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoomInvitationRequest();

            if (data.hasOwnProperty('invitations')) {
                obj['invitations'] = ApiClient.convertToType(data['invitations'], [RoomInvitation]);
            }
            if (data.hasOwnProperty('notify')) {
                obj['notify'] = ApiClient.convertToType(data['notify'], 'Boolean');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('culture')) {
                obj['culture'] = ApiClient.convertToType(data['culture'], 'String');
            }
            if (data.hasOwnProperty('force')) {
                obj['force'] = ApiClient.convertToType(data['force'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RoomInvitationRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RoomInvitationRequest</code>.
     */
    static validateJSON(data) {
        if (data['invitations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['invitations'])) {
                throw new Error("Expected the field `invitations` to be an array in the JSON data but got " + data['invitations']);
            }
            // validate the optional field `invitations` (array)
            for (const item of data['invitations']) {
                RoomInvitation.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['culture'] && !(typeof data['culture'] === 'string' || data['culture'] instanceof String)) {
            throw new Error("Expected the field `culture` to be a primitive type in the JSON string but got " + data['culture']);
        }

        return true;
    }


}



/**
 * The collection of invitation parameters.
 * @member {Array.<module:models/RoomInvitation>} invitations
 */
RoomInvitationRequest.prototype['invitations'] = undefined;

/**
 * Specifies whether to notify users about the shared room or not.
 * @member {Boolean} notify
 */
RoomInvitationRequest.prototype['notify'] = undefined;

/**
 * The message to send when notifying about the shared room.
 * @member {String} message
 */
RoomInvitationRequest.prototype['message'] = undefined;

/**
 * The language of the room invitation.
 * @member {String} culture
 */
RoomInvitationRequest.prototype['culture'] = undefined;

/**
 * Specifies whether to forcibly delete a user with form roles from the room.
 * @member {Boolean} force
 */
RoomInvitationRequest.prototype['force'] = undefined;






export default RoomInvitationRequest;

