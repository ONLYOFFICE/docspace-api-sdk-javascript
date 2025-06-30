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
import Quota from './Quota';
import TariffState from './TariffState';

/**
 * The Tariff model module.
 * @module models/Tariff
 * @version 3.2.0
 */
class Tariff {
    /**
     * Constructs a new <code>Tariff</code>.
     * The tariff parameters.
     * @alias module:models/Tariff
     */
    constructor() { 
        
        Tariff.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Tariff</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Tariff} obj Optional instance to populate.
     * @return {module:models/Tariff} The populated <code>Tariff</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tariff();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = TariffState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
            }
            if (data.hasOwnProperty('delayDueDate')) {
                obj['delayDueDate'] = ApiClient.convertToType(data['delayDueDate'], 'Date');
            }
            if (data.hasOwnProperty('licenseDate')) {
                obj['licenseDate'] = ApiClient.convertToType(data['licenseDate'], 'Date');
            }
            if (data.hasOwnProperty('customerId')) {
                obj['customerId'] = ApiClient.convertToType(data['customerId'], 'String');
            }
            if (data.hasOwnProperty('quotas')) {
                obj['quotas'] = ApiClient.convertToType(data['quotas'], [Quota]);
            }
            if (data.hasOwnProperty('overdueQuotas')) {
                obj['overdueQuotas'] = ApiClient.convertToType(data['overdueQuotas'], [Quota]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Tariff</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Tariff</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['customerId'] && !(typeof data['customerId'] === 'string' || data['customerId'] instanceof String)) {
            throw new Error("Expected the field `customerId` to be a primitive type in the JSON string but got " + data['customerId']);
        }
        if (data['quotas']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['quotas'])) {
                throw new Error("Expected the field `quotas` to be an array in the JSON data but got " + data['quotas']);
            }
            // validate the optional field `quotas` (array)
            for (const item of data['quotas']) {
                Quota.validateJSON(item);
            };
        }
        if (data['overdueQuotas']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['overdueQuotas'])) {
                throw new Error("Expected the field `overdueQuotas` to be an array in the JSON data but got " + data['overdueQuotas']);
            }
            // validate the optional field `overdueQuotas` (array)
            for (const item of data['overdueQuotas']) {
                Quota.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The tariff ID.
 * @member {Number} id
 */
Tariff.prototype['id'] = undefined;

/**
 * @member {module:models/TariffState} state
 */
Tariff.prototype['state'] = undefined;

/**
 * The tariff due date.
 * @member {Date} dueDate
 */
Tariff.prototype['dueDate'] = undefined;

/**
 * The tariff delay due date.
 * @member {Date} delayDueDate
 */
Tariff.prototype['delayDueDate'] = undefined;

/**
 * The tariff license date.
 * @member {Date} licenseDate
 */
Tariff.prototype['licenseDate'] = undefined;

/**
 * The tariff customer ID.
 * @member {String} customerId
 */
Tariff.prototype['customerId'] = undefined;

/**
 * The list of tariff quotas.
 * @member {Array.<module:models/Quota>} quotas
 */
Tariff.prototype['quotas'] = undefined;

/**
 * The list of overdue tariff quotas.
 * @member {Array.<module:models/Quota>} overdueQuotas
 */
Tariff.prototype['overdueQuotas'] = undefined;






export default Tariff;

