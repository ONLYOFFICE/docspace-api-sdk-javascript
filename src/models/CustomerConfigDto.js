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
 * The CustomerConfigDto model module.
 * @module models/CustomerConfigDto
 * @version 3.2.0
 */
class CustomerConfigDto {
    /**
     * Constructs a new <code>CustomerConfigDto</code>.
     * The customer config parameters.
     * @alias module:models/CustomerConfigDto
     */
    constructor() { 
        
        CustomerConfigDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerConfigDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CustomerConfigDto} obj Optional instance to populate.
     * @return {module:models/CustomerConfigDto} The populated <code>CustomerConfigDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerConfigDto();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('logoDark')) {
                obj['logoDark'] = ApiClient.convertToType(data['logoDark'], 'String');
            }
            if (data.hasOwnProperty('mail')) {
                obj['mail'] = ApiClient.convertToType(data['mail'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('www')) {
                obj['www'] = ApiClient.convertToType(data['www'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomerConfigDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomerConfigDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['logo'] && !(typeof data['logo'] === 'string' || data['logo'] instanceof String)) {
            throw new Error("Expected the field `logo` to be a primitive type in the JSON string but got " + data['logo']);
        }
        // ensure the json data is a string
        if (data['logoDark'] && !(typeof data['logoDark'] === 'string' || data['logoDark'] instanceof String)) {
            throw new Error("Expected the field `logoDark` to be a primitive type in the JSON string but got " + data['logoDark']);
        }
        // ensure the json data is a string
        if (data['mail'] && !(typeof data['mail'] === 'string' || data['mail'] instanceof String)) {
            throw new Error("Expected the field `mail` to be a primitive type in the JSON string but got " + data['mail']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['www'] && !(typeof data['www'] === 'string' || data['www'] instanceof String)) {
            throw new Error("Expected the field `www` to be a primitive type in the JSON string but got " + data['www']);
        }

        return true;
    }


}



/**
 * The address of the customer configuration.
 * @member {String} address
 */
CustomerConfigDto.prototype['address'] = undefined;

/**
 * The logo of the customer configuration.
 * @member {String} logo
 */
CustomerConfigDto.prototype['logo'] = undefined;

/**
 * The dark logo of the customer configuration.
 * @member {String} logoDark
 */
CustomerConfigDto.prototype['logoDark'] = undefined;

/**
 * The mail address of the customer configuration.
 * @member {String} mail
 */
CustomerConfigDto.prototype['mail'] = undefined;

/**
 * The name of the customer configuration.
 * @member {String} name
 */
CustomerConfigDto.prototype['name'] = undefined;

/**
 * The site web address of the customer configuration.
 * @member {String} www
 */
CustomerConfigDto.prototype['www'] = undefined;






export default CustomerConfigDto;

