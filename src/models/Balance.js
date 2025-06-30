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
import SubAccount from './SubAccount';

/**
 * The Balance model module.
 * @module models/Balance
 * @version 3.2.0
 */
class Balance {
    /**
     * Constructs a new <code>Balance</code>.
     * Represents a balance with an account number and a list of sub-accounts.
     * @alias module:models/Balance
     */
    constructor() { 
        
        Balance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Balance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/Balance} obj Optional instance to populate.
     * @return {module:models/Balance} The populated <code>Balance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Balance();

            if (data.hasOwnProperty('accountNumber')) {
                obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'Number');
            }
            if (data.hasOwnProperty('subAccounts')) {
                obj['subAccounts'] = ApiClient.convertToType(data['subAccounts'], [SubAccount]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Balance</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Balance</code>.
     */
    static validateJSON(data) {
        if (data['subAccounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['subAccounts'])) {
                throw new Error("Expected the field `subAccounts` to be an array in the JSON data but got " + data['subAccounts']);
            }
            // validate the optional field `subAccounts` (array)
            for (const item of data['subAccounts']) {
                SubAccount.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The account number.
 * @member {Number} accountNumber
 */
Balance.prototype['accountNumber'] = undefined;

/**
 * A list of sub-accounts.
 * @member {Array.<module:models/SubAccount>} subAccounts
 */
Balance.prototype['subAccounts'] = undefined;






export default Balance;

