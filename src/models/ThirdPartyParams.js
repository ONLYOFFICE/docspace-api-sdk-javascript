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
import AuthData from './AuthData';

/**
 * The ThirdPartyParams model module.
 * @module models/ThirdPartyParams
 * @version 3.2.0
 */
class ThirdPartyParams {
    /**
     * Constructs a new <code>ThirdPartyParams</code>.
     * The third-party account parameters.
     * @alias module:models/ThirdPartyParams
     */
    constructor() { 
        
        ThirdPartyParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThirdPartyParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ThirdPartyParams} obj Optional instance to populate.
     * @return {module:models/ThirdPartyParams} The populated <code>ThirdPartyParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThirdPartyParams();

            if (data.hasOwnProperty('auth_data')) {
                obj['auth_data'] = AuthData.constructFromObject(data['auth_data']);
            }
            if (data.hasOwnProperty('corporate')) {
                obj['corporate'] = ApiClient.convertToType(data['corporate'], 'Boolean');
            }
            if (data.hasOwnProperty('roomsStorage')) {
                obj['roomsStorage'] = ApiClient.convertToType(data['roomsStorage'], 'Boolean');
            }
            if (data.hasOwnProperty('customer_title')) {
                obj['customer_title'] = ApiClient.convertToType(data['customer_title'], 'String');
            }
            if (data.hasOwnProperty('provider_id')) {
                obj['provider_id'] = ApiClient.convertToType(data['provider_id'], 'Number');
            }
            if (data.hasOwnProperty('provider_key')) {
                obj['provider_key'] = ApiClient.convertToType(data['provider_key'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ThirdPartyParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ThirdPartyParams</code>.
     */
    static validateJSON(data) {
        // validate the optional field `auth_data`
        if (data['auth_data']) { // data not null
          AuthData.validateJSON(data['auth_data']);
        }
        // ensure the json data is a string
        if (data['customer_title'] && !(typeof data['customer_title'] === 'string' || data['customer_title'] instanceof String)) {
            throw new Error("Expected the field `customer_title` to be a primitive type in the JSON string but got " + data['customer_title']);
        }
        // ensure the json data is a string
        if (data['provider_key'] && !(typeof data['provider_key'] === 'string' || data['provider_key'] instanceof String)) {
            throw new Error("Expected the field `provider_key` to be a primitive type in the JSON string but got " + data['provider_key']);
        }

        return true;
    }


}



/**
 * @member {module:models/AuthData} auth_data
 */
ThirdPartyParams.prototype['auth_data'] = undefined;

/**
 * Specifies if this is a corporate account or not.
 * @member {Boolean} corporate
 */
ThirdPartyParams.prototype['corporate'] = undefined;

/**
 * Specifies if this is a room storage or not.
 * @member {Boolean} roomsStorage
 */
ThirdPartyParams.prototype['roomsStorage'] = undefined;

/**
 * The customer title.
 * @member {String} customer_title
 */
ThirdPartyParams.prototype['customer_title'] = undefined;

/**
 * The provider ID.
 * @member {Number} provider_id
 */
ThirdPartyParams.prototype['provider_id'] = undefined;

/**
 * The provider key.
 * @member {String} provider_key
 */
ThirdPartyParams.prototype['provider_key'] = undefined;






export default ThirdPartyParams;

