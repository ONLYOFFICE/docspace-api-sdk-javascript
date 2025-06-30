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
import CurrentLicenseInfo from './CurrentLicenseInfo';

/**
 * The PaymentSettingsDto model module.
 * @module models/PaymentSettingsDto
 * @version 3.2.0
 */
class PaymentSettingsDto {
    /**
     * Constructs a new <code>PaymentSettingsDto</code>.
     * The payment settings parameters.
     * @alias module:models/PaymentSettingsDto
     */
    constructor() { 
        
        PaymentSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PaymentSettingsDto} obj Optional instance to populate.
     * @return {module:models/PaymentSettingsDto} The populated <code>PaymentSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentSettingsDto();

            if (data.hasOwnProperty('salesEmail')) {
                obj['salesEmail'] = ApiClient.convertToType(data['salesEmail'], 'String');
            }
            if (data.hasOwnProperty('feedbackAndSupportUrl')) {
                obj['feedbackAndSupportUrl'] = ApiClient.convertToType(data['feedbackAndSupportUrl'], 'String');
            }
            if (data.hasOwnProperty('buyUrl')) {
                obj['buyUrl'] = ApiClient.convertToType(data['buyUrl'], 'String');
            }
            if (data.hasOwnProperty('standalone')) {
                obj['standalone'] = ApiClient.convertToType(data['standalone'], 'Boolean');
            }
            if (data.hasOwnProperty('currentLicense')) {
                obj['currentLicense'] = CurrentLicenseInfo.constructFromObject(data['currentLicense']);
            }
            if (data.hasOwnProperty('max')) {
                obj['max'] = ApiClient.convertToType(data['max'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentSettingsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['salesEmail'] && !(typeof data['salesEmail'] === 'string' || data['salesEmail'] instanceof String)) {
            throw new Error("Expected the field `salesEmail` to be a primitive type in the JSON string but got " + data['salesEmail']);
        }
        // ensure the json data is a string
        if (data['feedbackAndSupportUrl'] && !(typeof data['feedbackAndSupportUrl'] === 'string' || data['feedbackAndSupportUrl'] instanceof String)) {
            throw new Error("Expected the field `feedbackAndSupportUrl` to be a primitive type in the JSON string but got " + data['feedbackAndSupportUrl']);
        }
        // ensure the json data is a string
        if (data['buyUrl'] && !(typeof data['buyUrl'] === 'string' || data['buyUrl'] instanceof String)) {
            throw new Error("Expected the field `buyUrl` to be a primitive type in the JSON string but got " + data['buyUrl']);
        }
        // validate the optional field `currentLicense`
        if (data['currentLicense']) { // data not null
          CurrentLicenseInfo.validateJSON(data['currentLicense']);
        }

        return true;
    }


}



/**
 * The email address for sales inquiries and support.
 * @member {String} salesEmail
 */
PaymentSettingsDto.prototype['salesEmail'] = undefined;

/**
 * The URL for accessing the feedback and support resources.
 * @member {String} feedbackAndSupportUrl
 */
PaymentSettingsDto.prototype['feedbackAndSupportUrl'] = undefined;

/**
 * The URL for purchasing or upgrading the product.
 * @member {String} buyUrl
 */
PaymentSettingsDto.prototype['buyUrl'] = undefined;

/**
 * Indicates whether the system is running in standalone mode.
 * @member {Boolean} standalone
 */
PaymentSettingsDto.prototype['standalone'] = undefined;

/**
 * @member {module:models/CurrentLicenseInfo} currentLicense
 */
PaymentSettingsDto.prototype['currentLicense'] = undefined;

/**
 * The maximum quota quantity.
 * @member {Number} max
 */
PaymentSettingsDto.prototype['max'] = undefined;






export default PaymentSettingsDto;

