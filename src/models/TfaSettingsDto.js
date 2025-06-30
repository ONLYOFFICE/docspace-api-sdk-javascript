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
 * The TfaSettingsDto model module.
 * @module models/TfaSettingsDto
 * @version 3.2.0
 */
class TfaSettingsDto {
    /**
     * Constructs a new <code>TfaSettingsDto</code>.
     * The parameters representing the Two-Factor Authentication (TFA) configuration settings.
     * @alias module:models/TfaSettingsDto
     */
    constructor() { 
        
        TfaSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TfaSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TfaSettingsDto} obj Optional instance to populate.
     * @return {module:models/TfaSettingsDto} The populated <code>TfaSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TfaSettingsDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('avaliable')) {
                obj['avaliable'] = ApiClient.convertToType(data['avaliable'], 'Boolean');
            }
            if (data.hasOwnProperty('trustedIps')) {
                obj['trustedIps'] = ApiClient.convertToType(data['trustedIps'], ['String']);
            }
            if (data.hasOwnProperty('mandatoryUsers')) {
                obj['mandatoryUsers'] = ApiClient.convertToType(data['mandatoryUsers'], ['String']);
            }
            if (data.hasOwnProperty('mandatoryGroups')) {
                obj['mandatoryGroups'] = ApiClient.convertToType(data['mandatoryGroups'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TfaSettingsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TfaSettingsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['trustedIps'])) {
            throw new Error("Expected the field `trustedIps` to be an array in the JSON data but got " + data['trustedIps']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['mandatoryUsers'])) {
            throw new Error("Expected the field `mandatoryUsers` to be an array in the JSON data but got " + data['mandatoryUsers']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['mandatoryGroups'])) {
            throw new Error("Expected the field `mandatoryGroups` to be an array in the JSON data but got " + data['mandatoryGroups']);
        }

        return true;
    }


}



/**
 * The ID of the TFA configuration.
 * @member {String} id
 */
TfaSettingsDto.prototype['id'] = undefined;

/**
 * The display name or description of the TFA configuration.
 * @member {String} title
 */
TfaSettingsDto.prototype['title'] = undefined;

/**
 * Indicates whether the TFA configuration is currently active.
 * @member {Boolean} enabled
 */
TfaSettingsDto.prototype['enabled'] = undefined;

/**
 * Indicates whether the TFA configuration can be used.
 * @member {Boolean} avaliable
 */
TfaSettingsDto.prototype['avaliable'] = undefined;

/**
 * The list of IP addresses that are exempt from TFA requirements.
 * @member {Array.<String>} trustedIps
 */
TfaSettingsDto.prototype['trustedIps'] = undefined;

/**
 * The list of user IDs that are required to use TFA.
 * @member {Array.<String>} mandatoryUsers
 */
TfaSettingsDto.prototype['mandatoryUsers'] = undefined;

/**
 * The list of group IDs whose members are required to use TFA.
 * @member {Array.<String>} mandatoryGroups
 */
TfaSettingsDto.prototype['mandatoryGroups'] = undefined;






export default TfaSettingsDto;

