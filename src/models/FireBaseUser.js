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
import DbTenant from './DbTenant';

/**
 * The FireBaseUser model module.
 * @module models/FireBaseUser
 * @version 3.2.0
 */
class FireBaseUser {
    /**
     * Constructs a new <code>FireBaseUser</code>.
     * The Firebase user parameters.
     * @alias module:models/FireBaseUser
     */
    constructor() { 
        
        FireBaseUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FireBaseUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FireBaseUser} obj Optional instance to populate.
     * @return {module:models/FireBaseUser} The populated <code>FireBaseUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FireBaseUser();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Number');
            }
            if (data.hasOwnProperty('firebaseDeviceToken')) {
                obj['firebaseDeviceToken'] = ApiClient.convertToType(data['firebaseDeviceToken'], 'String');
            }
            if (data.hasOwnProperty('application')) {
                obj['application'] = ApiClient.convertToType(data['application'], 'String');
            }
            if (data.hasOwnProperty('isSubscribed')) {
                obj['isSubscribed'] = ApiClient.convertToType(data['isSubscribed'], 'Boolean');
            }
            if (data.hasOwnProperty('tenant')) {
                obj['tenant'] = DbTenant.constructFromObject(data['tenant']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FireBaseUser</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FireBaseUser</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['userId'] && !(typeof data['userId'] === 'string' || data['userId'] instanceof String)) {
            throw new Error("Expected the field `userId` to be a primitive type in the JSON string but got " + data['userId']);
        }
        // ensure the json data is a string
        if (data['firebaseDeviceToken'] && !(typeof data['firebaseDeviceToken'] === 'string' || data['firebaseDeviceToken'] instanceof String)) {
            throw new Error("Expected the field `firebaseDeviceToken` to be a primitive type in the JSON string but got " + data['firebaseDeviceToken']);
        }
        // ensure the json data is a string
        if (data['application'] && !(typeof data['application'] === 'string' || data['application'] instanceof String)) {
            throw new Error("Expected the field `application` to be a primitive type in the JSON string but got " + data['application']);
        }
        // validate the optional field `tenant`
        if (data['tenant']) { // data not null
          DbTenant.validateJSON(data['tenant']);
        }

        return true;
    }


}



/**
 * The Firebase user ID.
 * @member {Number} id
 */
FireBaseUser.prototype['id'] = undefined;

/**
 * The user ID.
 * @member {String} userId
 */
FireBaseUser.prototype['userId'] = undefined;

/**
 * The tenant ID.
 * @member {Number} tenantId
 */
FireBaseUser.prototype['tenantId'] = undefined;

/**
 * The Firebase device token.
 * @member {String} firebaseDeviceToken
 */
FireBaseUser.prototype['firebaseDeviceToken'] = undefined;

/**
 * The Firebase application.
 * @member {String} application
 */
FireBaseUser.prototype['application'] = undefined;

/**
 * Specifies if the user is subscribed to the push notifications or not.
 * @member {Boolean} isSubscribed
 */
FireBaseUser.prototype['isSubscribed'] = undefined;

/**
 * @member {module:models/DbTenant} tenant
 */
FireBaseUser.prototype['tenant'] = undefined;






export default FireBaseUser;

