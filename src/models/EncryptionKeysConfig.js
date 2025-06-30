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
 * The EncryptionKeysConfig model module.
 * @module models/EncryptionKeysConfig
 * @version 3.2.0
 */
class EncryptionKeysConfig {
    /**
     * Constructs a new <code>EncryptionKeysConfig</code>.
     * The encryption keys of the editor configuration.
     * @alias module:models/EncryptionKeysConfig
     */
    constructor() { 
        
        EncryptionKeysConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EncryptionKeysConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EncryptionKeysConfig} obj Optional instance to populate.
     * @return {module:models/EncryptionKeysConfig} The populated <code>EncryptionKeysConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptionKeysConfig();

            if (data.hasOwnProperty('cryptoEngineId')) {
                obj['cryptoEngineId'] = ApiClient.convertToType(data['cryptoEngineId'], 'String');
            }
            if (data.hasOwnProperty('privateKeyEnc')) {
                obj['privateKeyEnc'] = ApiClient.convertToType(data['privateKeyEnc'], 'String');
            }
            if (data.hasOwnProperty('publicKey')) {
                obj['publicKey'] = ApiClient.convertToType(data['publicKey'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EncryptionKeysConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EncryptionKeysConfig</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cryptoEngineId'] && !(typeof data['cryptoEngineId'] === 'string' || data['cryptoEngineId'] instanceof String)) {
            throw new Error("Expected the field `cryptoEngineId` to be a primitive type in the JSON string but got " + data['cryptoEngineId']);
        }
        // ensure the json data is a string
        if (data['privateKeyEnc'] && !(typeof data['privateKeyEnc'] === 'string' || data['privateKeyEnc'] instanceof String)) {
            throw new Error("Expected the field `privateKeyEnc` to be a primitive type in the JSON string but got " + data['privateKeyEnc']);
        }
        // ensure the json data is a string
        if (data['publicKey'] && !(typeof data['publicKey'] === 'string' || data['publicKey'] instanceof String)) {
            throw new Error("Expected the field `publicKey` to be a primitive type in the JSON string but got " + data['publicKey']);
        }

        return true;
    }


}



/**
 * The crypto engine ID of the encryption key.
 * @member {String} cryptoEngineId
 */
EncryptionKeysConfig.prototype['cryptoEngineId'] = undefined;

/**
 * The private key.
 * @member {String} privateKeyEnc
 */
EncryptionKeysConfig.prototype['privateKeyEnc'] = undefined;

/**
 * The public key.
 * @member {String} publicKey
 */
EncryptionKeysConfig.prototype['publicKey'] = undefined;






export default EncryptionKeysConfig;

