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
 * The SsoSpCertificateAdvanced model module.
 * @module models/SsoSpCertificateAdvanced
 * @version 3.2.0
 */
class SsoSpCertificateAdvanced {
    /**
     * Constructs a new <code>SsoSpCertificateAdvanced</code>.
     * The SP advanced certificate parameters.
     * @alias module:models/SsoSpCertificateAdvanced
     */
    constructor() { 
        
        SsoSpCertificateAdvanced.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SsoSpCertificateAdvanced</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SsoSpCertificateAdvanced} obj Optional instance to populate.
     * @return {module:models/SsoSpCertificateAdvanced} The populated <code>SsoSpCertificateAdvanced</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SsoSpCertificateAdvanced();

            if (data.hasOwnProperty('signingAlgorithm')) {
                obj['signingAlgorithm'] = ApiClient.convertToType(data['signingAlgorithm'], 'String');
            }
            if (data.hasOwnProperty('signAuthRequests')) {
                obj['signAuthRequests'] = ApiClient.convertToType(data['signAuthRequests'], 'Boolean');
            }
            if (data.hasOwnProperty('signLogoutRequests')) {
                obj['signLogoutRequests'] = ApiClient.convertToType(data['signLogoutRequests'], 'Boolean');
            }
            if (data.hasOwnProperty('signLogoutResponses')) {
                obj['signLogoutResponses'] = ApiClient.convertToType(data['signLogoutResponses'], 'Boolean');
            }
            if (data.hasOwnProperty('encryptAlgorithm')) {
                obj['encryptAlgorithm'] = ApiClient.convertToType(data['encryptAlgorithm'], 'String');
            }
            if (data.hasOwnProperty('decryptAlgorithm')) {
                obj['decryptAlgorithm'] = ApiClient.convertToType(data['decryptAlgorithm'], 'String');
            }
            if (data.hasOwnProperty('encryptAssertions')) {
                obj['encryptAssertions'] = ApiClient.convertToType(data['encryptAssertions'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SsoSpCertificateAdvanced</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SsoSpCertificateAdvanced</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['signingAlgorithm'] && !(typeof data['signingAlgorithm'] === 'string' || data['signingAlgorithm'] instanceof String)) {
            throw new Error("Expected the field `signingAlgorithm` to be a primitive type in the JSON string but got " + data['signingAlgorithm']);
        }
        // ensure the json data is a string
        if (data['encryptAlgorithm'] && !(typeof data['encryptAlgorithm'] === 'string' || data['encryptAlgorithm'] instanceof String)) {
            throw new Error("Expected the field `encryptAlgorithm` to be a primitive type in the JSON string but got " + data['encryptAlgorithm']);
        }
        // ensure the json data is a string
        if (data['decryptAlgorithm'] && !(typeof data['decryptAlgorithm'] === 'string' || data['decryptAlgorithm'] instanceof String)) {
            throw new Error("Expected the field `decryptAlgorithm` to be a primitive type in the JSON string but got " + data['decryptAlgorithm']);
        }

        return true;
    }


}



/**
 * The certificate signing algorithm.
 * @member {String} signingAlgorithm
 */
SsoSpCertificateAdvanced.prototype['signingAlgorithm'] = undefined;

/**
 * Specifies if SP will sign the SAML authentication requests sent to IdP or not.
 * @member {Boolean} signAuthRequests
 */
SsoSpCertificateAdvanced.prototype['signAuthRequests'] = undefined;

/**
 * Specifies if SP will sign the SAML logout requests sent to IdP or not.
 * @member {Boolean} signLogoutRequests
 */
SsoSpCertificateAdvanced.prototype['signLogoutRequests'] = undefined;

/**
 * Specifies if SP will sign the SAML logout responses sent to IdP or not.
 * @member {Boolean} signLogoutResponses
 */
SsoSpCertificateAdvanced.prototype['signLogoutResponses'] = undefined;

/**
 * The certificate encryption algorithm.
 * @member {String} encryptAlgorithm
 */
SsoSpCertificateAdvanced.prototype['encryptAlgorithm'] = undefined;

/**
 * The certificate decryption algorithm.
 * @member {String} decryptAlgorithm
 */
SsoSpCertificateAdvanced.prototype['decryptAlgorithm'] = undefined;

/**
 * Specifies if the assertions will be encrypted or not.
 * @member {Boolean} encryptAssertions
 */
SsoSpCertificateAdvanced.prototype['encryptAssertions'] = undefined;






export default SsoSpCertificateAdvanced;

