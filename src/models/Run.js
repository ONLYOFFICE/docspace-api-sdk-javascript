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
 * The Run model module.
 * @module models/Run
 * @version 3.2.0
 */
class Run {
    /**
     * Constructs a new <code>Run</code>.
     * The text run parameters.
     * @alias module:models/Run
     */
    constructor() { 
        
        Run.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Run</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Run} obj Optional instance to populate.
     * @return {module:models/Run} The populated <code>Run</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Run();

            if (data.hasOwnProperty('fill')) {
                obj['fill'] = ApiClient.convertToType(data['fill'], ['Number']);
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('font-size')) {
                obj['font-size'] = ApiClient.convertToType(data['font-size'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Run</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Run</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['fill'])) {
            throw new Error("Expected the field `fill` to be an array in the JSON data but got " + data['fill']);
        }
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }
        // ensure the json data is a string
        if (data['font-size'] && !(typeof data['font-size'] === 'string' || data['font-size'] instanceof String)) {
            throw new Error("Expected the field `font-size` to be a primitive type in the JSON string but got " + data['font-size']);
        }

        return true;
    }


}



/**
 * The fill color of the text run in RGB format.
 * @member {Array.<Number>} fill
 */
Run.prototype['fill'] = undefined;

/**
 * The run text.
 * @member {String} text
 */
Run.prototype['text'] = undefined;

/**
 * The font size of the text run in points.
 * @member {String} font-size
 */
Run.prototype['font-size'] = undefined;






export default Run;

