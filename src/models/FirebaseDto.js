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
 * The FirebaseDto model module.
 * @module models/FirebaseDto
 * @version 3.2.0
 */
class FirebaseDto {
    /**
     * Constructs a new <code>FirebaseDto</code>.
     * The Firebase parameters.
     * @alias module:models/FirebaseDto
     */
    constructor() { 
        
        FirebaseDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FirebaseDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FirebaseDto} obj Optional instance to populate.
     * @return {module:models/FirebaseDto} The populated <code>FirebaseDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FirebaseDto();

            if (data.hasOwnProperty('apiKey')) {
                obj['apiKey'] = ApiClient.convertToType(data['apiKey'], 'String');
            }
            if (data.hasOwnProperty('authDomain')) {
                obj['authDomain'] = ApiClient.convertToType(data['authDomain'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
            if (data.hasOwnProperty('storageBucket')) {
                obj['storageBucket'] = ApiClient.convertToType(data['storageBucket'], 'String');
            }
            if (data.hasOwnProperty('messagingSenderId')) {
                obj['messagingSenderId'] = ApiClient.convertToType(data['messagingSenderId'], 'String');
            }
            if (data.hasOwnProperty('appId')) {
                obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
            }
            if (data.hasOwnProperty('measurementId')) {
                obj['measurementId'] = ApiClient.convertToType(data['measurementId'], 'String');
            }
            if (data.hasOwnProperty('databaseURL')) {
                obj['databaseURL'] = ApiClient.convertToType(data['databaseURL'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FirebaseDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FirebaseDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['apiKey'] && !(typeof data['apiKey'] === 'string' || data['apiKey'] instanceof String)) {
            throw new Error("Expected the field `apiKey` to be a primitive type in the JSON string but got " + data['apiKey']);
        }
        // ensure the json data is a string
        if (data['authDomain'] && !(typeof data['authDomain'] === 'string' || data['authDomain'] instanceof String)) {
            throw new Error("Expected the field `authDomain` to be a primitive type in the JSON string but got " + data['authDomain']);
        }
        // ensure the json data is a string
        if (data['projectId'] && !(typeof data['projectId'] === 'string' || data['projectId'] instanceof String)) {
            throw new Error("Expected the field `projectId` to be a primitive type in the JSON string but got " + data['projectId']);
        }
        // ensure the json data is a string
        if (data['storageBucket'] && !(typeof data['storageBucket'] === 'string' || data['storageBucket'] instanceof String)) {
            throw new Error("Expected the field `storageBucket` to be a primitive type in the JSON string but got " + data['storageBucket']);
        }
        // ensure the json data is a string
        if (data['messagingSenderId'] && !(typeof data['messagingSenderId'] === 'string' || data['messagingSenderId'] instanceof String)) {
            throw new Error("Expected the field `messagingSenderId` to be a primitive type in the JSON string but got " + data['messagingSenderId']);
        }
        // ensure the json data is a string
        if (data['appId'] && !(typeof data['appId'] === 'string' || data['appId'] instanceof String)) {
            throw new Error("Expected the field `appId` to be a primitive type in the JSON string but got " + data['appId']);
        }
        // ensure the json data is a string
        if (data['measurementId'] && !(typeof data['measurementId'] === 'string' || data['measurementId'] instanceof String)) {
            throw new Error("Expected the field `measurementId` to be a primitive type in the JSON string but got " + data['measurementId']);
        }
        // ensure the json data is a string
        if (data['databaseURL'] && !(typeof data['databaseURL'] === 'string' || data['databaseURL'] instanceof String)) {
            throw new Error("Expected the field `databaseURL` to be a primitive type in the JSON string but got " + data['databaseURL']);
        }

        return true;
    }


}



/**
 * The Firebase API key.
 * @member {String} apiKey
 */
FirebaseDto.prototype['apiKey'] = undefined;

/**
 * The Firebase authentication domain.
 * @member {String} authDomain
 */
FirebaseDto.prototype['authDomain'] = undefined;

/**
 * The Firebase project ID.
 * @member {String} projectId
 */
FirebaseDto.prototype['projectId'] = undefined;

/**
 * The Firebase storage bucket.
 * @member {String} storageBucket
 */
FirebaseDto.prototype['storageBucket'] = undefined;

/**
 * The Firebase messaging sender ID.
 * @member {String} messagingSenderId
 */
FirebaseDto.prototype['messagingSenderId'] = undefined;

/**
 * The Firebase application ID.
 * @member {String} appId
 */
FirebaseDto.prototype['appId'] = undefined;

/**
 * The Firebase measurement ID.
 * @member {String} measurementId
 */
FirebaseDto.prototype['measurementId'] = undefined;

/**
 * The Firebase database URL.
 * @member {String} databaseURL
 */
FirebaseDto.prototype['databaseURL'] = undefined;






export default FirebaseDto;

