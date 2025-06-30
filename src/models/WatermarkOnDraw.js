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
import Paragraph from './Paragraph';

/**
 * The WatermarkOnDraw model module.
 * @module models/WatermarkOnDraw
 * @version 3.2.0
 */
class WatermarkOnDraw {
    /**
     * Constructs a new <code>WatermarkOnDraw</code>.
     * The document watermark parameters.
     * @alias module:models/WatermarkOnDraw
     */
    constructor() { 
        
        WatermarkOnDraw.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WatermarkOnDraw</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WatermarkOnDraw} obj Optional instance to populate.
     * @return {module:models/WatermarkOnDraw} The populated <code>WatermarkOnDraw</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WatermarkOnDraw();

            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('margins')) {
                obj['margins'] = ApiClient.convertToType(data['margins'], ['Number']);
            }
            if (data.hasOwnProperty('fill')) {
                obj['fill'] = ApiClient.convertToType(data['fill'], 'String');
            }
            if (data.hasOwnProperty('rotate')) {
                obj['rotate'] = ApiClient.convertToType(data['rotate'], 'Number');
            }
            if (data.hasOwnProperty('transparent')) {
                obj['transparent'] = ApiClient.convertToType(data['transparent'], 'Number');
            }
            if (data.hasOwnProperty('paragraphs')) {
                obj['paragraphs'] = ApiClient.convertToType(data['paragraphs'], [Paragraph]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WatermarkOnDraw</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WatermarkOnDraw</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['margins'])) {
            throw new Error("Expected the field `margins` to be an array in the JSON data but got " + data['margins']);
        }
        // ensure the json data is a string
        if (data['fill'] && !(typeof data['fill'] === 'string' || data['fill'] instanceof String)) {
            throw new Error("Expected the field `fill` to be a primitive type in the JSON string but got " + data['fill']);
        }
        if (data['paragraphs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['paragraphs'])) {
                throw new Error("Expected the field `paragraphs` to be an array in the JSON data but got " + data['paragraphs']);
            }
            // validate the optional field `paragraphs` (array)
            for (const item of data['paragraphs']) {
                Paragraph.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Defines the watermark width measured in millimeters.
 * @member {Number} width
 */
WatermarkOnDraw.prototype['width'] = undefined;

/**
 * Defines the watermark height measured in millimeters.
 * @member {Number} height
 */
WatermarkOnDraw.prototype['height'] = undefined;

/**
 * Defines the watermark margins measured in millimeters.
 * @member {Array.<Number>} margins
 */
WatermarkOnDraw.prototype['margins'] = undefined;

/**
 * Defines the watermark fill color.
 * @member {String} fill
 */
WatermarkOnDraw.prototype['fill'] = undefined;

/**
 * Defines the watermark rotation angle.
 * @member {Number} rotate
 */
WatermarkOnDraw.prototype['rotate'] = undefined;

/**
 * Defines the watermark transparency percentage.
 * @member {Number} transparent
 */
WatermarkOnDraw.prototype['transparent'] = undefined;

/**
 * The list of paragraphs of the watermark.
 * @member {Array.<module:models/Paragraph>} paragraphs
 */
WatermarkOnDraw.prototype['paragraphs'] = undefined;






export default WatermarkOnDraw;

