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
import PriceDto from './PriceDto';
import TenantEntityQuotaSettings from './TenantEntityQuotaSettings';
import TenantQuotaFeatureDto from './TenantQuotaFeatureDto';
import TenantQuotaSettings from './TenantQuotaSettings';

/**
 * The QuotaDto model module.
 * @module models/QuotaDto
 * @version 3.2.0
 */
class QuotaDto {
    /**
     * Constructs a new <code>QuotaDto</code>.
     * The quota information.
     * @alias module:models/QuotaDto
     */
    constructor() { 
        
        QuotaDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuotaDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/QuotaDto} obj Optional instance to populate.
     * @return {module:models/QuotaDto} The populated <code>QuotaDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuotaDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = PriceDto.constructFromObject(data['price']);
            }
            if (data.hasOwnProperty('nonProfit')) {
                obj['nonProfit'] = ApiClient.convertToType(data['nonProfit'], 'Boolean');
            }
            if (data.hasOwnProperty('free')) {
                obj['free'] = ApiClient.convertToType(data['free'], 'Boolean');
            }
            if (data.hasOwnProperty('trial')) {
                obj['trial'] = ApiClient.convertToType(data['trial'], 'Boolean');
            }
            if (data.hasOwnProperty('features')) {
                obj['features'] = ApiClient.convertToType(data['features'], [TenantQuotaFeatureDto]);
            }
            if (data.hasOwnProperty('usersQuota')) {
                obj['usersQuota'] = TenantEntityQuotaSettings.constructFromObject(data['usersQuota']);
            }
            if (data.hasOwnProperty('roomsQuota')) {
                obj['roomsQuota'] = TenantEntityQuotaSettings.constructFromObject(data['roomsQuota']);
            }
            if (data.hasOwnProperty('tenantCustomQuota')) {
                obj['tenantCustomQuota'] = TenantQuotaSettings.constructFromObject(data['tenantCustomQuota']);
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuotaDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuotaDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // validate the optional field `price`
        if (data['price']) { // data not null
          PriceDto.validateJSON(data['price']);
        }
        if (data['features']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['features'])) {
                throw new Error("Expected the field `features` to be an array in the JSON data but got " + data['features']);
            }
            // validate the optional field `features` (array)
            for (const item of data['features']) {
                TenantQuotaFeatureDto.validateJSON(item);
            };
        }
        // validate the optional field `usersQuota`
        if (data['usersQuota']) { // data not null
          TenantEntityQuotaSettings.validateJSON(data['usersQuota']);
        }
        // validate the optional field `roomsQuota`
        if (data['roomsQuota']) { // data not null
          TenantEntityQuotaSettings.validateJSON(data['roomsQuota']);
        }
        // validate the optional field `tenantCustomQuota`
        if (data['tenantCustomQuota']) { // data not null
          TenantQuotaSettings.validateJSON(data['tenantCustomQuota']);
        }

        return true;
    }


}



/**
 * The quota ID.
 * @member {Number} id
 */
QuotaDto.prototype['id'] = undefined;

/**
 * The quota title.
 * @member {String} title
 */
QuotaDto.prototype['title'] = undefined;

/**
 * @member {module:models/PriceDto} price
 */
QuotaDto.prototype['price'] = undefined;

/**
 * Specifies if the quota is nonprofit or not.
 * @member {Boolean} nonProfit
 */
QuotaDto.prototype['nonProfit'] = undefined;

/**
 * Specifies if the quota is free or not.
 * @member {Boolean} free
 */
QuotaDto.prototype['free'] = undefined;

/**
 * Specifies if the quota is trial or not.
 * @member {Boolean} trial
 */
QuotaDto.prototype['trial'] = undefined;

/**
 * The list of tenant quota features.
 * @member {Array.<module:models/TenantQuotaFeatureDto>} features
 */
QuotaDto.prototype['features'] = undefined;

/**
 * @member {module:models/TenantEntityQuotaSettings} usersQuota
 */
QuotaDto.prototype['usersQuota'] = undefined;

/**
 * @member {module:models/TenantEntityQuotaSettings} roomsQuota
 */
QuotaDto.prototype['roomsQuota'] = undefined;

/**
 * @member {module:models/TenantQuotaSettings} tenantCustomQuota
 */
QuotaDto.prototype['tenantCustomQuota'] = undefined;

/**
 * The due date.
 * @member {Date} dueDate
 */
QuotaDto.prototype['dueDate'] = undefined;






export default QuotaDto;

