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
 * The SmtpSettingsDto model module.
 * @module models/SmtpSettingsDto
 * @version 3.2.0
 */
class SmtpSettingsDto {
    /**
     * Constructs a new <code>SmtpSettingsDto</code>.
     * The SMTP settings parameters.
     * @alias module:models/SmtpSettingsDto
     */
    constructor() { 
        
        SmtpSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SmtpSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SmtpSettingsDto} obj Optional instance to populate.
     * @return {module:models/SmtpSettingsDto} The populated <code>SmtpSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmtpSettingsDto();

            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('senderAddress')) {
                obj['senderAddress'] = ApiClient.convertToType(data['senderAddress'], 'String');
            }
            if (data.hasOwnProperty('senderDisplayName')) {
                obj['senderDisplayName'] = ApiClient.convertToType(data['senderDisplayName'], 'String');
            }
            if (data.hasOwnProperty('credentialsUserName')) {
                obj['credentialsUserName'] = ApiClient.convertToType(data['credentialsUserName'], 'String');
            }
            if (data.hasOwnProperty('credentialsUserPassword')) {
                obj['credentialsUserPassword'] = ApiClient.convertToType(data['credentialsUserPassword'], 'String');
            }
            if (data.hasOwnProperty('enableSSL')) {
                obj['enableSSL'] = ApiClient.convertToType(data['enableSSL'], 'Boolean');
            }
            if (data.hasOwnProperty('enableAuth')) {
                obj['enableAuth'] = ApiClient.convertToType(data['enableAuth'], 'Boolean');
            }
            if (data.hasOwnProperty('useNtlm')) {
                obj['useNtlm'] = ApiClient.convertToType(data['useNtlm'], 'Boolean');
            }
            if (data.hasOwnProperty('isDefaultSettings')) {
                obj['isDefaultSettings'] = ApiClient.convertToType(data['isDefaultSettings'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SmtpSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SmtpSettingsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
            throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
        }
        // ensure the json data is a string
        if (data['senderAddress'] && !(typeof data['senderAddress'] === 'string' || data['senderAddress'] instanceof String)) {
            throw new Error("Expected the field `senderAddress` to be a primitive type in the JSON string but got " + data['senderAddress']);
        }
        // ensure the json data is a string
        if (data['senderDisplayName'] && !(typeof data['senderDisplayName'] === 'string' || data['senderDisplayName'] instanceof String)) {
            throw new Error("Expected the field `senderDisplayName` to be a primitive type in the JSON string but got " + data['senderDisplayName']);
        }
        // ensure the json data is a string
        if (data['credentialsUserName'] && !(typeof data['credentialsUserName'] === 'string' || data['credentialsUserName'] instanceof String)) {
            throw new Error("Expected the field `credentialsUserName` to be a primitive type in the JSON string but got " + data['credentialsUserName']);
        }
        // ensure the json data is a string
        if (data['credentialsUserPassword'] && !(typeof data['credentialsUserPassword'] === 'string' || data['credentialsUserPassword'] instanceof String)) {
            throw new Error("Expected the field `credentialsUserPassword` to be a primitive type in the JSON string but got " + data['credentialsUserPassword']);
        }

        return true;
    }


}



/**
 * The SMTP host.
 * @member {String} host
 */
SmtpSettingsDto.prototype['host'] = undefined;

/**
 * The SMTP port.
 * @member {Number} port
 */
SmtpSettingsDto.prototype['port'] = undefined;

/**
 * The sender address.
 * @member {String} senderAddress
 */
SmtpSettingsDto.prototype['senderAddress'] = undefined;

/**
 * The sender display name.
 * @member {String} senderDisplayName
 */
SmtpSettingsDto.prototype['senderDisplayName'] = undefined;

/**
 * The credentials username.
 * @member {String} credentialsUserName
 */
SmtpSettingsDto.prototype['credentialsUserName'] = undefined;

/**
 * The credentials user password.
 * @member {String} credentialsUserPassword
 */
SmtpSettingsDto.prototype['credentialsUserPassword'] = undefined;

/**
 * Specifies whether the SSL is enabled or not.
 * @member {Boolean} enableSSL
 */
SmtpSettingsDto.prototype['enableSSL'] = undefined;

/**
 * Specifies whether the authentication is enabled or not.
 * @member {Boolean} enableAuth
 */
SmtpSettingsDto.prototype['enableAuth'] = undefined;

/**
 * Specifies whether to use NTLM or not.
 * @member {Boolean} useNtlm
 */
SmtpSettingsDto.prototype['useNtlm'] = undefined;

/**
 * Specifies if the current settings are default or not.
 * @member {Boolean} isDefaultSettings
 */
SmtpSettingsDto.prototype['isDefaultSettings'] = undefined;






export default SmtpSettingsDto;

