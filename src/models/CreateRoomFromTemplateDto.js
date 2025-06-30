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
import RoomDataLifetimeDto from './RoomDataLifetimeDto';
import WatermarkRequestDto from './WatermarkRequestDto';

/**
 * The CreateRoomFromTemplateDto model module.
 * @module models/CreateRoomFromTemplateDto
 * @version 3.2.0
 */
class CreateRoomFromTemplateDto {
    /**
     * Constructs a new <code>CreateRoomFromTemplateDto</code>.
     * The parameters for creating a room from a template.
     * @alias module:models/CreateRoomFromTemplateDto
     * @param templateId {Number} The template ID from which the room to be created.
     * @param title {String} The room title.
     */
    constructor(templateId, title) { 
        
        CreateRoomFromTemplateDto.initialize(this, templateId, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, templateId, title) { 
        obj['templateId'] = templateId;
        obj['title'] = title;
    }

    /**
     * Constructs a <code>CreateRoomFromTemplateDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateRoomFromTemplateDto} obj Optional instance to populate.
     * @return {module:models/CreateRoomFromTemplateDto} The populated <code>CreateRoomFromTemplateDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRoomFromTemplateDto();

            if (data.hasOwnProperty('templateId')) {
                obj['templateId'] = ApiClient.convertToType(data['templateId'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = LogoRequest.constructFromObject(data['logo']);
            }
            if (data.hasOwnProperty('copyLogo')) {
                obj['copyLogo'] = ApiClient.convertToType(data['copyLogo'], 'Boolean');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('cover')) {
                obj['cover'] = ApiClient.convertToType(data['cover'], 'String');
            }
            if (data.hasOwnProperty('quota')) {
                obj['quota'] = ApiClient.convertToType(data['quota'], 'Number');
            }
            if (data.hasOwnProperty('indexing')) {
                obj['indexing'] = ApiClient.convertToType(data['indexing'], 'Boolean');
            }
            if (data.hasOwnProperty('denyDownload')) {
                obj['denyDownload'] = ApiClient.convertToType(data['denyDownload'], 'Boolean');
            }
            if (data.hasOwnProperty('lifetime')) {
                obj['lifetime'] = RoomDataLifetimeDto.constructFromObject(data['lifetime']);
            }
            if (data.hasOwnProperty('watermark')) {
                obj['watermark'] = WatermarkRequestDto.constructFromObject(data['watermark']);
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateRoomFromTemplateDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateRoomFromTemplateDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateRoomFromTemplateDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // validate the optional field `logo`
        if (data['logo']) { // data not null
          LogoRequest.validateJSON(data['logo']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['color'] && !(typeof data['color'] === 'string' || data['color'] instanceof String)) {
            throw new Error("Expected the field `color` to be a primitive type in the JSON string but got " + data['color']);
        }
        // ensure the json data is a string
        if (data['cover'] && !(typeof data['cover'] === 'string' || data['cover'] instanceof String)) {
            throw new Error("Expected the field `cover` to be a primitive type in the JSON string but got " + data['cover']);
        }
        // validate the optional field `lifetime`
        if (data['lifetime']) { // data not null
          RoomDataLifetimeDto.validateJSON(data['lifetime']);
        }
        // validate the optional field `watermark`
        if (data['watermark']) { // data not null
          WatermarkRequestDto.validateJSON(data['watermark']);
        }

        return true;
    }


}

CreateRoomFromTemplateDto.RequiredProperties = ["templateId", "title"];

/**
 * The template ID from which the room to be created.
 * @member {Number} templateId
 */
CreateRoomFromTemplateDto.prototype['templateId'] = undefined;

/**
 * The room title.
 * @member {String} title
 */
CreateRoomFromTemplateDto.prototype['title'] = undefined;

/**
 * @member {module:models/LogoRequest} logo
 */
CreateRoomFromTemplateDto.prototype['logo'] = undefined;

/**
 * Specifies whether to copy a logo or not.
 * @member {Boolean} copyLogo
 */
CreateRoomFromTemplateDto.prototype['copyLogo'] = undefined;

/**
 * The collection of tags.
 * @member {Array.<String>} tags
 */
CreateRoomFromTemplateDto.prototype['tags'] = undefined;

/**
 * The color of the room to be created.
 * @member {String} color
 */
CreateRoomFromTemplateDto.prototype['color'] = undefined;

/**
 * The cover of the room to be created.
 * @member {String} cover
 */
CreateRoomFromTemplateDto.prototype['cover'] = undefined;

/**
 * The room quota.
 * @member {Number} quota
 */
CreateRoomFromTemplateDto.prototype['quota'] = undefined;

/**
 * Specifies whether to create a room with indexing.
 * @member {Boolean} indexing
 */
CreateRoomFromTemplateDto.prototype['indexing'] = undefined;

/**
 * Specifies whether to deny downloads from the room.
 * @member {Boolean} denyDownload
 */
CreateRoomFromTemplateDto.prototype['denyDownload'] = undefined;

/**
 * @member {module:models/RoomDataLifetimeDto} lifetime
 */
CreateRoomFromTemplateDto.prototype['lifetime'] = undefined;

/**
 * @member {module:models/WatermarkRequestDto} watermark
 */
CreateRoomFromTemplateDto.prototype['watermark'] = undefined;

/**
 * Specifies whether the room to be created is private or not.
 * @member {Boolean} private
 */
CreateRoomFromTemplateDto.prototype['private'] = undefined;






export default CreateRoomFromTemplateDto;

