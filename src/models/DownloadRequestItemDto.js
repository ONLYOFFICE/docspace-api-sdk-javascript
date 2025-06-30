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
import DownloadRequestItemDtoKey from './DownloadRequestItemDtoKey';

/**
 * The DownloadRequestItemDto model module.
 * @module models/DownloadRequestItemDto
 * @version 3.2.0
 */
class DownloadRequestItemDto {
    /**
     * Constructs a new <code>DownloadRequestItemDto</code>.
     * The download request item with conversion parameters and security settings.
     * @alias module:models/DownloadRequestItemDto
     * @param key {module:models/DownloadRequestItemDtoKey} 
     * @param value {String} The target format or conversion type for the file download.
     */
    constructor(key, value) { 
        
        DownloadRequestItemDto.initialize(this, key, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, value) { 
        obj['key'] = key;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>DownloadRequestItemDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DownloadRequestItemDto} obj Optional instance to populate.
     * @return {module:models/DownloadRequestItemDto} The populated <code>DownloadRequestItemDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DownloadRequestItemDto();

            if (data.hasOwnProperty('key')) {
                obj['key'] = DownloadRequestItemDtoKey.constructFromObject(data['key']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DownloadRequestItemDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DownloadRequestItemDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DownloadRequestItemDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `key`
        if (data['key']) { // data not null
          DownloadRequestItemDtoKey.validateJSON(data['key']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }

        return true;
    }


}

DownloadRequestItemDto.RequiredProperties = ["key", "value"];

/**
 * @member {module:models/DownloadRequestItemDtoKey} key
 */
DownloadRequestItemDto.prototype['key'] = undefined;

/**
 * The target format or conversion type for the file download.
 * @member {String} value
 */
DownloadRequestItemDto.prototype['value'] = undefined;

/**
 * The optional password for accessing protected files.
 * @member {String} password
 */
DownloadRequestItemDto.prototype['password'] = undefined;






export default DownloadRequestItemDto;

