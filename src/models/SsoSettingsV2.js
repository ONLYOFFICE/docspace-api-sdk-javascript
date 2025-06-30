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
import SsoCertificate from './SsoCertificate';
import SsoFieldMapping from './SsoFieldMapping';
import SsoIdpCertificateAdvanced from './SsoIdpCertificateAdvanced';
import SsoIdpSettings from './SsoIdpSettings';
import SsoSpCertificateAdvanced from './SsoSpCertificateAdvanced';

/**
 * The SsoSettingsV2 model module.
 * @module models/SsoSettingsV2
 * @version 3.2.0
 */
class SsoSettingsV2 {
    /**
     * Constructs a new <code>SsoSettingsV2</code>.
     * The SSO portal settings.
     * @alias module:models/SsoSettingsV2
     */
    constructor() { 
        
        SsoSettingsV2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SsoSettingsV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SsoSettingsV2} obj Optional instance to populate.
     * @return {module:models/SsoSettingsV2} The populated <code>SsoSettingsV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SsoSettingsV2();

            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
            }
            if (data.hasOwnProperty('enableSso')) {
                obj['enableSso'] = ApiClient.convertToType(data['enableSso'], 'Boolean');
            }
            if (data.hasOwnProperty('idpSettings')) {
                obj['idpSettings'] = SsoIdpSettings.constructFromObject(data['idpSettings']);
            }
            if (data.hasOwnProperty('idpCertificates')) {
                obj['idpCertificates'] = ApiClient.convertToType(data['idpCertificates'], [SsoCertificate]);
            }
            if (data.hasOwnProperty('idpCertificateAdvanced')) {
                obj['idpCertificateAdvanced'] = SsoIdpCertificateAdvanced.constructFromObject(data['idpCertificateAdvanced']);
            }
            if (data.hasOwnProperty('spLoginLabel')) {
                obj['spLoginLabel'] = ApiClient.convertToType(data['spLoginLabel'], 'String');
            }
            if (data.hasOwnProperty('spCertificates')) {
                obj['spCertificates'] = ApiClient.convertToType(data['spCertificates'], [SsoCertificate]);
            }
            if (data.hasOwnProperty('spCertificateAdvanced')) {
                obj['spCertificateAdvanced'] = SsoSpCertificateAdvanced.constructFromObject(data['spCertificateAdvanced']);
            }
            if (data.hasOwnProperty('fieldMapping')) {
                obj['fieldMapping'] = SsoFieldMapping.constructFromObject(data['fieldMapping']);
            }
            if (data.hasOwnProperty('hideAuthPage')) {
                obj['hideAuthPage'] = ApiClient.convertToType(data['hideAuthPage'], 'Boolean');
            }
            if (data.hasOwnProperty('usersType')) {
                obj['usersType'] = ApiClient.convertToType(data['usersType'], 'Number');
            }
            if (data.hasOwnProperty('disableEmailVerification')) {
                obj['disableEmailVerification'] = ApiClient.convertToType(data['disableEmailVerification'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SsoSettingsV2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SsoSettingsV2</code>.
     */
    static validateJSON(data) {
        // validate the optional field `idpSettings`
        if (data['idpSettings']) { // data not null
          SsoIdpSettings.validateJSON(data['idpSettings']);
        }
        if (data['idpCertificates']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['idpCertificates'])) {
                throw new Error("Expected the field `idpCertificates` to be an array in the JSON data but got " + data['idpCertificates']);
            }
            // validate the optional field `idpCertificates` (array)
            for (const item of data['idpCertificates']) {
                SsoCertificate.validateJSON(item);
            };
        }
        // validate the optional field `idpCertificateAdvanced`
        if (data['idpCertificateAdvanced']) { // data not null
          SsoIdpCertificateAdvanced.validateJSON(data['idpCertificateAdvanced']);
        }
        // ensure the json data is a string
        if (data['spLoginLabel'] && !(typeof data['spLoginLabel'] === 'string' || data['spLoginLabel'] instanceof String)) {
            throw new Error("Expected the field `spLoginLabel` to be a primitive type in the JSON string but got " + data['spLoginLabel']);
        }
        if (data['spCertificates']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['spCertificates'])) {
                throw new Error("Expected the field `spCertificates` to be an array in the JSON data but got " + data['spCertificates']);
            }
            // validate the optional field `spCertificates` (array)
            for (const item of data['spCertificates']) {
                SsoCertificate.validateJSON(item);
            };
        }
        // validate the optional field `spCertificateAdvanced`
        if (data['spCertificateAdvanced']) { // data not null
          SsoSpCertificateAdvanced.validateJSON(data['spCertificateAdvanced']);
        }
        // validate the optional field `fieldMapping`
        if (data['fieldMapping']) { // data not null
          SsoFieldMapping.validateJSON(data['fieldMapping']);
        }

        return true;
    }


}



/**
 * @member {Date} lastModified
 */
SsoSettingsV2.prototype['lastModified'] = undefined;

/**
 * Specifies if the SSO settings are enabled or not.
 * @member {Boolean} enableSso
 */
SsoSettingsV2.prototype['enableSso'] = undefined;

/**
 * @member {module:models/SsoIdpSettings} idpSettings
 */
SsoSettingsV2.prototype['idpSettings'] = undefined;

/**
 * The list of the IdP certificates.
 * @member {Array.<module:models/SsoCertificate>} idpCertificates
 */
SsoSettingsV2.prototype['idpCertificates'] = undefined;

/**
 * @member {module:models/SsoIdpCertificateAdvanced} idpCertificateAdvanced
 */
SsoSettingsV2.prototype['idpCertificateAdvanced'] = undefined;

/**
 * The SP login label.
 * @member {String} spLoginLabel
 */
SsoSettingsV2.prototype['spLoginLabel'] = undefined;

/**
 * The list of the SP certificates.
 * @member {Array.<module:models/SsoCertificate>} spCertificates
 */
SsoSettingsV2.prototype['spCertificates'] = undefined;

/**
 * @member {module:models/SsoSpCertificateAdvanced} spCertificateAdvanced
 */
SsoSettingsV2.prototype['spCertificateAdvanced'] = undefined;

/**
 * @member {module:models/SsoFieldMapping} fieldMapping
 */
SsoSettingsV2.prototype['fieldMapping'] = undefined;

/**
 * Specifies if the authentication page will be hidden or not.
 * @member {Boolean} hideAuthPage
 */
SsoSettingsV2.prototype['hideAuthPage'] = undefined;

/**
 * The user type.
 * @member {Number} usersType
 */
SsoSettingsV2.prototype['usersType'] = undefined;

/**
 * Specifies if the email verification is disabled or not.
 * @member {Boolean} disableEmailVerification
 */
SsoSettingsV2.prototype['disableEmailVerification'] = undefined;






export default SsoSettingsV2;

