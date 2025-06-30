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
 * The SsoCertificate model module.
 * @module models/SsoCertificate
 * @version 3.2.0
 */
class SsoCertificate {
    /**
     * Constructs a new <code>SsoCertificate</code>.
     * The SSO certificate parameters.
     * @alias module:models/SsoCertificate
     */
    constructor() { 
        
        SsoCertificate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SsoCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SsoCertificate} obj Optional instance to populate.
     * @return {module:models/SsoCertificate} The populated <code>SsoCertificate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SsoCertificate();

            if (data.hasOwnProperty('selfSigned')) {
                obj['selfSigned'] = ApiClient.convertToType(data['selfSigned'], 'Boolean');
            }
            if (data.hasOwnProperty('crt')) {
                obj['crt'] = ApiClient.convertToType(data['crt'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('domainName')) {
                obj['domainName'] = ApiClient.convertToType(data['domainName'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('expiredDate')) {
                obj['expiredDate'] = ApiClient.convertToType(data['expiredDate'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SsoCertificate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SsoCertificate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['crt'] && !(typeof data['crt'] === 'string' || data['crt'] instanceof String)) {
            throw new Error("Expected the field `crt` to be a primitive type in the JSON string but got " + data['crt']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['action'] && !(typeof data['action'] === 'string' || data['action'] instanceof String)) {
            throw new Error("Expected the field `action` to be a primitive type in the JSON string but got " + data['action']);
        }
        // ensure the json data is a string
        if (data['domainName'] && !(typeof data['domainName'] === 'string' || data['domainName'] instanceof String)) {
            throw new Error("Expected the field `domainName` to be a primitive type in the JSON string but got " + data['domainName']);
        }

        return true;
    }


}



/**
 * Specifies if a certificate is self-signed or not.
 * @member {Boolean} selfSigned
 */
SsoCertificate.prototype['selfSigned'] = undefined;

/**
 * The CRT certificate file.
 * @member {String} crt
 */
SsoCertificate.prototype['crt'] = undefined;

/**
 * The certificate key.
 * @member {String} key
 */
SsoCertificate.prototype['key'] = undefined;

/**
 * The certificate action.
 * @member {String} action
 */
SsoCertificate.prototype['action'] = undefined;

/**
 * The certificate domain name.
 * @member {String} domainName
 */
SsoCertificate.prototype['domainName'] = undefined;

/**
 * The certificate start date.
 * @member {Date} startDate
 */
SsoCertificate.prototype['startDate'] = undefined;

/**
 * The certificate expiration date.
 * @member {Date} expiredDate
 */
SsoCertificate.prototype['expiredDate'] = undefined;






export default SsoCertificate;

