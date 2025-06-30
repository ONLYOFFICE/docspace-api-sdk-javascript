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
import ItemKeyValuePairStringString from './ItemKeyValuePairStringString';

/**
 * The StorageRequestsDto model module.
 * @module models/StorageRequestsDto
 * @version 3.2.0
 */
class StorageRequestsDto {
    /**
     * Constructs a new <code>StorageRequestsDto</code>.
     * The request parameters for configuring the storage module settings.
     * @alias module:models/StorageRequestsDto
     * @param module {String} The name for the storage module to be configured.
     */
    constructor(module) { 
        
        StorageRequestsDto.initialize(this, module);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, module) { 
        obj['module'] = module;
    }

    /**
     * Constructs a <code>StorageRequestsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/StorageRequestsDto} obj Optional instance to populate.
     * @return {module:models/StorageRequestsDto} The populated <code>StorageRequestsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StorageRequestsDto();

            if (data.hasOwnProperty('module')) {
                obj['module'] = ApiClient.convertToType(data['module'], 'String');
            }
            if (data.hasOwnProperty('props')) {
                obj['props'] = ApiClient.convertToType(data['props'], [ItemKeyValuePairStringString]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StorageRequestsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StorageRequestsDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of StorageRequestsDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['module'] && !(typeof data['module'] === 'string' || data['module'] instanceof String)) {
            throw new Error("Expected the field `module` to be a primitive type in the JSON string but got " + data['module']);
        }
        if (data['props']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['props'])) {
                throw new Error("Expected the field `props` to be an array in the JSON data but got " + data['props']);
            }
            // validate the optional field `props` (array)
            for (const item of data['props']) {
                ItemKeyValuePairStringString.validateJSON(item);
            };
        }

        return true;
    }


}

StorageRequestsDto.RequiredProperties = ["module"];

/**
 * The name for the storage module to be configured.
 * @member {String} module
 */
StorageRequestsDto.prototype['module'] = undefined;

/**
 * The list of configuration key-value pairs for the storage module.
 * @member {Array.<module:models/ItemKeyValuePairStringString>} props
 */
StorageRequestsDto.prototype['props'] = undefined;






export default StorageRequestsDto;

