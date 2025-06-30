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
 * The ThumbnailsDataDto model module.
 * @module models/ThumbnailsDataDto
 * @version 3.2.0
 */
class ThumbnailsDataDto {
    /**
     * Constructs a new <code>ThumbnailsDataDto</code>.
     * The thumbnails data parameters.
     * @alias module:models/ThumbnailsDataDto
     */
    constructor() { 
        
        ThumbnailsDataDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThumbnailsDataDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ThumbnailsDataDto} obj Optional instance to populate.
     * @return {module:models/ThumbnailsDataDto} The populated <code>ThumbnailsDataDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThumbnailsDataDto();

            if (data.hasOwnProperty('original')) {
                obj['original'] = ApiClient.convertToType(data['original'], 'String');
            }
            if (data.hasOwnProperty('retina')) {
                obj['retina'] = ApiClient.convertToType(data['retina'], 'String');
            }
            if (data.hasOwnProperty('max')) {
                obj['max'] = ApiClient.convertToType(data['max'], 'String');
            }
            if (data.hasOwnProperty('big')) {
                obj['big'] = ApiClient.convertToType(data['big'], 'String');
            }
            if (data.hasOwnProperty('medium')) {
                obj['medium'] = ApiClient.convertToType(data['medium'], 'String');
            }
            if (data.hasOwnProperty('small')) {
                obj['small'] = ApiClient.convertToType(data['small'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ThumbnailsDataDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ThumbnailsDataDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['original'] && !(typeof data['original'] === 'string' || data['original'] instanceof String)) {
            throw new Error("Expected the field `original` to be a primitive type in the JSON string but got " + data['original']);
        }
        // ensure the json data is a string
        if (data['retina'] && !(typeof data['retina'] === 'string' || data['retina'] instanceof String)) {
            throw new Error("Expected the field `retina` to be a primitive type in the JSON string but got " + data['retina']);
        }
        // ensure the json data is a string
        if (data['max'] && !(typeof data['max'] === 'string' || data['max'] instanceof String)) {
            throw new Error("Expected the field `max` to be a primitive type in the JSON string but got " + data['max']);
        }
        // ensure the json data is a string
        if (data['big'] && !(typeof data['big'] === 'string' || data['big'] instanceof String)) {
            throw new Error("Expected the field `big` to be a primitive type in the JSON string but got " + data['big']);
        }
        // ensure the json data is a string
        if (data['medium'] && !(typeof data['medium'] === 'string' || data['medium'] instanceof String)) {
            throw new Error("Expected the field `medium` to be a primitive type in the JSON string but got " + data['medium']);
        }
        // ensure the json data is a string
        if (data['small'] && !(typeof data['small'] === 'string' || data['small'] instanceof String)) {
            throw new Error("Expected the field `small` to be a primitive type in the JSON string but got " + data['small']);
        }

        return true;
    }


}



/**
 * The thumbnail original photo.
 * @member {String} original
 */
ThumbnailsDataDto.prototype['original'] = undefined;

/**
 * The thumbnail retina.
 * @member {String} retina
 */
ThumbnailsDataDto.prototype['retina'] = undefined;

/**
 * The thumbnail maximum size photo.
 * @member {String} max
 */
ThumbnailsDataDto.prototype['max'] = undefined;

/**
 * The thumbnail big size photo.
 * @member {String} big
 */
ThumbnailsDataDto.prototype['big'] = undefined;

/**
 * The thumbnail medium size photo.
 * @member {String} medium
 */
ThumbnailsDataDto.prototype['medium'] = undefined;

/**
 * The thumbnail small size photo.
 * @member {String} small
 */
ThumbnailsDataDto.prototype['small'] = undefined;






export default ThumbnailsDataDto;

