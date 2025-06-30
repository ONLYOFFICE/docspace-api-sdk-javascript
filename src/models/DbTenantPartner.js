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
 * The DbTenantPartner model module.
 * @module models/DbTenantPartner
 * @version 3.2.0
 */
class DbTenantPartner {
    /**
     * Constructs a new <code>DbTenantPartner</code>.
     * The database tenant partner parameters.
     * @alias module:models/DbTenantPartner
     */
    constructor() { 
        
        DbTenantPartner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DbTenantPartner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DbTenantPartner} obj Optional instance to populate.
     * @return {module:models/DbTenantPartner} The populated <code>DbTenantPartner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DbTenantPartner();

            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Number');
            }
            if (data.hasOwnProperty('partnerId')) {
                obj['partnerId'] = ApiClient.convertToType(data['partnerId'], 'String');
            }
            if (data.hasOwnProperty('affiliateId')) {
                obj['affiliateId'] = ApiClient.convertToType(data['affiliateId'], 'String');
            }
            if (data.hasOwnProperty('campaign')) {
                obj['campaign'] = ApiClient.convertToType(data['campaign'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DbTenantPartner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DbTenantPartner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['partnerId'] && !(typeof data['partnerId'] === 'string' || data['partnerId'] instanceof String)) {
            throw new Error("Expected the field `partnerId` to be a primitive type in the JSON string but got " + data['partnerId']);
        }
        // ensure the json data is a string
        if (data['affiliateId'] && !(typeof data['affiliateId'] === 'string' || data['affiliateId'] instanceof String)) {
            throw new Error("Expected the field `affiliateId` to be a primitive type in the JSON string but got " + data['affiliateId']);
        }
        // ensure the json data is a string
        if (data['campaign'] && !(typeof data['campaign'] === 'string' || data['campaign'] instanceof String)) {
            throw new Error("Expected the field `campaign` to be a primitive type in the JSON string but got " + data['campaign']);
        }

        return true;
    }


}



/**
 * The tenant ID.
 * @member {Number} tenantId
 */
DbTenantPartner.prototype['tenantId'] = undefined;

/**
 * The partner ID.
 * @member {String} partnerId
 */
DbTenantPartner.prototype['partnerId'] = undefined;

/**
 * The affiliate ID.
 * @member {String} affiliateId
 */
DbTenantPartner.prototype['affiliateId'] = undefined;

/**
 * The tenant partner campaign.
 * @member {String} campaign
 */
DbTenantPartner.prototype['campaign'] = undefined;






export default DbTenantPartner;

