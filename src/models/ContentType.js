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
 * The ContentType model module.
 * @module models/ContentType
 * @version 3.2.0
 */
class ContentType {
    /**
     * Constructs a new <code>ContentType</code>.
     * @alias module:models/ContentType
     */
    constructor() { 
        
        ContentType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContentType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ContentType} obj Optional instance to populate.
     * @return {module:models/ContentType} The populated <code>ContentType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentType();

            if (data.hasOwnProperty('boundary')) {
                obj['boundary'] = ApiClient.convertToType(data['boundary'], 'String');
            }
            if (data.hasOwnProperty('charSet')) {
                obj['charSet'] = ApiClient.convertToType(data['charSet'], 'String');
            }
            if (data.hasOwnProperty('mediaType')) {
                obj['mediaType'] = ApiClient.convertToType(data['mediaType'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContentType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContentType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['boundary'] && !(typeof data['boundary'] === 'string' || data['boundary'] instanceof String)) {
            throw new Error("Expected the field `boundary` to be a primitive type in the JSON string but got " + data['boundary']);
        }
        // ensure the json data is a string
        if (data['charSet'] && !(typeof data['charSet'] === 'string' || data['charSet'] instanceof String)) {
            throw new Error("Expected the field `charSet` to be a primitive type in the JSON string but got " + data['charSet']);
        }
        // ensure the json data is a string
        if (data['mediaType'] && !(typeof data['mediaType'] === 'string' || data['mediaType'] instanceof String)) {
            throw new Error("Expected the field `mediaType` to be a primitive type in the JSON string but got " + data['mediaType']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['parameters'])) {
            throw new Error("Expected the field `parameters` to be an array in the JSON data but got " + data['parameters']);
        }

        return true;
    }


}



/**
 * @member {String} boundary
 */
ContentType.prototype['boundary'] = undefined;

/**
 * @member {String} charSet
 */
ContentType.prototype['charSet'] = undefined;

/**
 * @member {String} mediaType
 */
ContentType.prototype['mediaType'] = undefined;

/**
 * @member {String} name
 */
ContentType.prototype['name'] = undefined;

/**
 * @member {Array.<Object>} parameters
 */
ContentType.prototype['parameters'] = undefined;






export default ContentType;

