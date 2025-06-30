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
 * The ContentDisposition model module.
 * @module models/ContentDisposition
 * @version 3.2.0
 */
class ContentDisposition {
    /**
     * Constructs a new <code>ContentDisposition</code>.
     * @alias module:models/ContentDisposition
     */
    constructor() { 
        
        ContentDisposition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContentDisposition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ContentDisposition} obj Optional instance to populate.
     * @return {module:models/ContentDisposition} The populated <code>ContentDisposition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentDisposition();

            if (data.hasOwnProperty('dispositionType')) {
                obj['dispositionType'] = ApiClient.convertToType(data['dispositionType'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [Object]);
            }
            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('modificationDate')) {
                obj['modificationDate'] = ApiClient.convertToType(data['modificationDate'], 'Date');
            }
            if (data.hasOwnProperty('inline')) {
                obj['inline'] = ApiClient.convertToType(data['inline'], 'Boolean');
            }
            if (data.hasOwnProperty('readDate')) {
                obj['readDate'] = ApiClient.convertToType(data['readDate'], 'Date');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContentDisposition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContentDisposition</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['dispositionType'] && !(typeof data['dispositionType'] === 'string' || data['dispositionType'] instanceof String)) {
            throw new Error("Expected the field `dispositionType` to be a primitive type in the JSON string but got " + data['dispositionType']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['parameters'])) {
            throw new Error("Expected the field `parameters` to be an array in the JSON data but got " + data['parameters']);
        }
        // ensure the json data is a string
        if (data['fileName'] && !(typeof data['fileName'] === 'string' || data['fileName'] instanceof String)) {
            throw new Error("Expected the field `fileName` to be a primitive type in the JSON string but got " + data['fileName']);
        }

        return true;
    }


}



/**
 * @member {String} dispositionType
 */
ContentDisposition.prototype['dispositionType'] = undefined;

/**
 * @member {Array.<Object>} parameters
 */
ContentDisposition.prototype['parameters'] = undefined;

/**
 * @member {String} fileName
 */
ContentDisposition.prototype['fileName'] = undefined;

/**
 * @member {Date} creationDate
 */
ContentDisposition.prototype['creationDate'] = undefined;

/**
 * @member {Date} modificationDate
 */
ContentDisposition.prototype['modificationDate'] = undefined;

/**
 * @member {Boolean} inline
 */
ContentDisposition.prototype['inline'] = undefined;

/**
 * @member {Date} readDate
 */
ContentDisposition.prototype['readDate'] = undefined;

/**
 * @member {Number} size
 */
ContentDisposition.prototype['size'] = undefined;






export default ContentDisposition;

