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
import LogoRequest from './LogoRequest';
import RoomType from './RoomType';

/**
 * The CreateThirdPartyRoom model module.
 * @module models/CreateThirdPartyRoom
 * @version 3.2.0
 */
class CreateThirdPartyRoom {
    /**
     * Constructs a new <code>CreateThirdPartyRoom</code>.
     * The parameters for creating a third-party room.
     * @alias module:models/CreateThirdPartyRoom
     * @param title {String} The third-party room name to be created.
     * @param roomType {module:models/RoomType} 
     */
    constructor(title, roomType) { 
        
        CreateThirdPartyRoom.initialize(this, title, roomType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, roomType) { 
        obj['title'] = title;
        obj['roomType'] = roomType;
    }

    /**
     * Constructs a <code>CreateThirdPartyRoom</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateThirdPartyRoom} obj Optional instance to populate.
     * @return {module:models/CreateThirdPartyRoom} The populated <code>CreateThirdPartyRoom</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateThirdPartyRoom();

            if (data.hasOwnProperty('createAsNewFolder')) {
                obj['createAsNewFolder'] = ApiClient.convertToType(data['createAsNewFolder'], 'Boolean');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('roomType')) {
                obj['roomType'] = RoomType.constructFromObject(data['roomType']);
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
            if (data.hasOwnProperty('indexing')) {
                obj['indexing'] = ApiClient.convertToType(data['indexing'], 'Boolean');
            }
            if (data.hasOwnProperty('denyDownload')) {
                obj['denyDownload'] = ApiClient.convertToType(data['denyDownload'], 'Boolean');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('cover')) {
                obj['cover'] = ApiClient.convertToType(data['cover'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = LogoRequest.constructFromObject(data['logo']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateThirdPartyRoom</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateThirdPartyRoom</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateThirdPartyRoom.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['color'] && !(typeof data['color'] === 'string' || data['color'] instanceof String)) {
            throw new Error("Expected the field `color` to be a primitive type in the JSON string but got " + data['color']);
        }
        // ensure the json data is a string
        if (data['cover'] && !(typeof data['cover'] === 'string' || data['cover'] instanceof String)) {
            throw new Error("Expected the field `cover` to be a primitive type in the JSON string but got " + data['cover']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // validate the optional field `logo`
        if (data['logo']) { // data not null
          LogoRequest.validateJSON(data['logo']);
        }

        return true;
    }


}

CreateThirdPartyRoom.RequiredProperties = ["title", "roomType"];

/**
 * Specifies whether to create a third-party room as a new folder or not.
 * @member {Boolean} createAsNewFolder
 */
CreateThirdPartyRoom.prototype['createAsNewFolder'] = undefined;

/**
 * The third-party room name to be created.
 * @member {String} title
 */
CreateThirdPartyRoom.prototype['title'] = undefined;

/**
 * @member {module:models/RoomType} roomType
 */
CreateThirdPartyRoom.prototype['roomType'] = undefined;

/**
 * Specifies whether to create the private third-party room or not.
 * @member {Boolean} private
 */
CreateThirdPartyRoom.prototype['private'] = undefined;

/**
 * Specifies whether to create the third-party room with indexing.
 * @member {Boolean} indexing
 */
CreateThirdPartyRoom.prototype['indexing'] = undefined;

/**
 * Specifies whether to deny downloads from the third-party room.
 * @member {Boolean} denyDownload
 */
CreateThirdPartyRoom.prototype['denyDownload'] = undefined;

/**
 * The color of the third-party room.
 * @member {String} color
 */
CreateThirdPartyRoom.prototype['color'] = undefined;

/**
 * The cover of the third-party room.
 * @member {String} cover
 */
CreateThirdPartyRoom.prototype['cover'] = undefined;

/**
 * The list of tags of the third-party room.
 * @member {Array.<String>} tags
 */
CreateThirdPartyRoom.prototype['tags'] = undefined;

/**
 * @member {module:models/LogoRequest} logo
 */
CreateThirdPartyRoom.prototype['logo'] = undefined;






export default CreateThirdPartyRoom;

