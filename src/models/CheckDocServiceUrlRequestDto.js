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
 * The CheckDocServiceUrlRequestDto model module.
 * @module models/CheckDocServiceUrlRequestDto
 * @version 3.2.0
 */
class CheckDocServiceUrlRequestDto {
    /**
     * Constructs a new <code>CheckDocServiceUrlRequestDto</code>.
     * The request parameters for checking the document service location.
     * @alias module:models/CheckDocServiceUrlRequestDto
     */
    constructor() { 
        
        CheckDocServiceUrlRequestDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckDocServiceUrlRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CheckDocServiceUrlRequestDto} obj Optional instance to populate.
     * @return {module:models/CheckDocServiceUrlRequestDto} The populated <code>CheckDocServiceUrlRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckDocServiceUrlRequestDto();

            if (data.hasOwnProperty('docServiceUrl')) {
                obj['docServiceUrl'] = ApiClient.convertToType(data['docServiceUrl'], 'String');
            }
            if (data.hasOwnProperty('docServiceUrlInternal')) {
                obj['docServiceUrlInternal'] = ApiClient.convertToType(data['docServiceUrlInternal'], 'String');
            }
            if (data.hasOwnProperty('docServiceUrlPortal')) {
                obj['docServiceUrlPortal'] = ApiClient.convertToType(data['docServiceUrlPortal'], 'String');
            }
            if (data.hasOwnProperty('docServiceSignatureSecret')) {
                obj['docServiceSignatureSecret'] = ApiClient.convertToType(data['docServiceSignatureSecret'], 'String');
            }
            if (data.hasOwnProperty('docServiceSignatureHeader')) {
                obj['docServiceSignatureHeader'] = ApiClient.convertToType(data['docServiceSignatureHeader'], 'String');
            }
            if (data.hasOwnProperty('docServiceSslVerification')) {
                obj['docServiceSslVerification'] = ApiClient.convertToType(data['docServiceSslVerification'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CheckDocServiceUrlRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CheckDocServiceUrlRequestDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['docServiceUrl'] && !(typeof data['docServiceUrl'] === 'string' || data['docServiceUrl'] instanceof String)) {
            throw new Error("Expected the field `docServiceUrl` to be a primitive type in the JSON string but got " + data['docServiceUrl']);
        }
        // ensure the json data is a string
        if (data['docServiceUrlInternal'] && !(typeof data['docServiceUrlInternal'] === 'string' || data['docServiceUrlInternal'] instanceof String)) {
            throw new Error("Expected the field `docServiceUrlInternal` to be a primitive type in the JSON string but got " + data['docServiceUrlInternal']);
        }
        // ensure the json data is a string
        if (data['docServiceUrlPortal'] && !(typeof data['docServiceUrlPortal'] === 'string' || data['docServiceUrlPortal'] instanceof String)) {
            throw new Error("Expected the field `docServiceUrlPortal` to be a primitive type in the JSON string but got " + data['docServiceUrlPortal']);
        }
        // ensure the json data is a string
        if (data['docServiceSignatureSecret'] && !(typeof data['docServiceSignatureSecret'] === 'string' || data['docServiceSignatureSecret'] instanceof String)) {
            throw new Error("Expected the field `docServiceSignatureSecret` to be a primitive type in the JSON string but got " + data['docServiceSignatureSecret']);
        }
        // ensure the json data is a string
        if (data['docServiceSignatureHeader'] && !(typeof data['docServiceSignatureHeader'] === 'string' || data['docServiceSignatureHeader'] instanceof String)) {
            throw new Error("Expected the field `docServiceSignatureHeader` to be a primitive type in the JSON string but got " + data['docServiceSignatureHeader']);
        }

        return true;
    }


}



/**
 * The ONLYOFFICE Docs URL address.
 * @member {String} docServiceUrl
 */
CheckDocServiceUrlRequestDto.prototype['docServiceUrl'] = undefined;

/**
 * The ONLYOFFICE Docs URL address in the local private network.
 * @member {String} docServiceUrlInternal
 */
CheckDocServiceUrlRequestDto.prototype['docServiceUrlInternal'] = undefined;

/**
 * The ONLYOFFICE Docs URL address.
 * @member {String} docServiceUrlPortal
 */
CheckDocServiceUrlRequestDto.prototype['docServiceUrlPortal'] = undefined;

/**
 * The signature secret of the ONLYOFFICE Docs.
 * @member {String} docServiceSignatureSecret
 */
CheckDocServiceUrlRequestDto.prototype['docServiceSignatureSecret'] = undefined;

/**
 * The signature header of the ONLYOFFICE Docs.
 * @member {String} docServiceSignatureHeader
 */
CheckDocServiceUrlRequestDto.prototype['docServiceSignatureHeader'] = undefined;

/**
 * Specifies if the SSL verification of the ONLYOFFICE Docs is enabled or not.
 * @member {Boolean} docServiceSslVerification
 */
CheckDocServiceUrlRequestDto.prototype['docServiceSslVerification'] = undefined;






export default CheckDocServiceUrlRequestDto;

