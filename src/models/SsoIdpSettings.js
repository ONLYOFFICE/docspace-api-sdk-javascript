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
 * The SsoIdpSettings model module.
 * @module models/SsoIdpSettings
 * @version 3.2.0
 */
class SsoIdpSettings {
    /**
     * Constructs a new <code>SsoIdpSettings</code>.
     * The SSO IdP settings.
     * @alias module:models/SsoIdpSettings
     */
    constructor() { 
        
        SsoIdpSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SsoIdpSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SsoIdpSettings} obj Optional instance to populate.
     * @return {module:models/SsoIdpSettings} The populated <code>SsoIdpSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SsoIdpSettings();

            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('ssoUrl')) {
                obj['ssoUrl'] = ApiClient.convertToType(data['ssoUrl'], 'String');
            }
            if (data.hasOwnProperty('ssoBinding')) {
                obj['ssoBinding'] = ApiClient.convertToType(data['ssoBinding'], 'String');
            }
            if (data.hasOwnProperty('sloUrl')) {
                obj['sloUrl'] = ApiClient.convertToType(data['sloUrl'], 'String');
            }
            if (data.hasOwnProperty('sloBinding')) {
                obj['sloBinding'] = ApiClient.convertToType(data['sloBinding'], 'String');
            }
            if (data.hasOwnProperty('nameIdFormat')) {
                obj['nameIdFormat'] = ApiClient.convertToType(data['nameIdFormat'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SsoIdpSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SsoIdpSettings</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['entityId'] && !(typeof data['entityId'] === 'string' || data['entityId'] instanceof String)) {
            throw new Error("Expected the field `entityId` to be a primitive type in the JSON string but got " + data['entityId']);
        }
        // ensure the json data is a string
        if (data['ssoUrl'] && !(typeof data['ssoUrl'] === 'string' || data['ssoUrl'] instanceof String)) {
            throw new Error("Expected the field `ssoUrl` to be a primitive type in the JSON string but got " + data['ssoUrl']);
        }
        // ensure the json data is a string
        if (data['ssoBinding'] && !(typeof data['ssoBinding'] === 'string' || data['ssoBinding'] instanceof String)) {
            throw new Error("Expected the field `ssoBinding` to be a primitive type in the JSON string but got " + data['ssoBinding']);
        }
        // ensure the json data is a string
        if (data['sloUrl'] && !(typeof data['sloUrl'] === 'string' || data['sloUrl'] instanceof String)) {
            throw new Error("Expected the field `sloUrl` to be a primitive type in the JSON string but got " + data['sloUrl']);
        }
        // ensure the json data is a string
        if (data['sloBinding'] && !(typeof data['sloBinding'] === 'string' || data['sloBinding'] instanceof String)) {
            throw new Error("Expected the field `sloBinding` to be a primitive type in the JSON string but got " + data['sloBinding']);
        }
        // ensure the json data is a string
        if (data['nameIdFormat'] && !(typeof data['nameIdFormat'] === 'string' || data['nameIdFormat'] instanceof String)) {
            throw new Error("Expected the field `nameIdFormat` to be a primitive type in the JSON string but got " + data['nameIdFormat']);
        }

        return true;
    }


}



/**
 * The entity ID.
 * @member {String} entityId
 */
SsoIdpSettings.prototype['entityId'] = undefined;

/**
 * The SSO URL.
 * @member {String} ssoUrl
 */
SsoIdpSettings.prototype['ssoUrl'] = undefined;

/**
 * The SSO binding.
 * @member {String} ssoBinding
 */
SsoIdpSettings.prototype['ssoBinding'] = undefined;

/**
 * The SLO URL.
 * @member {String} sloUrl
 */
SsoIdpSettings.prototype['sloUrl'] = undefined;

/**
 * The SLO binding.
 * @member {String} sloBinding
 */
SsoIdpSettings.prototype['sloBinding'] = undefined;

/**
 * The name ID format.
 * @member {String} nameIdFormat
 */
SsoIdpSettings.prototype['nameIdFormat'] = undefined;






export default SsoIdpSettings;

