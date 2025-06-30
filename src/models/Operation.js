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
 * The Operation model module.
 * @module models/Operation
 * @version 3.2.0
 */
class Operation {
    /**
     * Constructs a new <code>Operation</code>.
     * Represents an operation.
     * @alias module:models/Operation
     */
    constructor() { 
        
        Operation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Operation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Operation} obj Optional instance to populate.
     * @return {module:models/Operation} The populated <code>Operation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Operation();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiClient.convertToType(data['service'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('serviceUnit')) {
                obj['serviceUnit'] = ApiClient.convertToType(data['serviceUnit'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('credit')) {
                obj['credit'] = ApiClient.convertToType(data['credit'], 'Number');
            }
            if (data.hasOwnProperty('withdrawal')) {
                obj['withdrawal'] = ApiClient.convertToType(data['withdrawal'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Operation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Operation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['service'] && !(typeof data['service'] === 'string' || data['service'] instanceof String)) {
            throw new Error("Expected the field `service` to be a primitive type in the JSON string but got " + data['service']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['serviceUnit'] && !(typeof data['serviceUnit'] === 'string' || data['serviceUnit'] instanceof String)) {
            throw new Error("Expected the field `serviceUnit` to be a primitive type in the JSON string but got " + data['serviceUnit']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }

        return true;
    }


}



/**
 * Date of the operation.
 * @member {Date} date
 */
Operation.prototype['date'] = undefined;

/**
 * Service related to the operation.
 * @member {String} service
 */
Operation.prototype['service'] = undefined;

/**
 * Brief description of the operation.
 * @member {String} description
 */
Operation.prototype['description'] = undefined;

/**
 * Unit of the service.
 * @member {String} serviceUnit
 */
Operation.prototype['serviceUnit'] = undefined;

/**
 * Quantity of the service used.
 * @member {Number} quantity
 */
Operation.prototype['quantity'] = undefined;

/**
 * The three-character ISO 4217 currency symbol of the operation.
 * @member {String} currency
 */
Operation.prototype['currency'] = undefined;

/**
 * Credit amount of the operation.
 * @member {Number} credit
 */
Operation.prototype['credit'] = undefined;

/**
 * Withdrawal amount of the operation.
 * @member {Number} withdrawal
 */
Operation.prototype['withdrawal'] = undefined;






export default Operation;

