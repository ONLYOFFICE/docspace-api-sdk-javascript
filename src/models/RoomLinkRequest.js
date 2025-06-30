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
import ApiDateTime from './ApiDateTime';
import FileShare from './FileShare';
import LinkType from './LinkType';

/**
 * The RoomLinkRequest model module.
 * @module models/RoomLinkRequest
 * @version 3.2.0
 */
class RoomLinkRequest {
    /**
     * Constructs a new <code>RoomLinkRequest</code>.
     * The room link parameters.
     * @alias module:models/RoomLinkRequest
     */
    constructor() { 
        
        RoomLinkRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoomLinkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/RoomLinkRequest} obj Optional instance to populate.
     * @return {module:models/RoomLinkRequest} The populated <code>RoomLinkRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoomLinkRequest();

            if (data.hasOwnProperty('linkId')) {
                obj['linkId'] = ApiClient.convertToType(data['linkId'], 'String');
            }
            if (data.hasOwnProperty('access')) {
                obj['access'] = FileShare.constructFromObject(data['access']);
            }
            if (data.hasOwnProperty('expirationDate')) {
                obj['expirationDate'] = ApiDateTime.constructFromObject(data['expirationDate']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('linkType')) {
                obj['linkType'] = LinkType.constructFromObject(data['linkType']);
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('denyDownload')) {
                obj['denyDownload'] = ApiClient.convertToType(data['denyDownload'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RoomLinkRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RoomLinkRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['linkId'] && !(typeof data['linkId'] === 'string' || data['linkId'] instanceof String)) {
            throw new Error("Expected the field `linkId` to be a primitive type in the JSON string but got " + data['linkId']);
        }
        // validate the optional field `expirationDate`
        if (data['expirationDate']) { // data not null
          ApiDateTime.validateJSON(data['expirationDate']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }

        return true;
    }


}



/**
 * The room link ID.
 * @member {String} linkId
 */
RoomLinkRequest.prototype['linkId'] = undefined;

/**
 * @member {module:models/FileShare} access
 */
RoomLinkRequest.prototype['access'] = undefined;

/**
 * @member {module:models/ApiDateTime} expirationDate
 */
RoomLinkRequest.prototype['expirationDate'] = undefined;

/**
 * The link name.
 * @member {String} title
 */
RoomLinkRequest.prototype['title'] = undefined;

/**
 * @member {module:models/LinkType} linkType
 */
RoomLinkRequest.prototype['linkType'] = undefined;

/**
 * The link password.
 * @member {String} password
 */
RoomLinkRequest.prototype['password'] = undefined;

/**
 * Specifies if downloading the file from the link is disabled or not.
 * @member {Boolean} denyDownload
 */
RoomLinkRequest.prototype['denyDownload'] = undefined;






export default RoomLinkRequest;

