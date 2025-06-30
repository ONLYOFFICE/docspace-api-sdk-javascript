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
 * The CompanyWhiteLabelSettingsDto model module.
 * @module models/CompanyWhiteLabelSettingsDto
 * @version 3.2.0
 */
class CompanyWhiteLabelSettingsDto {
    /**
     * Constructs a new <code>CompanyWhiteLabelSettingsDto</code>.
     * The company white label settings.
     * @alias module:models/CompanyWhiteLabelSettingsDto
     */
    constructor() { 
        
        CompanyWhiteLabelSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyWhiteLabelSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CompanyWhiteLabelSettingsDto} obj Optional instance to populate.
     * @return {module:models/CompanyWhiteLabelSettingsDto} The populated <code>CompanyWhiteLabelSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyWhiteLabelSettingsDto();

            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('site')) {
                obj['site'] = ApiClient.convertToType(data['site'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('isLicensor')) {
                obj['isLicensor'] = ApiClient.convertToType(data['isLicensor'], 'Boolean');
            }
            if (data.hasOwnProperty('isDefault')) {
                obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CompanyWhiteLabelSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CompanyWhiteLabelSettingsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['companyName'] && !(typeof data['companyName'] === 'string' || data['companyName'] instanceof String)) {
            throw new Error("Expected the field `companyName` to be a primitive type in the JSON string but got " + data['companyName']);
        }
        // ensure the json data is a string
        if (data['site'] && !(typeof data['site'] === 'string' || data['site'] instanceof String)) {
            throw new Error("Expected the field `site` to be a primitive type in the JSON string but got " + data['site']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }

        return true;
    }


}



/**
 * The company name.
 * @member {String} companyName
 */
CompanyWhiteLabelSettingsDto.prototype['companyName'] = undefined;

/**
 * The company site.
 * @member {String} site
 */
CompanyWhiteLabelSettingsDto.prototype['site'] = undefined;

/**
 * The company email address.
 * @member {String} email
 */
CompanyWhiteLabelSettingsDto.prototype['email'] = undefined;

/**
 * The company address.
 * @member {String} address
 */
CompanyWhiteLabelSettingsDto.prototype['address'] = undefined;

/**
 * The company phone number.
 * @member {String} phone
 */
CompanyWhiteLabelSettingsDto.prototype['phone'] = undefined;

/**
 * Specifies if a company is a licensor or not.
 * @member {Boolean} isLicensor
 */
CompanyWhiteLabelSettingsDto.prototype['isLicensor'] = undefined;

/**
 * Specifies if company white label settings are default or not.
 * @member {Boolean} isDefault
 */
CompanyWhiteLabelSettingsDto.prototype['isDefault'] = undefined;






export default CompanyWhiteLabelSettingsDto;

