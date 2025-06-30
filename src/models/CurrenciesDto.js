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
 * The CurrenciesDto model module.
 * @module models/CurrenciesDto
 * @version 3.2.0
 */
class CurrenciesDto {
    /**
     * Constructs a new <code>CurrenciesDto</code>.
     * The currencies parameters.
     * @alias module:models/CurrenciesDto
     */
    constructor() { 
        
        CurrenciesDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrenciesDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CurrenciesDto} obj Optional instance to populate.
     * @return {module:models/CurrenciesDto} The populated <code>CurrenciesDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrenciesDto();

            if (data.hasOwnProperty('isoCountryCode')) {
                obj['isoCountryCode'] = ApiClient.convertToType(data['isoCountryCode'], 'String');
            }
            if (data.hasOwnProperty('isoCurrencySymbol')) {
                obj['isoCurrencySymbol'] = ApiClient.convertToType(data['isoCurrencySymbol'], 'String');
            }
            if (data.hasOwnProperty('currencyNativeName')) {
                obj['currencyNativeName'] = ApiClient.convertToType(data['currencyNativeName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CurrenciesDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CurrenciesDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['isoCountryCode'] && !(typeof data['isoCountryCode'] === 'string' || data['isoCountryCode'] instanceof String)) {
            throw new Error("Expected the field `isoCountryCode` to be a primitive type in the JSON string but got " + data['isoCountryCode']);
        }
        // ensure the json data is a string
        if (data['isoCurrencySymbol'] && !(typeof data['isoCurrencySymbol'] === 'string' || data['isoCurrencySymbol'] instanceof String)) {
            throw new Error("Expected the field `isoCurrencySymbol` to be a primitive type in the JSON string but got " + data['isoCurrencySymbol']);
        }
        // ensure the json data is a string
        if (data['currencyNativeName'] && !(typeof data['currencyNativeName'] === 'string' || data['currencyNativeName'] instanceof String)) {
            throw new Error("Expected the field `currencyNativeName` to be a primitive type in the JSON string but got " + data['currencyNativeName']);
        }

        return true;
    }


}



/**
 * The ISO country code.
 * @member {String} isoCountryCode
 */
CurrenciesDto.prototype['isoCountryCode'] = undefined;

/**
 * The ISO currency symbol.
 * @member {String} isoCurrencySymbol
 */
CurrenciesDto.prototype['isoCurrencySymbol'] = undefined;

/**
 * The currency native name.
 * @member {String} currencyNativeName
 */
CurrenciesDto.prototype['currencyNativeName'] = undefined;






export default CurrenciesDto;

