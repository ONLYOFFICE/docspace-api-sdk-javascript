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
import DbTenantPartner from './DbTenantPartner';
import TenantIndustry from './TenantIndustry';
import TenantStatus from './TenantStatus';
import TenantTrustedDomainsType from './TenantTrustedDomainsType';

/**
 * The DbTenant model module.
 * @module models/DbTenant
 * @version 3.2.0
 */
class DbTenant {
    /**
     * Constructs a new <code>DbTenant</code>.
     * The database tenant parameters.
     * @alias module:models/DbTenant
     */
    constructor() { 
        
        DbTenant.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DbTenant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DbTenant} obj Optional instance to populate.
     * @return {module:models/DbTenant} The populated <code>DbTenant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DbTenant();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('alias')) {
                obj['alias'] = ApiClient.convertToType(data['alias'], 'String');
            }
            if (data.hasOwnProperty('mappedDomain')) {
                obj['mappedDomain'] = ApiClient.convertToType(data['mappedDomain'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('version_Changed')) {
                obj['version_Changed'] = ApiClient.convertToType(data['version_Changed'], 'Date');
            }
            if (data.hasOwnProperty('versionChanged')) {
                obj['versionChanged'] = ApiClient.convertToType(data['versionChanged'], 'Date');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('timeZone')) {
                obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'String');
            }
            if (data.hasOwnProperty('trustedDomainsRaw')) {
                obj['trustedDomainsRaw'] = ApiClient.convertToType(data['trustedDomainsRaw'], 'String');
            }
            if (data.hasOwnProperty('trustedDomainsEnabled')) {
                obj['trustedDomainsEnabled'] = TenantTrustedDomainsType.constructFromObject(data['trustedDomainsEnabled']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = TenantStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('statusChanged')) {
                obj['statusChanged'] = ApiClient.convertToType(data['statusChanged'], 'Date');
            }
            if (data.hasOwnProperty('statusChangedHack')) {
                obj['statusChangedHack'] = ApiClient.convertToType(data['statusChangedHack'], 'Date');
            }
            if (data.hasOwnProperty('creationDateTime')) {
                obj['creationDateTime'] = ApiClient.convertToType(data['creationDateTime'], 'Date');
            }
            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('paymentId')) {
                obj['paymentId'] = ApiClient.convertToType(data['paymentId'], 'String');
            }
            if (data.hasOwnProperty('industry')) {
                obj['industry'] = TenantIndustry.constructFromObject(data['industry']);
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
            }
            if (data.hasOwnProperty('calls')) {
                obj['calls'] = ApiClient.convertToType(data['calls'], 'Boolean');
            }
            if (data.hasOwnProperty('partner')) {
                obj['partner'] = DbTenantPartner.constructFromObject(data['partner']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DbTenant</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DbTenant</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['alias'] && !(typeof data['alias'] === 'string' || data['alias'] instanceof String)) {
            throw new Error("Expected the field `alias` to be a primitive type in the JSON string but got " + data['alias']);
        }
        // ensure the json data is a string
        if (data['mappedDomain'] && !(typeof data['mappedDomain'] === 'string' || data['mappedDomain'] instanceof String)) {
            throw new Error("Expected the field `mappedDomain` to be a primitive type in the JSON string but got " + data['mappedDomain']);
        }
        // ensure the json data is a string
        if (data['language'] && !(typeof data['language'] === 'string' || data['language'] instanceof String)) {
            throw new Error("Expected the field `language` to be a primitive type in the JSON string but got " + data['language']);
        }
        // ensure the json data is a string
        if (data['timeZone'] && !(typeof data['timeZone'] === 'string' || data['timeZone'] instanceof String)) {
            throw new Error("Expected the field `timeZone` to be a primitive type in the JSON string but got " + data['timeZone']);
        }
        // ensure the json data is a string
        if (data['trustedDomainsRaw'] && !(typeof data['trustedDomainsRaw'] === 'string' || data['trustedDomainsRaw'] instanceof String)) {
            throw new Error("Expected the field `trustedDomainsRaw` to be a primitive type in the JSON string but got " + data['trustedDomainsRaw']);
        }
        // ensure the json data is a string
        if (data['ownerId'] && !(typeof data['ownerId'] === 'string' || data['ownerId'] instanceof String)) {
            throw new Error("Expected the field `ownerId` to be a primitive type in the JSON string but got " + data['ownerId']);
        }
        // ensure the json data is a string
        if (data['paymentId'] && !(typeof data['paymentId'] === 'string' || data['paymentId'] instanceof String)) {
            throw new Error("Expected the field `paymentId` to be a primitive type in the JSON string but got " + data['paymentId']);
        }
        // validate the optional field `partner`
        if (data['partner']) { // data not null
          DbTenantPartner.validateJSON(data['partner']);
        }

        return true;
    }


}



/**
 * The tenant ID.
 * @member {Number} id
 */
DbTenant.prototype['id'] = undefined;

/**
 * The tenant name.
 * @member {String} name
 */
DbTenant.prototype['name'] = undefined;

/**
 * The tenant alias.
 * @member {String} alias
 */
DbTenant.prototype['alias'] = undefined;

/**
 * Mapped domain
 * @member {String} mappedDomain
 */
DbTenant.prototype['mappedDomain'] = undefined;

/**
 * The tenant version.
 * @member {Number} version
 */
DbTenant.prototype['version'] = undefined;

/**
 * The Version_changed field.
 * @member {Date} version_Changed
 */
DbTenant.prototype['version_Changed'] = undefined;

/**
 * The date and time when the version was changed.
 * @member {Date} versionChanged
 */
DbTenant.prototype['versionChanged'] = undefined;

/**
 * The tenant language.
 * @member {String} language
 */
DbTenant.prototype['language'] = undefined;

/**
 * The tenant time zone.
 * @member {String} timeZone
 */
DbTenant.prototype['timeZone'] = undefined;

/**
 * The tenant trusted domains raw.
 * @member {String} trustedDomainsRaw
 */
DbTenant.prototype['trustedDomainsRaw'] = undefined;

/**
 * @member {module:models/TenantTrustedDomainsType} trustedDomainsEnabled
 */
DbTenant.prototype['trustedDomainsEnabled'] = undefined;

/**
 * @member {module:models/TenantStatus} status
 */
DbTenant.prototype['status'] = undefined;

/**
 * The date and time when the tenant status was changed.
 * @member {Date} statusChanged
 */
DbTenant.prototype['statusChanged'] = undefined;

/**
 * The hacked date and time when the tenant status was changed.
 * @member {Date} statusChangedHack
 */
DbTenant.prototype['statusChangedHack'] = undefined;

/**
 * The tenant creation date.
 * @member {Date} creationDateTime
 */
DbTenant.prototype['creationDateTime'] = undefined;

/**
 * The tenant owner ID.
 * @member {String} ownerId
 */
DbTenant.prototype['ownerId'] = undefined;

/**
 * The tenant payment ID.
 * @member {String} paymentId
 */
DbTenant.prototype['paymentId'] = undefined;

/**
 * @member {module:models/TenantIndustry} industry
 */
DbTenant.prototype['industry'] = undefined;

/**
 * The date and time when the tenant was last modified.
 * @member {Date} lastModified
 */
DbTenant.prototype['lastModified'] = undefined;

/**
 * Specifies if the calls are available for the current tenant or not.
 * @member {Boolean} calls
 */
DbTenant.prototype['calls'] = undefined;

/**
 * @member {module:models/DbTenantPartner} partner
 */
DbTenant.prototype['partner'] = undefined;






export default DbTenant;

