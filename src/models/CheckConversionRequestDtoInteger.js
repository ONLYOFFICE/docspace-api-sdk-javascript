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
 * The CheckConversionRequestDtoInteger model module.
 * @module models/CheckConversionRequestDtoInteger
 * @version 3.2.0
 */
class CheckConversionRequestDtoInteger {
    /**
     * Constructs a new <code>CheckConversionRequestDtoInteger</code>.
     * The parameters for checking file conversion.
     * @alias module:models/CheckConversionRequestDtoInteger
     */
    constructor() { 
        
        CheckConversionRequestDtoInteger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckConversionRequestDtoInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CheckConversionRequestDtoInteger} obj Optional instance to populate.
     * @return {module:models/CheckConversionRequestDtoInteger} The populated <code>CheckConversionRequestDtoInteger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckConversionRequestDtoInteger();

            if (data.hasOwnProperty('fileId')) {
                obj['fileId'] = ApiClient.convertToType(data['fileId'], 'Number');
            }
            if (data.hasOwnProperty('sync')) {
                obj['sync'] = ApiClient.convertToType(data['sync'], 'Boolean');
            }
            if (data.hasOwnProperty('startConvert')) {
                obj['startConvert'] = ApiClient.convertToType(data['startConvert'], 'Boolean');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('outputType')) {
                obj['outputType'] = ApiClient.convertToType(data['outputType'], 'String');
            }
            if (data.hasOwnProperty('createNewIfExist')) {
                obj['createNewIfExist'] = ApiClient.convertToType(data['createNewIfExist'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CheckConversionRequestDtoInteger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CheckConversionRequestDtoInteger</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['outputType'] && !(typeof data['outputType'] === 'string' || data['outputType'] instanceof String)) {
            throw new Error("Expected the field `outputType` to be a primitive type in the JSON string but got " + data['outputType']);
        }

        return true;
    }


}



/**
 * The file ID to check conversion proccess.
 * @member {Number} fileId
 */
CheckConversionRequestDtoInteger.prototype['fileId'] = undefined;

/**
 * Specifies if the conversion process is synchronous or not.
 * @member {Boolean} sync
 */
CheckConversionRequestDtoInteger.prototype['sync'] = undefined;

/**
 * Specifies whether to start a conversion process or not.
 * @member {Boolean} startConvert
 */
CheckConversionRequestDtoInteger.prototype['startConvert'] = undefined;

/**
 * The file version that is converted.
 * @member {Number} version
 */
CheckConversionRequestDtoInteger.prototype['version'] = undefined;

/**
 * The password of the converted file.
 * @member {String} password
 */
CheckConversionRequestDtoInteger.prototype['password'] = undefined;

/**
 * The conversion output type.
 * @member {String} outputType
 */
CheckConversionRequestDtoInteger.prototype['outputType'] = undefined;

/**
 * Specifies whether to create a new file if it exists or not.
 * @member {Boolean} createNewIfExist
 */
CheckConversionRequestDtoInteger.prototype['createNewIfExist'] = undefined;






export default CheckConversionRequestDtoInteger;

