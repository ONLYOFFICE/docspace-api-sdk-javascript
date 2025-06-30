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
 * The PasswordHasher model module.
 * @module models/PasswordHasher
 * @version 3.2.0
 */
class PasswordHasher {
    /**
     * Constructs a new <code>PasswordHasher</code>.
     * @alias module:models/PasswordHasher
     */
    constructor() { 
        
        PasswordHasher.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PasswordHasher</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PasswordHasher} obj Optional instance to populate.
     * @return {module:models/PasswordHasher} The populated <code>PasswordHasher</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PasswordHasher();

            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('iterations')) {
                obj['iterations'] = ApiClient.convertToType(data['iterations'], 'Number');
            }
            if (data.hasOwnProperty('salt')) {
                obj['salt'] = ApiClient.convertToType(data['salt'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PasswordHasher</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PasswordHasher</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['salt'] && !(typeof data['salt'] === 'string' || data['salt'] instanceof String)) {
            throw new Error("Expected the field `salt` to be a primitive type in the JSON string but got " + data['salt']);
        }

        return true;
    }


}



/**
 * @member {Number} size
 */
PasswordHasher.prototype['size'] = undefined;

/**
 * @member {Number} iterations
 */
PasswordHasher.prototype['iterations'] = undefined;

/**
 * @member {String} salt
 */
PasswordHasher.prototype['salt'] = undefined;






export default PasswordHasher;

