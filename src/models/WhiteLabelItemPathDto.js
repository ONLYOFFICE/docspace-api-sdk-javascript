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
 * The WhiteLabelItemPathDto model module.
 * @module models/WhiteLabelItemPathDto
 * @version 3.2.0
 */
class WhiteLabelItemPathDto {
    /**
     * Constructs a new <code>WhiteLabelItemPathDto</code>.
     * The white label item path parameters.
     * @alias module:models/WhiteLabelItemPathDto
     */
    constructor() { 
        
        WhiteLabelItemPathDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WhiteLabelItemPathDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WhiteLabelItemPathDto} obj Optional instance to populate.
     * @return {module:models/WhiteLabelItemPathDto} The populated <code>WhiteLabelItemPathDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WhiteLabelItemPathDto();

            if (data.hasOwnProperty('light')) {
                obj['light'] = ApiClient.convertToType(data['light'], 'String');
            }
            if (data.hasOwnProperty('dark')) {
                obj['dark'] = ApiClient.convertToType(data['dark'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WhiteLabelItemPathDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WhiteLabelItemPathDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['light'] && !(typeof data['light'] === 'string' || data['light'] instanceof String)) {
            throw new Error("Expected the field `light` to be a primitive type in the JSON string but got " + data['light']);
        }
        // ensure the json data is a string
        if (data['dark'] && !(typeof data['dark'] === 'string' || data['dark'] instanceof String)) {
            throw new Error("Expected the field `dark` to be a primitive type in the JSON string but got " + data['dark']);
        }

        return true;
    }


}



/**
 * The path to the light theme logo.
 * @member {String} light
 */
WhiteLabelItemPathDto.prototype['light'] = undefined;

/**
 * The path to the dark theme logo.
 * @member {String} dark
 */
WhiteLabelItemPathDto.prototype['dark'] = undefined;






export default WhiteLabelItemPathDto;

