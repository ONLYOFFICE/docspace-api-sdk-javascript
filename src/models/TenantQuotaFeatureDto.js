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
import FeatureUsedDto from './FeatureUsedDto';

/**
 * The TenantQuotaFeatureDto model module.
 * @module models/TenantQuotaFeatureDto
 * @version 3.2.0
 */
class TenantQuotaFeatureDto {
    /**
     * Constructs a new <code>TenantQuotaFeatureDto</code>.
     * The tenant quota feature parameters.
     * @alias module:models/TenantQuotaFeatureDto
     */
    constructor() { 
        
        TenantQuotaFeatureDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TenantQuotaFeatureDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TenantQuotaFeatureDto} obj Optional instance to populate.
     * @return {module:models/TenantQuotaFeatureDto} The populated <code>TenantQuotaFeatureDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantQuotaFeatureDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('used')) {
                obj['used'] = FeatureUsedDto.constructFromObject(data['used']);
            }
            if (data.hasOwnProperty('priceTitle')) {
                obj['priceTitle'] = ApiClient.convertToType(data['priceTitle'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TenantQuotaFeatureDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TenantQuotaFeatureDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `used`
        if (data['used']) { // data not null
          FeatureUsedDto.validateJSON(data['used']);
        }
        // ensure the json data is a string
        if (data['priceTitle'] && !(typeof data['priceTitle'] === 'string' || data['priceTitle'] instanceof String)) {
            throw new Error("Expected the field `priceTitle` to be a primitive type in the JSON string but got " + data['priceTitle']);
        }

        return true;
    }


}



/**
 * The ID of the tenant quota feature.
 * @member {String} id
 */
TenantQuotaFeatureDto.prototype['id'] = undefined;

/**
 * The title of the tenant quota feature.
 * @member {String} title
 */
TenantQuotaFeatureDto.prototype['title'] = undefined;

/**
 * The image URL of the tenant quota feature.
 * @member {String} image
 */
TenantQuotaFeatureDto.prototype['image'] = undefined;

/**
 * The value of the tenant quota feature.
 * @member {Object} value
 */
TenantQuotaFeatureDto.prototype['value'] = undefined;

/**
 * The type of the tenant quota feature.
 * @member {String} type
 */
TenantQuotaFeatureDto.prototype['type'] = undefined;

/**
 * @member {module:models/FeatureUsedDto} used
 */
TenantQuotaFeatureDto.prototype['used'] = undefined;

/**
 * The price title of the tenant quota feature.
 * @member {String} priceTitle
 */
TenantQuotaFeatureDto.prototype['priceTitle'] = undefined;






export default TenantQuotaFeatureDto;

