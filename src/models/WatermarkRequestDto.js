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
import WatermarkAdditions from './WatermarkAdditions';

/**
 * The WatermarkRequestDto model module.
 * @module models/WatermarkRequestDto
 * @version 3.2.0
 */
class WatermarkRequestDto {
    /**
     * Constructs a new <code>WatermarkRequestDto</code>.
     * The request parameters for adding watermarks.
     * @alias module:models/WatermarkRequestDto
     */
    constructor() { 
        
        WatermarkRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WatermarkRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WatermarkRequestDto} obj Optional instance to populate.
     * @return {module:models/WatermarkRequestDto} The populated <code>WatermarkRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WatermarkRequestDto();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('additions')) {
                obj['additions'] = WatermarkAdditions.constructFromObject(data['additions']);
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('rotate')) {
                obj['rotate'] = ApiClient.convertToType(data['rotate'], 'Number');
            }
            if (data.hasOwnProperty('imageScale')) {
                obj['imageScale'] = ApiClient.convertToType(data['imageScale'], 'Number');
            }
            if (data.hasOwnProperty('imageUrl')) {
                obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
            }
            if (data.hasOwnProperty('imageHeight')) {
                obj['imageHeight'] = ApiClient.convertToType(data['imageHeight'], 'Number');
            }
            if (data.hasOwnProperty('imageWidth')) {
                obj['imageWidth'] = ApiClient.convertToType(data['imageWidth'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WatermarkRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WatermarkRequestDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }
        // ensure the json data is a string
        if (data['imageUrl'] && !(typeof data['imageUrl'] === 'string' || data['imageUrl'] instanceof String)) {
            throw new Error("Expected the field `imageUrl` to be a primitive type in the JSON string but got " + data['imageUrl']);
        }

        return true;
    }


}



/**
 * Specifies whether watermarks are on or off.
 * @member {Boolean} enabled
 */
WatermarkRequestDto.prototype['enabled'] = undefined;

/**
 * @member {module:models/WatermarkAdditions} additions
 */
WatermarkRequestDto.prototype['additions'] = undefined;

/**
 * The watermark text.
 * @member {String} text
 */
WatermarkRequestDto.prototype['text'] = undefined;

/**
 * The watermark text and image rotate angle.
 * @member {Number} rotate
 */
WatermarkRequestDto.prototype['rotate'] = undefined;

/**
 * The watermark image scale.
 * @member {Number} imageScale
 */
WatermarkRequestDto.prototype['imageScale'] = undefined;

/**
 * The path to the temporary image file.
 * @member {String} imageUrl
 */
WatermarkRequestDto.prototype['imageUrl'] = undefined;

/**
 * The watermark image height.
 * @member {Number} imageHeight
 */
WatermarkRequestDto.prototype['imageHeight'] = undefined;

/**
 * The watermark image width.
 * @member {Number} imageWidth
 */
WatermarkRequestDto.prototype['imageWidth'] = undefined;






export default WatermarkRequestDto;

