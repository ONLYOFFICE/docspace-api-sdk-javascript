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
import OAuth20Token from './OAuth20Token';

/**
 * The AuthData model module.
 * @module models/AuthData
 * @version 3.2.0
 */
class AuthData {
    /**
     * Constructs a new <code>AuthData</code>.
     * The authentication data.
     * @alias module:models/AuthData
     */
    constructor() { 
        
        AuthData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AuthData} obj Optional instance to populate.
     * @return {module:models/AuthData} The populated <code>AuthData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthData();

            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('rawToken')) {
                obj['rawToken'] = ApiClient.convertToType(data['rawToken'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = OAuth20Token.constructFromObject(data['token']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['login'] && !(typeof data['login'] === 'string' || data['login'] instanceof String)) {
            throw new Error("Expected the field `login` to be a primitive type in the JSON string but got " + data['login']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['rawToken'] && !(typeof data['rawToken'] === 'string' || data['rawToken'] instanceof String)) {
            throw new Error("Expected the field `rawToken` to be a primitive type in the JSON string but got " + data['rawToken']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['provider'] && !(typeof data['provider'] === 'string' || data['provider'] instanceof String)) {
            throw new Error("Expected the field `provider` to be a primitive type in the JSON string but got " + data['provider']);
        }
        // validate the optional field `token`
        if (data['token']) { // data not null
          OAuth20Token.validateJSON(data['token']);
        }

        return true;
    }


}



/**
 * The authentication login.
 * @member {String} login
 */
AuthData.prototype['login'] = undefined;

/**
 * The authentication password.
 * @member {String} password
 */
AuthData.prototype['password'] = undefined;

/**
 * The authentication raw token.
 * @member {String} rawToken
 */
AuthData.prototype['rawToken'] = undefined;

/**
 * The authentication URL.
 * @member {String} url
 */
AuthData.prototype['url'] = undefined;

/**
 * The authentication provider.
 * @member {String} provider
 */
AuthData.prototype['provider'] = undefined;

/**
 * @member {module:models/OAuth20Token} token
 */
AuthData.prototype['token'] = undefined;






export default AuthData;

